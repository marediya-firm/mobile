import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Arrow = React.memo((props: { left?: boolean }) => {
  const left = props?.left;
  return (
    <Svg width={9} height={13} viewBox="0 0 9 13" fill="none">
      <Path
        opacity={0.7}
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          !left
            ? 'M.608 2.18l4.758 4.437-4.437 4.758 1.448 1.35L8.164 6.52 1.96.733.608 2.18z'
            : 'M8.325 2.18L3.567 6.618l4.437 4.758-1.448 1.35L.769 6.52 6.974.733l1.35 1.448z'
        }
        fill="#293646"
      />
    </Svg>
  );
});
