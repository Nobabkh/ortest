import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navRouts from '../Constants/navRouts';
import ListPage from '../pages/ListPage';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const Tab = createBottomTabNavigator();

function MainNav() {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default memo(MainNav);
