import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LogoutIcon = React.memo(() => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M5.25 4.5a5.812 5.812 0 107.5 0M9 3v6"
        stroke="#CA282C"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
LogoutIcon.displayName = 'LogoutIcon';
