import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {errorResolve} from './errorFunction';
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

const Signin = props => {
  const [selectedValue, setSelectedValue] = useState('erkek');
  const {navigation} = props;

  const [usermail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordRep, setUserPasswordRep] = useState('');

  const mail = text => setUserMail(text);
  const password = text => setUserPassword(text);
  const passwordRep = text => setUserPasswordRep(text);

  const signUser = async () => {
    if (userPassword === userPasswordRep) {
      try {
        await auth().createUserWithEmailAndPassword(usermail, userPassword);
        Alert.alert('Hoşgeldiniz', 'Kayıt Başarıyla tamamlandı.');
        props.navigation.goBack();
      } catch (error) {
        console.log(error);
        Alert.alert('Üzgünüz..', errorResolve(error.code));
      }
    } else Alert.alert('Üzgünüz..', 'Şifre hatalı!');
  };

  const goBackPage = () => {
    props.navigation.navigate('Home');
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
      <Text style={styles.header}>KAYIT OL</Text>

      <Text style={styles.ridLabel}>E-mail Adresi:</Text>
      <TextInput
        style={styles.rinputId}
        onChangeText={mail}
        keyboardType="email-address"
      />

      <Text style={styles.rpwLabel}>Şifre:</Text>
      <TextInput
        style={styles.rinputPw}
        placeholder="********"
        secureTextEntry={true}
        onChangeText={password}
      />

      <Text style={styles.rpwLabel2}>Şifre Tekrar Gir:</Text>
      <TextInput
        style={styles.rinputPw2}
        placeholder="********"
        secureTextEntry={true}
        onChangeText={passwordRep}
      />
      <Text style={styles.rcombobox}>Cinsiyet:</Text>
      <Picker
        style={styles.rpicker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Erkek" value="erkek" />
        <Picker.Item label="Kadın" value="kadın" />
      </Picker>

      <View style={styles.rregisterbutton}>
        <Button title="Kayıt Ol" color="#b3d9ff" onPress={signUser} />
      </View>
      <View style={styles.rgobackbutton}>
        <Button
          title="Geri Dön"
          color="#b3d9ff"
          onPress={() => navigation.navigate('Home')}
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
  logo: {
    marginTop: 50,
    marginLeft: 90,
  },
  header: {
    marginTop: 20,
    marginLeft: 110,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
  ridLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
  },

  rpwLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
  },

  rpwLabel2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
  },
  rinputId: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
    marginRight: 50,
  },

  rinputPw: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
    marginRight: 50,
  },

  rinputPw2: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
    marginRight: 50,
  },
  rcombobox: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
  },
  rpicker: {
    color: 'white',
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
    marginRight: 50,
  },
  rdt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginLeft: 30,
  },
  rregisterbutton: {
    marginTop: 10,
    marginLeft: 110,
    marginRight: 130,
  },
  rgobackbutton: {
    marginTop: 10,
    marginLeft: 110,
    marginRight: 130,
  },
});
export default Signin;

//propslara bak
//onpress bak
