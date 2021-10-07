import {withNavigation} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {Component} from 'react';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput,
  Image,
  Navigator,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

const Home = props => {
  const {navigation} = props;
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const setMail = text => setUserEmail(text);
  const setPassword = text => setUserPassword(text);

  const loginUser = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);

      AsyncStorage.setItem('@USER_ID', auth().currentUser.uid);
      props.navigation.navigate('Mainpage');
    } catch (error) {
      console.log(error);
      Alert.alert('Üzgünüz!', 'Kullanıcı adı veya şifre hatalı !');
    }
  };

  return (
    <View style={styles.head}>
      <View style={styles.logo}>
        <Image
          resizeMode={'center'}
          source={require('./fithub7.png')}
          style={{width: 200, height: 160}}
        />
      </View>

      <Text style={styles.header}>GİRİŞ</Text>

      <Text style={styles.idLabel}>E-mail Adresi:</Text>
      <TextInput
        style={styles.inputId}
        onChangeText={setMail}
        keyboardType="email-address"
      />

      <Text style={styles.pwLabel}>Şifre:</Text>
      <TextInput
        style={styles.inputPw}
        onChangeText={setPassword}
        placeholder="********"
        secureTextEntry={true}
      />

      <View style={styles.mainbuttons}>
        <View style={styles.loginbutton}>
          <Button title="Giriş" color="#b3d9ff" onPress={loginUser} />
        </View>

        <View style={styles.registrybutton}>
          <Button
            title="Kayıt Ol"
            color="#b3d9ff"
            onPress={() => navigation.navigate('Signin')}
          />
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

  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 30,
    marginLeft: 130,
  },

  idLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 30,
  },

  pwLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
  },

  inputId: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    marginRight: 50,
  },

  inputPw: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    marginRight: 50,
  },

  mainbuttons: {
    marginTop: 40,
    marginLeft: 110,
    marginRight: 130,
  },

  registrybutton: {
    marginTop: 15,
  },

  logo: {
    marginTop: 100,
    marginLeft: 90,
  },
});

export default Home;
