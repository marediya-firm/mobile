import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {AuthHeader} from '../../components/export';

/**
 * Auth Stack Configuration header
 */
export const authHeaderProp: StackNavigationOptions = {
  headerMode: 'float',
  freezeOnBlur: true,
  animationEnabled: true,
  cardOverlayEnabled: true,
  detachPreviousScreen: true,
  header: props => <AuthHeader {...props} />,
};

/**
 * Lazy component load configuration
 * All Component should import this file type safety
 * ! Don't export const import default from '../../../node_modules/yarn/lib/cli';
file get component don't support this file
 */
// export const lazyComponent: LazyComponent<React.FunctionComponent> = {
//   [routePath.LoginScreen]: require('../../screen/auth/login/LoginScreen')
//     .default,
//   [routePath.CreateAccount]:
//     require('../../screen/auth/createaccount/CreateAccount').default,
// };
