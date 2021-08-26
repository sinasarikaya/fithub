import React, {useState} from 'react';
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

const Signin = () => {
  const [selectedValue, setSelectedValue] = useState('erkek');

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

      <Text style={styles.ridLabel}>Kullanıcı Adı:</Text>
      <TextInput style={styles.rinputId}></TextInput>

      <Text style={styles.rpwLabel}>Şifre:</Text>
      <TextInput style={styles.rinputPw} secureTextEntry={true} />

      <Text style={styles.rpwLabel2}>Şifre Tekrar Gir:</Text>
      <TextInput style={styles.rinputPw2} secureTextEntry={true} />
      <Text style={styles.rcombobox}>Cinsiyet:</Text>
      <Picker
        style={styles.rpicker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Erkek" value="erkek" />
        <Picker.Item label="Kadın" value="kadın" />
      </Picker>
      <View style={styles.rregisterbutton}>
        <Button
          title="Kayıt Ol"
          color="#b3d9ff"
          onPress={() => Alert.alert('Kayıt Başarılı')}
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
    marginTop: 30,
    marginLeft: 90,
  },
  header: {
    marginTop: 10,
    marginLeft: 110,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
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
    marginTop: 20,
    marginLeft: 110,
    marginRight: 130,
  },
});
export default Signin;
