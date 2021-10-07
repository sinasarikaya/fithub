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

const iletisim = props => {
  const {navigation} = props;
  return (
    <View style={styles.head}>
      <Text style={styles.giristext}>İletişim</Text>
      <View style={styles.instalogo}>
      <Image          
          source={require('./instagram.png')} 
          style={{width: 30, height: 30}}        
        />
      <Text style={styles.instatext}>instagram.com/fithubapp</Text>
        </View>

        <View style={styles.twitterlogo}>
      <Image          
          source={require('./twitter.png')} 
          style={{width: 30, height: 30}}        
        />
      <Text style={styles.twittertext}>twitter.com/fithubapp</Text>
        </View>

        <View style={styles.maillogo}>
      <Image          
          source={require('./mail.png')} 
          style={{width: 30, height: 30}}        
        />
      <Text style={styles.mailtext}>fithubappdestek@gmail.com</Text>
        </View>

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
 
instalogo: {
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop:50,
  marginLeft:15
},
twitterlogo: {
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop:10,
  marginLeft:15
},

maillogo: {
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop:10,
  marginLeft:15
},

  instatext: {
  fontWeight: 'bold',
  color: '#9F3BA7',
  fontSize: 20,
},

twittertext: {
  fontWeight: 'bold',
  color: '#43BDEF',
  fontSize: 20,
},

mailtext: {
  fontWeight: 'bold',
  color: '#000000',
  fontSize: 20,
},

mlogo: {
  marginTop: 180,
  marginLeft: 100,
  marginRight: 80,
},

});

export default iletisim;
