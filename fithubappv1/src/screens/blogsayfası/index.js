import {withNavigation} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {Component} from 'react';
import React from 'react';
import { Title } from 'react-native-paper';
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
  ImageBackground,
} from 'react-native';

const blogsayfası = props => {
  const {navigation} = props;
  return (
    <View style={styles.head}>


      <Text style={styles.giristext}>BLOG</Text>
      <View style={styles.container}>
      <Image          
          source={require('./blog1.png')}
          style={styles.blog1foto}
          onPress={() => navigation.navigate('blog1')}
          />
      <View style={styles.contentContainer}>
<Title>
<Text onPress={() => navigation.navigate('blog1')} style={{ fontSize: 15, fontWeight: 'bold', }}> Meyve Suyu Tüketimi</Text> 
</Title>
      </View>
      </View>

      <View style={styles.container2}>
      <Image          
          source={require('./blog2.png')}
          style={styles.blog2foto}          
          />
      <View style={styles.contentContainer2}>
<Title>
<Text onPress={() => navigation.navigate('blog2')} style={{ fontSize: 15,fontWeight: 'bold', }}> Gaz/Şişkinlik Ve Beslenme</Text> 
</Title>
      </View>
     </View>

     <View style={styles.container3}>
      <Image          
          source={require('./blog3.png')}
          style={styles.blog3foto}
          />
      <View style={styles.contentContainer3}>
<Title>
<Text onPress={() => navigation.navigate('blog3')} style={{ fontSize: 15,fontWeight: 'bold', }}> Tuz Tüketimi</Text> 
</Title>
      </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#ccccff',
    flex: 1,
  },
  
  container: {
flexDirection: 'row',
alignItems: 'center',
borderRadius: 8,
overflow: 'hidden',
marginTop: 40,
marginLeft: 10,
height: 80,
 },

 container2: {
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 8,
  overflow: 'hidden',
  marginTop: 40,
  marginLeft: 10,
  height: 80,
},

container3: {
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 8,
  overflow: 'hidden',
  marginTop: 40,
  marginLeft: 10,
  height: 80,
},

blog1foto:{
flex: 0.40,
height: '80%'
},

blog2foto:{
  flex: 0.47,
height: '80%'
  },

blog3foto:{
  flex: 0.33,
  height: '80%'
    },

giristext: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#663399',
  },
});

export default blogsayfası;
