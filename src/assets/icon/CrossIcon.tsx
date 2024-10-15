import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CrossIcon = React.memo(props => {
  return (
    <Svg
      fill="#FA5252"
      viewBox="0 0 24 24"
      width="18px"
      height="18px"
      {...props}
    >
      <Path d="M4.707 3.293L3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293z" />
    </Svg>
  );
});

CrossIcon.displayName = 'CrossIcon';
