import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const TabFocusLister = (): [boolean, () => void] => {
  const navigation = useNavigation();
  let remove = () => {
    ('');
  };
  const [focus, setIsFocus] = useState(true);

  remove = navigation.addListener('focus', () => {
    setIsFocus(true);
  });

  remove = navigation.addListener('blur', () => {
    setIsFocus(false);
  });

  return [focus, remove];
};
