import {withNavigation} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {Component} from 'react';
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

const gunlukkalori = props => {
  const {navigation} = props;
  const [selectedValue, setSelectedValue] = useState('erkek');

  return (
    <View style={styles.head}>
      <Text style={styles.giristext}>FITHUBAPP</Text>

      <Text style={styles.rcombobox}>Cinsiyet:</Text>
      <Picker
        style={styles.rpicker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Erkek" value="erkek" />
        <Picker.Item label="Kadın" value="kadın" />
      </Picker>

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
  rcombobox: {
    flexDirection: 'row',
  },

  mlogo: {
    marginTop: 80,
    marginLeft: 100,
    marginRight: 80,
  },
});

export default gunlukkalori;
