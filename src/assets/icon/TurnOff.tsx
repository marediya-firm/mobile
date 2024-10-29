import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const TurnOff = React.memo(() => {
  return (
    <Svg
      fill={'#D0D0D0'}
      height="20px"
      width="20px"
      viewBox="0 0 198.715 198.715"
    >
      <Path d="M161.463 48.763a7.5 7.5 0 00-10.607 10.606c13.763 13.763 21.342 32.062 21.342 51.526 0 19.463-7.579 37.761-21.342 51.523-14.203 14.204-32.857 21.305-51.516 21.303-18.659-.001-37.322-7.104-51.527-21.309-28.405-28.405-28.402-74.625.005-103.032a7.5 7.5 0 00-10.607-10.606c-34.255 34.255-34.258 89.992-.005 124.245 17.132 17.132 39.632 25.697 62.135 25.696 22.497-.001 44.997-8.564 62.123-25.69 16.595-16.594 25.734-38.659 25.734-62.129.001-23.471-9.139-45.537-25.735-62.133z" />
      <Path d="M99.332 97.164a7.5 7.5 0 007.5-7.5V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v82.164c0 4.143 3.357 7.5 7.5 7.5z" />
    </Svg>
  );
});

TurnOff.displayName = 'TurnOff';
