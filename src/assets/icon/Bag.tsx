import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../utils';

export const BagIcon = React.memo((props?: { color?: string }) => {
  const color = props ? props?.color : Colors?.placeHolderTextBlack;
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M0 15.3C0 16.83 1.17 18 2.7 18h12.6c1.53 0 2.7-1.17 2.7-2.7V8.1H0v7.2zM15.3 1.8h-1.8V.9c0-.54-.36-.9-.9-.9s-.9.36-.9.9v.9H6.3V.9c0-.54-.36-.9-.9-.9s-.9.36-.9.9v.9H2.7C1.17 1.8 0 2.97 0 4.5v1.8h18V4.5c0-1.53-1.17-2.7-2.7-2.7z"
        fill={color || '#E89C1E'}
      />
    </Svg>
  );
});
