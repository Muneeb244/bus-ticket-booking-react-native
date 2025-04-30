import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import {navigationRef} from '../utils/NavigationUtils';
import HomeScreen from '../screens/HomeScreen';
import BusListScreen from '../screens/BusListScreen';
import SeatSelectionScreen from '../screens/SeatSelectionScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="busList" component={BusListScreen} />
        <Stack.Screen name="seatSelect" component={SeatSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
