import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MenuIcon = React.memo(() => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <Path
      d="M12.5 5.07812C13.1472 5.07812 13.6719 4.55346 13.6719 3.90625C13.6719 3.25904 13.1472 2.73438 12.5 2.73438C11.8528 2.73438 11.3281 3.25904 11.3281 3.90625C11.3281 4.55346 11.8528 5.07812 12.5 5.07812Z"
      stroke="#CA282C"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12.5 13.6719C13.1472 13.6719 13.6719 13.1472 13.6719 12.5C13.6719 11.8528 13.1472 11.3281 12.5 11.3281C11.8528 11.3281 11.3281 11.8528 11.3281 12.5C11.3281 13.1472 11.8528 13.6719 12.5 13.6719Z"
      stroke="#CA282C"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12.5 22.2656C13.1472 22.2656 13.6719 21.741 13.6719 21.0938C13.6719 20.4465 13.1472 19.9219 12.5 19.9219C11.8528 19.9219 11.3281 20.4465 11.3281 21.0938C11.3281 21.741 11.8528 22.2656 12.5 22.2656Z"
      stroke="#CA282C"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
));

MenuIcon.displayName = 'MenuIcon';
