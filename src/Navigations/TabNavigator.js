import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {Image} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import navRouts from '../Constants/navRouts';
import ListPage from '../pages/ListPage';
import Iconmanes from '../Constants/Iconmanes';
import DeletedList from '../pages/DeletedList';

function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: '#ADD8E6',
          // borderRadius: 50,
          // bottom: 20,
          // marginHorizontal: 16
        },
      }}>
      <Tab.Screen
        name={navRouts.EXPLORE}
        component={ListPage}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Ionic
                name={Iconmanes.HOME}
                size={size}
                color={focused ? 'green' : 'black'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navRouts.DEFETED_LIST}
        component={DeletedList}
        options={{
          tabBarIcon: ({focused, size}) => {
            return (
              <Ionic
                name={Iconmanes.DELETE}
                size={size}
                color={focused ? 'green' : 'black'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default memo(TabNavigation);
