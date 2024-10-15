import { Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Search = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.38294 16.031C11.18 17.4667 13.4587 18.1599 15.7508 17.968C18.043 17.7762 20.1748 16.714 21.7082 14.9995C23.2417 13.2851 24.0605 11.0486 23.9965 8.74925C23.9325 6.44995 22.9905 4.26243 21.364 2.63595C19.7376 1.00947 17.55 0.0674971 15.2507 0.00348871C12.9514 -0.0605197 10.7149 0.758295 9.00046 2.29177C7.28601 3.82524 6.2238 5.95697 6.03197 8.24915C5.84015 10.5413 6.53327 12.82 7.96899 14.6171L0.293253 22.2908C0.105486 22.4786 0 22.7332 0 22.9988C0 23.2643 0.105486 23.519 0.293253 23.7067C0.48102 23.8945 0.735685 24 1.00123 24C1.26677 24 1.52144 23.8945 1.7092 23.7067L9.38094 16.031H9.38294ZM8.00099 8.99926C8.00099 8.08004 8.18204 7.16982 8.53381 6.32057C8.88558 5.47132 9.40118 4.69967 10.0512 4.04968C10.7012 3.39969 11.4728 2.8841 12.3221 2.53233C13.1713 2.18056 14.0815 1.9995 15.0007 1.9995C15.92 1.9995 16.8302 2.18056 17.6794 2.53233C18.5287 2.8841 19.3003 3.39969 19.9503 4.04968C20.6003 4.69967 21.1159 5.47132 21.4677 6.32057C21.8194 7.16982 22.0005 8.08004 22.0005 8.99926C22.0005 10.8557 21.263 12.6361 19.9503 13.9488C18.6376 15.2615 16.8572 15.999 15.0007 15.999C13.1443 15.999 11.3639 15.2615 10.0512 13.9488C8.73846 12.6361 8.00099 10.8557 8.00099 8.99926Z"
        fill="#898989"
      />
    </Svg>
  );
};
