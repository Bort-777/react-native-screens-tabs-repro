import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './components/HomeStack/HomeStack';
import ProfileStack from './components/ProfileStack/ProfileStack';

export type NavigationStackParamList = {
  ['Home']: undefined;
  ['Profile']: undefined;
};

const Tab = createBottomTabNavigator<NavigationStackParamList>();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
