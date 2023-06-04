import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import navRouts from '../Constants/navRouts';
import MainNav from './MainNav';

const Stack = createStackNavigator();
function InitialNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={navRouts.LOGIN} component={Login} />
        <Stack.Screen name={navRouts.MAINNAV} component={MainNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default memo(InitialNav);
