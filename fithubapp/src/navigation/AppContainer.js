import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import Mainpage from '../screens/Mainpage';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Signin"
          options={{headerShown: false}}
          component={Signin}
        />
        <Stack.Screen
          name="Mainpage"
          options={{headerShown: false}}
          component={Mainpage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
