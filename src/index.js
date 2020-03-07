import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Routes from './routes';

FontAwesome.loadFont();

console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#7b2db3" />
      <Routes />
    </>
  );
}
