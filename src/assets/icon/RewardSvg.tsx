import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {G, Path, Svg} from 'react-native-svg';
import {Colors} from '../../utils';

export const RewardSvg = memo((props: {color?: string}) => {
  const color = props ? props?.color : Colors?.placeHolderTextBlack;
  return (
    <Svg width="23" height="23" viewBox="0 0 23 23" fill={color}>
      <G id="Layer 2">
        <G id="Layer 3">
          <Path
            id="Vector"
            d="M21.1186 11.6393H2.07099C1.71033 11.6387 1.36461 11.4952 1.10958 11.2402C0.854552 10.9851 0.711025 10.6394 0.710449 10.2787L0.710449 6.6499C0.711025 6.28924 0.854552 5.94352 1.10958 5.68849C1.36461 5.43346 1.71033 5.28994 2.07099 5.28936H21.1186C21.4793 5.28994 21.825 5.43346 22.08 5.68849C22.335 5.94352 22.4786 6.28924 22.4791 6.6499V10.2787C22.4786 10.6394 22.335 10.9851 22.08 11.2402C21.825 11.4952 21.4793 11.6387 21.1186 11.6393ZM2.07099 6.19712C1.95091 6.19712 1.83574 6.24482 1.75082 6.32974C1.66591 6.41465 1.6182 6.52982 1.6182 6.6499V10.2787C1.6182 10.3988 1.66591 10.514 1.75082 10.5989C1.83574 10.6838 1.95091 10.7315 2.07099 10.7315H21.1186C21.2389 10.7315 21.3543 10.6839 21.4395 10.599C21.5248 10.5142 21.573 10.399 21.5736 10.2787V6.6499C21.573 6.52962 21.5248 6.41445 21.4395 6.3296C21.3543 6.24475 21.2389 6.19711 21.1186 6.19712H2.07099ZM18.3975 22.5236H4.79208C4.19067 22.5231 3.61405 22.2839 3.18879 21.8586C2.76352 21.4334 2.52436 20.8567 2.52378 20.2553V11.1865C2.51947 11.1243 2.528 11.0618 2.54886 11.003C2.56972 10.9442 2.60245 10.8903 2.64502 10.8447C2.68758 10.799 2.73908 10.7627 2.79631 10.7378C2.85353 10.7129 2.91526 10.7001 2.97766 10.7001C3.04006 10.7001 3.10179 10.7129 3.15901 10.7378C3.21624 10.7627 3.26773 10.799 3.3103 10.8447C3.35287 10.8903 3.3856 10.9442 3.40646 11.003C3.42731 11.0618 3.43585 11.1243 3.43154 11.1865V20.2553C3.43154 20.6162 3.57488 20.9622 3.83003 21.2174C4.08518 21.4725 4.43124 21.6159 4.79208 21.6159H18.3975C18.7584 21.6159 19.1044 21.4725 19.3596 21.2174C19.6147 20.9622 19.7581 20.6162 19.7581 20.2553V11.1865C19.7537 11.1243 19.7623 11.0618 19.7831 11.003C19.804 10.9442 19.8367 10.8903 19.8793 10.8447C19.9219 10.799 19.9734 10.7627 20.0306 10.7378C20.0878 10.7129 20.1495 10.7001 20.2119 10.7001C20.2743 10.7001 20.3361 10.7129 20.3933 10.7378C20.4505 10.7627 20.502 10.799 20.5446 10.8447C20.5871 10.8903 20.6199 10.9442 20.6407 11.003C20.6616 11.0618 20.6701 11.1243 20.6658 11.1865V20.2553C20.6652 20.8567 20.4261 21.4334 20.0008 21.8586C19.5755 22.2839 18.9989 22.5231 18.3975 22.5236V22.5236ZM11.5948 22.5236C11.4747 22.5236 11.3595 22.4759 11.2746 22.391C11.1897 22.3061 11.142 22.1909 11.142 22.0708V11.1865C11.142 11.0664 11.1897 10.9512 11.2746 10.8663C11.3595 10.7814 11.4747 10.7337 11.5948 10.7337C11.7149 10.7337 11.8301 10.7814 11.915 10.8663C11.9999 10.9512 12.0476 11.0664 12.0476 11.1865V22.0708C12.0476 22.1909 11.9999 22.3061 11.915 22.391C11.8301 22.4759 11.7149 22.5236 11.5948 22.5236V22.5236ZM11.5948 6.19712C11.5619 6.19672 11.5291 6.19307 11.4968 6.18623C10.9265 6.0578 8.03562 5.3895 7.27153 4.62542C7.06099 4.41502 6.89395 4.16521 6.77995 3.89025C6.66595 3.61529 6.60722 3.32057 6.60712 3.02292C6.60702 2.72527 6.66555 2.43051 6.77936 2.15548C6.89317 1.88044 7.06005 1.63052 7.27045 1.41998C7.48085 1.20943 7.73066 1.04239 8.00561 0.928393C8.28057 0.814393 8.57529 0.755666 8.87294 0.755565C9.17059 0.755464 9.46535 0.813991 9.74039 0.927804C10.0154 1.04162 10.2653 1.20849 10.4759 1.41889C11.24 2.18079 11.9104 5.07167 12.0367 5.64419C12.0539 5.7188 12.0518 5.79659 12.0305 5.87013C12.0091 5.94368 11.9693 6.01053 11.9148 6.06433C11.83 6.14926 11.7149 6.19703 11.5948 6.19712V6.19712ZM8.87371 1.6627C8.60457 1.66204 8.34129 1.74134 8.1173 1.89056C7.8933 2.03977 7.71868 2.25216 7.61559 2.50079C7.5125 2.74941 7.4856 3.02305 7.53829 3.28698C7.59098 3.55092 7.72089 3.79326 7.91153 3.98324C8.26419 4.33807 9.74011 4.81263 10.9809 5.13045C10.6631 3.88746 10.1885 2.41372 9.83589 2.06107C9.70981 1.93435 9.55986 1.83389 9.3947 1.76551C9.22954 1.69713 9.05246 1.66219 8.87371 1.6627V1.6627ZM11.5948 6.19712C11.4748 6.19655 11.3599 6.14886 11.2748 6.06433C11.2221 6.00987 11.184 5.94308 11.1638 5.87006C11.1437 5.79704 11.1422 5.72013 11.1594 5.64637C11.2879 5.07385 11.9583 2.18297 12.7224 1.41889C13.1474 0.994039 13.7237 0.755371 14.3246 0.755371C14.9255 0.755371 15.5018 0.994039 15.9268 1.41889C16.1375 1.62935 16.3046 1.87927 16.4186 2.15437C16.5327 2.42947 16.5914 2.72435 16.5914 3.02215C16.5914 3.31995 16.5327 3.61483 16.4186 3.88993C16.3046 4.16503 16.1375 4.41496 15.9268 4.62542C15.1562 5.3895 12.2653 6.05997 11.6949 6.19712C11.6616 6.20021 11.6281 6.20021 11.5948 6.19712ZM14.3159 1.6627C13.9551 1.66287 13.609 1.80613 13.3537 2.06107C13.0011 2.41372 12.5265 3.88964 12.2065 5.13263C13.4495 4.8148 14.9254 4.33807 15.2781 3.98542C15.4695 3.79555 15.6 3.55303 15.6532 3.28872C15.7063 3.02441 15.6796 2.75027 15.5764 2.50119C15.4732 2.25212 15.2982 2.03939 15.0738 1.89007C14.8493 1.74075 14.5855 1.6616 14.3159 1.6627V1.6627Z"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
});