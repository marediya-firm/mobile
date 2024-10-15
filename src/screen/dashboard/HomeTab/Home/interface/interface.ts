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

export interface MenuAPIResponse {
  _id: string;
  product_name: string;
  product_image: string[];
  product_description: string;
  rating: number;
  total_rating: number;
  price: number;
  created_at: Date;
  category_id: string;
  __v: number;
}

export interface ServerTime {
  currentTime: string;
  currentDate: string;
}

export interface CalculateTime {
  punchIn: string;
  punchOut: string | null;
}
