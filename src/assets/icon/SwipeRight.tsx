import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SwipeRight = React.memo((props: any) => {
  return (
    <Svg
      width={23}
      height={14}
      viewBox="0 0 23 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.315 1.177a1.174 1.174 0 000 1.663l4.565 4.576-4.576 4.576a1.176 1.176 0 001.663 1.664l5.414-5.414a1.174 1.174 0 000-1.663l-5.414-5.414a1.171 1.171 0 00-1.652.012z"
        fill="#293646"
      />
      <Path
        d="M7.931 1.177a1.175 1.175 0 000 1.663l4.565 4.576-4.576 4.576a1.176 1.176 0 101.663 1.664l5.414-5.414a1.174 1.174 0 000-1.663L9.583 1.165a1.171 1.171 0 00-1.652.012z"
        fill="#293646"
        fillOpacity={0.56}
      />
      <Path
        d="M.356 1.177a1.175 1.175 0 000 1.663l4.565 4.576-4.577 4.576a1.176 1.176 0 101.664 1.664L7.42 8.242a1.175 1.175 0 000-1.663L2.008 1.165a1.171 1.171 0 00-1.652.012z"
        fill="#293646"
        fillOpacity={0.25}
      />
    </Svg>
  );
});