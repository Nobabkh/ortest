import React, {memo, useEffect} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Styles from './src/Styles/Styles';
import Passwordfild from './src/components/Passwordfild';
import Login from './src/pages/Login';
import InitialNav from './src/Navigations/InitialNav';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <InitialNav />;
}

export default memo(App);
