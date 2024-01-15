import {MessageType, showMessage} from 'react-native-flash-message';

export type FlashAlert = {
  message: string;
  description: string;
  type?: MessageType;
};

export const flashAlert = (props: FlashAlert) => {
  showMessage({
    message: props.message,
    description: props.message,
    type: props.type || 'danger',
    animated: true,
  });
};
