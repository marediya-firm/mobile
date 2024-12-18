import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Refresh = React.memo(() => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 20c-2.792 0-5.156-.969-7.094-2.906C.97 15.156 0 12.792 0 10c0-2.792.969-5.156 2.906-7.094C4.844.97 7.208 0 10 0c1.438 0 2.813.297 4.125.89A9.515 9.515 0 0117.5 3.437V0H20v8.75h-8.75v-2.5h5.25a7.297 7.297 0 00-2.734-2.75A7.408 7.408 0 0010 2.5c-2.083 0-3.854.73-5.313 2.188C3.23 6.146 2.5 7.917 2.5 10s.73 3.854 2.188 5.313C6.146 16.77 7.917 17.5 10 17.5c1.604 0 3.052-.458 4.344-1.375a7.262 7.262 0 002.719-3.625h2.625c-.584 2.208-1.771 4.01-3.563 5.406C14.333 19.302 12.292 20 10 20z"
        fill="#CA282C"
      />
    </Svg>
  );
});

Refresh.displayName = 'Refresh';
