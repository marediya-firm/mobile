import {SheetDefinition, registerSheet} from 'react-native-actions-sheet';
import PunchSwipe from './PunchSwipe';

registerSheet('punch-swipe-sheet', PunchSwipe);

export type PunchSwipePayload = {
  sheetId: 'punch-swipe-sheet';
  payload: {value: string};
};

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'punch-swipe-sheet': SheetDefinition<PunchSwipePayload>;
  }
}

export {};