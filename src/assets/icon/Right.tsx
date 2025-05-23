import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Right = React.memo(props => {
  return (
    <Svg viewBox="0 0 512 512" width="18px" height="18px" {...props}>
      <Path
        fill={'#16d0ba'}
        d="M504.1 256C504.1 119 393 7.9 256 7.9S7.9 119 7.9 256 119 504.1 256 504.1 504.1 393 504.1 256z"
      />
      <Path
        fill="#FFF"
        d="M392.6 172.9c-5.8-15.1-17.7-12.7-30.6-10.1-7.7 1.6-42 11.6-96.1 68.8-22.5 23.7-37.3 42.6-47.1 57-6-7.3-12.8-15.2-20-22.3-22.1-22.1-46.8-37.3-47.8-37.9-10.3-6.3-23.8-3.1-30.2 7.3-6.3 10.3-3.1 23.8 7.2 30.2.2.1 21.4 13.2 39.6 31.5 18.6 18.6 35.5 43.8 35.7 44.1 4.1 6.2 11 9.8 18.3 9.8 1.2 0 2.5-.1 3.8-.3 8.6-1.5 15.4-7.9 17.5-16.3.1-.2 8.8-24.3 54.7-72.7 37-39.1 61.7-51.5 70.3-54.9h.3s.3-.1.8-.4c1.5-.6 2.3-.8 2.3-.8-.4.1-.6.1-.6.1v-.1c4-1.7 11.4-4.9 11.5-5 11.1-4.8 14.8-16.8 10.4-28z"
      />
    </Svg>
  );
});

Right.displayName = 'Right';
