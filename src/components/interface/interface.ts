import { RouteProp } from '@react-navigation/native';
import { CreateAccountInput } from '../../data/import';
import { TabNavParamList } from '../../routes/export';
import { StyleProp, ViewStyle } from 'react-native';
import { HistoryStoreState } from '../../zustand/export';

export interface CustomInputProps extends CreateAccountInput {
  index: number;
}

export interface Load {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export interface TabUtilsProps {
  tabDetail: RouteProp<TabNavParamList>;
  focus: boolean;
}

export interface CategoryComponentProps {
  selectCategory: number;
  setSelectCategory: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * @link RenderDay component
 *
 */
export type RenderDayProps = {
  day: moment.Moment;
  leaveCalenderDate?: HistoryStoreState['calender'];
};
