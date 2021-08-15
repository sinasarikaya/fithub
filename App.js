
import React from 'react';
import type {Node} from 'react';
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

} from 'react-native';



const App: () => Node = () => {
  return (


<View style={styles.head}>

<View style={styles.logo}>

<Image
resizeMode={'center'}
source={require('./src/images/fithub7.png')}
style={{width:200,height:180}}
/>
</View>


<Text style={styles.header}>GİRİŞ</Text>

<Text style={styles.idLabel}>Kullanıcı Adı:</Text>
<TextInput style={styles.inputId}></TextInput>

<Text style={styles.pwLabel}>Şifre:</Text>
<TextInput style={styles.inputPw}></TextInput>


<View style={styles.mainbuttons}>

<View style={styles.loginbutton}>

 <Button
         title="Giriş"
         color="#b3d9ff"
         onPress={() => Alert.alert('Giriş Başarılı')}
       />

</View>

<View style={styles.registrybutton}>
<Button
         title="Kayıt Ol"
         color="#b3d9ff"
         onPress={() => Alert.alert('Kayıt Sekmesi')}
       />
</View>

</View>

</View>

  );


};

const styles = StyleSheet.create({

head: {
 backgroundColor:'#ccccff',
 flex:1,
},

header: {
color: 'white',
fontWeight: 'bold',
fontSize: 50,
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

mainbuttons:{
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
}



});

export default App;
