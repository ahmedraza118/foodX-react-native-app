import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './navigation/tabs';
import { HomeScreen, RestaurantScreen, OrderDeliveryScreen } from './screens';

const Stack = createStackNavigator();
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home"}
    >
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="OrderDelivery" component={OrderDeliveryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
