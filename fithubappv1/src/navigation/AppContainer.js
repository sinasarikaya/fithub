import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import Mainpage from '../screens/Mainpage';
import hesaplayıcılarana from '../screens/hesaplayıcılar';
import gunlukkalori from '../screens/hesaplayıcılar/gunlukkalori';
import kitleendeks from '../screens/hesaplayıcılar/kitleendeks';
import auth from '@react-native-firebase/auth';
import blogsayfası from '../screens/blogsayfası';
import beslenmerehber from '../screens/beslenmerehber';
import iletisim from '../screens/iletisim';
import blog1 from '../screens/blogsayfası/bloglar/blog1';
import blog2 from '../screens/blogsayfası/bloglar/blog2';
import blog3 from '../screens/blogsayfası/bloglar/blog3';
import sıvıihtiyac from '../screens/hesaplayıcılar/sıvıihtiyac';
import uykuapne from '../screens/hesaplayıcılar/uykuapne';

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
        <Stack.Screen
          name="hesaplayıcılarana"
          options={{headerShown: false}}
          component={hesaplayıcılarana}
        />
        <Stack.Screen
          name="gunlukkalori"
          options={{headerShown: false}}
          component={gunlukkalori}
        />
        <Stack.Screen
          name="blogsayfası"
          options={{headerShown: false}}
          component={blogsayfası}
        />
        <Stack.Screen
          name="beslenmerehber"
          options={{headerShown: false}}
          component={beslenmerehber}
        />
        <Stack.Screen
          name="iletisim"
          options={{headerShown: false}}
          component={iletisim}
        />
        <Stack.Screen
          name="blog1"
          options={{headerShown: false}}
          component={blog1}          
        />
        <Stack.Screen
          name="blog2"
          options={{headerShown: false}}
          component={blog2}          
        />
        <Stack.Screen
          name="blog3"
          options={{headerShown: false}}
          component={blog3}          
        />
        <Stack.Screen
          name="kitleendeks"
          options={{headerShown: false}}
          component={kitleendeks}          
        />
        <Stack.Screen
          name="sıvıihtiyac"
          options={{headerShown: false}}
          component={sıvıihtiyac}          
        />
        <Stack.Screen
          name="uykuapne"
          options={{headerShown: false}}
          component={uykuapne}          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
