import {
  HomeScreenNavigation,
  HomeScreenRoute,
} from '../../../../../routes/export';

export type HomeScreenProps = {
  navigation: HomeScreenNavigation;
  route: HomeScreenRoute;
};

export type CategoryAPIResponse = {
  _id: string;
  category_name: string;
  category_image: string;
  __v: 0 | number;
};
