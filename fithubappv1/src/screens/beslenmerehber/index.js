import {withNavigation} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {Component} from 'react';
import React from 'react';
import {
  View,
  Text,
  TextSafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  Image,
  useColorScheme,
  Picker,
} from 'react-native';

const beslenmerehber = props => {
  const {navigation} = props;
  return (
    <View style={styles.head}>
      <Text style={styles.giristext}>Beslenme Rehber</Text>
      
        
      <View style={styles.mlogo}>
        <Image
          resizeMode={'center'}
          source={require('./fithub7.png')}
          style={{width: 200, height: 160}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#ccccff',
    flex: 1,
  },
  giristext: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#663399',
  },
  bhesap: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 90,
    marginLeft: 80,
    marginRight: 80,
  },

  bblog: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
  },
  bbeslenme: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
  },

  biletisim: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
  },
  mlogo: {
    marginTop: 80,
    marginLeft: 100,
    marginRight: 80,
  },
});

export default beslenmerehber;
