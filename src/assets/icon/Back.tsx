import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

export const Back = memo(() => {
  return (
    <Svg width={15} height={24} viewBox="0 0 15 24" fill="none">
      <Path
        d="M4.738 12.005l8.978-8.979c.248-.246.384-.576.384-.928 0-.351-.136-.681-.384-.928L12.93.384A1.302 1.302 0 0012 0c-.351 0-.681.136-.928.384L.383 11.074a1.302 1.302 0 00-.383.93c-.001.354.135.685.383.933l10.68 10.68c.247.247.577.383.928.383.352 0 .682-.136.929-.384l.786-.786a1.314 1.314 0 000-1.856l-8.968-8.969z"
        fill="#fff"
      />
    </Svg>
  );
});

Back.displayName = 'Back';
