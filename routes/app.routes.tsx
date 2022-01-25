import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from '../stacks/MainTab';

const App = createStackNavigator();

function AppRoutes() {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="MainTab" component={MainTab as any} />
    </App.Navigator>
  );
}

export default function Routes() {
  return AppRoutes();
}
