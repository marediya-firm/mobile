import React, {memo, useRef, useState} from 'react';
import {
  ScrollView,
  Pressable,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {DefinedUseQueryResult, useQueries} from '@tanstack/react-query';
import {HttpRequest} from '../https/HttpsService';
import {CategoryAPIResponse, MenuAPIResponse} from '../screen/dashboard/export';
import {Colors, ConstantString, StringConstant} from '../constant';
import {customStyle, fontStyleVariant, variant} from '../utils';
import {CategoryComponentProps, CustomText, LoadingIndicator} from './export';
import {MenuComponent} from './MenuComponent';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const CategoryComponent = memo(
  (props: CategoryComponentProps) => {
    const appString = ConstantString('strings') as StringConstant;
    const [header, setHeader] = useState<string>(appString.FoodType);

    const selectCategory = useRef<number>(0);
    const categoryId = useRef<string>('');

    const getCategory = async (): Promise<CategoryAPIResponse[]> => {
      const category = await HttpRequest.clientGetRequest<
        CategoryAPIResponse[]
      >({
        endPoint: HttpRequest.apiEndPoint.getCategory,
      });
      categoryId.current = category.data[0]._id;
      return category.data || [];
    };

    const getCategoryWiseProduct = async (): Promise<MenuAPIResponse[]> => {
      const localQueryId =
        categoryItem.data[selectCategory.current]._id || categoryId?.current;
      try {
        if (localQueryId) {
          const menu = await HttpRequest.clientGetRequest<
            MenuAPIResponse[],
            {categoryId: string}
          >({
            endPoint: HttpRequest.apiEndPoint.getMenuById,
            payload: {categoryId: localQueryId as string},
          });
          return menu.data;
        }
        return [];
      } catch (error: any) {
        return error?.message;
      }
    };

    const queryResult = useQueries({
      queries: [
        {queryKey: ['category-list'], queryFn: getCategory, initialData: []},
        {
          queryKey: [`menu-list`, selectCategory.current],
          retry: 1,
          queryFn: getCategoryWiseProduct,
          initialData: [],
        },
      ],
    });

    const categoryItem = queryResult[0];
    const menuItem = queryResult[1];

    const opacity = useSharedValue<number>(1);
    const scrollWatchRef = useRef<number>(0);

    const animationHeader = (type: string) => {
      setHeader(type);
    };

    return (
      <View>
        {categoryItem.isLoading ? (
          <LoadingIndicator style={{marginTop: 15}} />
        ) : (
          <View
            style={{
              height: Dimensions.get('screen').height / 1,
            }}>
            {/* <CustomText text={appString.FoodType} variant={variant.F50016} /> */}
            <Animated.Text
              style={[
                fontStyleVariant[variant.F50019],
                {opacity: opacity, color: Colors.darkBlack},
              ]}>
              {header}
            </Animated.Text>
            <ScrollView
              onScroll={event => {
                const yOffset = event.nativeEvent.contentOffset.y;
                console.log('yOffset', yOffset);
                // if (yOffset <= 0) {
                //   (opacity.value = withTiming(1, {duration: 10})),
                //     animationHeader(appString.FoodType);
                // } else if (yOffset < (scrollWatchRef.current || 0)) {
                //   if (yOffset > 30) {
                //     opacity.value = withTiming(opacity.value - 0.3, {
                //       duration: 10,
                //     });
                //     animationHeader(appString.FoodType);
                //   } else {
                //     if (opacity.value >= 0.1) {
                //       opacity.value = withTiming(opacity.value - 0.3, {
                //         duration: 10,
                //       });
                //     }
                //   }
                // }
                // else if (yOffset > 34) {
                //   opacity.value = withTiming(1, {duration: 10});
                //   animationHeader(appString.Popular);
                // }  
                // else {
                //   if (opacity.value >= 0.1) {
                //     opacity.value = withTiming(opacity.value - 0.09, {
                //       duration: 10,
                //     });
                //   }
                // }
                scrollWatchRef.current = yOffset;
              }}
              showsVerticalScrollIndicator
              contentContainerStyle={{
                paddingBottom: Dimensions.get('screen').height / 2,
              }}>
              <ScrollView
                scrollEnabled
                scrollEventThrottle={10}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={[localStyle.scrollStyle, {flexGrow: 1}]}>
                {categoryItem.data?.map((item, index) => {
                  const checkSelect = selectCategory.current === index;
                  const getStyle = customStyle<'category', boolean>({
                    category: checkSelect,
                  });
                  return (
                    <Pressable
                      onPress={() => {
                        selectCategory.current = index;
                        menuItem.refetch();
                      }}
                      key={item._id}
                      style={getStyle.categoryContainer}>
                      <View style={getStyle.imageContainer}>
                        <Image
                          source={{uri: item.category_image}}
                          style={localStyle.categoryImage}
                        />
                      </View>
                      <CustomText
                        text={item.category_name}
                        variant={variant.F40014}
                        extraStyle={getStyle.categoryText}
                        textProps={{numberOfLines: 1}}
                      />
                    </Pressable>
                  );
                })}
              </ScrollView>
              <View
                style={{
                  marginTop: 17,
                }}>
                <CustomText
                  text={appString.Popular}
                  variant={variant.F50019}
                  extraStyle={{
                    opacity:
                      header !== appString.FoodType
                        ? 0
                        : scrollWatchRef.current !== 0
                        ? scrollWatchRef.current + 40 + 0.3
                        : 0.3,
                  }}
                />
                {menuLoadItem?.map((item, index) => (
                  <MenuComponent {...item} key={index} />
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  },
  (prv, curr) => prv.selectCategory != curr.selectCategory,
);

const localStyle = StyleSheet.create({
  scrollStyle: {
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: -12,
    flexGrow: 1,
  },
  foodTab: {
    marginTop: 12,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 1.9,
    },
    elevation: 8,
    shadowRadius: 1.9,
    shadowColor: Colors.darkBlack,
    shadowOpacity: 0.2,
    paddingVertical: 13.7,
    paddingHorizontal: 15.6,
    borderRadius: 19.5,
    flexDirection: 'row',
  },
  categoryImage: {height: 60, width: 60, borderRadius: 35},
});

export const MenuRender = ({menuItem}: {menuItem: MenuAPIResponse[]}) => {
  return (
    <View style={{}}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        // style={{paddingBottom:12}}
        scrollEnabled
        showsVerticalScrollIndicator={true}
        data={menuItem}
        renderItem={({item, index}) => <MenuComponent {...item} key={index} />}
      />
    </View>
  );
};

const menuLoadItem = [
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdfcc891e764a79442504e',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:43:52.915Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
  {
    _id: '65bdff5f91e764a794425088',
    product_name: 'Salad',
    product_image: [],
    product_description: 'For main Salad',
    rating: 3,
    total_rating: 11,
    price: 700,
    created_at: '2024-02-03T08:54:55.353Z',
    category_id: '65a57f8436b70dcae9aad61c',
    __v: 0,
  },
];
