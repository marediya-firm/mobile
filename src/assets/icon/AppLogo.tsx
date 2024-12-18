import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const AppLogo = React.memo(() => {
  return (
    <Svg width={70} height={84} viewBox="0 0 70 84" fill="none">
      <Path
        d="M24.64 64.204c-.123-.04-.205-.04-.287-.082-.657 0-1.313.041-2.01.082m-.492 0c-5.291-.122-9.762-1.676-13.453-4.66C4.5 56.437 2.574 52.676 2.574 48.26V3.128c6.07-.04 11.279 2.657 15.627 8.135 4.019 5.07 6.152 11.16 6.398 18.192 0 .45 0 12.02.04 34.75.37 6.54 3.528 11.323 9.475 14.39 3.446 1.757 7.137 2.616 10.992 2.534a849.957 849.957 0 0117.883-.409h3.732c-.369-6.5-2.83-11.079-7.423-13.777-3.487-2.085-8.244-3.025-14.274-2.82l-19.933.081h-3.24z"
        stroke="#95AE45"
        strokeWidth={4.75168}
        strokeMiterlimit={3}
        strokeLinecap="round"
      />
    </Svg>
  );
});

AppLogo.displayName = 'AppLogo';
