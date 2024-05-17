import React, {memo, useRef} from 'react';
import {
  ScrollView,
  Pressable,
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {useQueries} from '@tanstack/react-query';
import {HttpRequest} from '../https/HttpsService';
import {CategoryAPIResponse, MenuAPIResponse} from '../screen/dashboard/export';
import {Colors, ConstantString, StringConstant} from '../constant';
import {customStyle, variant} from '../utils';
import {CategoryComponentProps, CustomText, LoadingIndicator} from './export';
import {MenuComponent} from './MenuComponent';
import {AnimatedScrollViewHome} from '../screen/auth/export';

export type ScrollWatchRef = {
  offset: number;
  height: number;
};

export const CategoryComponent = memo(
  (props: CategoryComponentProps) => {
    const appString = ConstantString('strings') as StringConstant;

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

    const scrollWatchRef = useRef<ScrollWatchRef>({
      offset: 0,
      height: 0,
    });

    return (
      <View>
        {categoryItem.isLoading ? (
          <LoadingIndicator style={localStyle.loadingIndicator} />
        ) : (
          <View style={localStyle.wrapper}>
            <AnimatedScrollViewHome
              appString={appString}
              scrollWatchRef={scrollWatchRef}>
              <ScrollView
                scrollEnabled
                scrollEventThrottle={10}
                showsHorizontalScrollIndicator={false}
                horizontal
                onLayout={({nativeEvent}) =>
                  (scrollWatchRef.current.height = nativeEvent.layout.height)
                }
                contentContainerStyle={[localStyle.scrollStyle]}>
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
                <MenuRender menuLoadItem={menuLoadItem} />
              </View>
            </AnimatedScrollViewHome>
          </View>
        )}
      </View>
    );
  },
  (prv, curr) => prv.selectCategory != curr.selectCategory,
);

const localStyle = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height / 1,
  },
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
  loadingIndicator: {marginTop: 15},
});

export const MenuRender = ({
  menuLoadItem,
}: {
  menuLoadItem: Array<MenuAPIResponse>;
}) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        scrollEnabled
        showsVerticalScrollIndicator={true}
        data={menuLoadItem}
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
