import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../views/Home';
import Cart from '../views/Cart';
import Favorites from '../views/Favorites';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);
