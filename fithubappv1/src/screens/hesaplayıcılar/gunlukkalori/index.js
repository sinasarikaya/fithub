import {withNavigation} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {Component} from 'react';
import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {Picker} from '@react-native-picker/picker';
import {ListItem,Checkbox, Icon } from "native-base";
import { CheckBox } from 'react-native-elements';
import { men_BMR, women_BMR, activityIndicator } from "./utils.js";
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
  ListIte
} from 'react-native';
const _ = require("lodash");

const initialState = {
  gender: "male",
  weight: "",
  cm: "",
  age: "",
  activity: "bmr",
  
};


export default class gunlukkalori extends Component {
   

  state = {
    
    ...initialState
    
  };

  _calculateCalories = async () => {

    if (
      this.state.cm.trim().length === 0 ||
      this.state.weight.trim().length === 0 ||
      this.state.age.trim().length === 0
    ) {
      alert("Bütün değerleri doldurun!");
    } else {
      await this.calculateCalories();
    }
  };

  calculateCalories = async () => {
    let weightKG;
    let heightCM;
    const age = this.state.age;
    weightKG = this.state.weight;
    heightCM = this.state.cm;
    if (this.state.gender === "male") {
      let dailyCalories = men_BMR(weightKG, heightCM, age);
      dailyCalories = activityIndicator(dailyCalories, this.state.activity);
      await this.setState({ dailyCalories });
      alert(dailyCalories);
      ;
    }
    if (this.state.gender === "female") {
      let dailyCalories = women_BMR(weightKG, heightCM, age);
      dailyCalories = activityIndicator(dailyCalories, this.state.activity);
      await this.setState({ dailyCalories });
      alert(dailyCalories);
    }
 };

render(){
  return (
    <View style={styles.head}>
      <Text style={styles.giristext}>FITHUBAPP</Text>
<View style={styles.cinsiyet}>
<Text style={styles.cinsiyettext}>Cinsiyet:</Text>
<CheckBox
  center
  title='Erkek'
  textStyle={{fontWeight: 'bold',fontSize: 15,}}
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  uncheckedColor='blue'
  checkedColor='blue'
  checked={this.state.gender === "male" ? true : false}
  onPress={async () => {await this.setState({ gender: "male" });}}
/>

<CheckBox
  center
  title='Kadın'
  textStyle={{fontWeight: 'bold',fontSize: 15,}}
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  uncheckedColor='#FC00D5'
  checkedColor='#FC00D5'
  checked={this.state.gender === "female" ? true : false}
  onPress={async () => {await this.setState({ gender: "female" });}}
  />
 </View>

<View style={styles.yas}>
<Text style={styles.yastext}> Yaş:</Text>
<TextInput style={styles.yasinput}
keyboardType="numeric"
editable={true}
maxLength={12}
numberOfLines={1}
placeholder="            yaş"
onChangeText={age => this.setState({ age })}

/>
</View>

<View style={styles.yas}>
<Text style={styles.yastext}> Boy:</Text>
<TextInput style={styles.boyinput}
keyboardType="numeric"
editable={true}
maxLength={12}
numberOfLines={1}
placeholder="            cm"
onChangeText={cm => this.setState({ cm })}

/>
</View>

<View style={styles.yas}>
<Text style={styles.yastext}> Ağırlık:</Text>
<TextInput style={styles.agirlikinput}
keyboardType="numeric"
editable={true}
maxLength={12}
numberOfLines={1}
placeholder="           kg"
onChangeText={weight => this.setState({ weight })}

/>
</View>

<View style={styles.aktivite}>
<Text style={styles.yastext}> Aktivite:</Text>
<Picker
enum= 'dropdown'
style={{width: 200, height: 5,backgroundColor: 'white', fontWeight: 'bold',marginLeft: 10,}} 
itemStyle={{height: 5,} }
onValueChange={activity => this.setState({ activity })}
>
<Picker.Item label="Bazal Metabolik Oran (BMR)" value="bmr" />
  <Picker.Item label="Sedanter  - Hareketsiz" value="hic" />
  <Picker.Item label="Biraz Aktif - Haftada 1-3 kez Antrenman" value="az" />
  <Picker.Item label="Orta Aktif - Haftada 3-5 kez Antrenman" value="orta" />
  <Picker.Item label="Çok Aktif - Haftada 6-7 kez Antrenman " value="cok" />
  <Picker.Item label="Ekstra Aktif - Her gün Profosyonel Seviyede Antrenman " value="ekstra" />
</Picker>
</View>

<View style={styles.hesaplabutton}>
<Button onPress={() => this._calculateCalories()} iconLeft full title="Hesapla" color="#b3d9ff"/>

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
  } 
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#ccccff',
    flex: 1,
  },

  cinsiyet:{
    flexDirection: 'row',
    marginTop: 20,
    marginLeft:10,
    fontWeight: 'bold',
    alignItems: 'center'
  },

cinsiyettext:{
  marginTop:5,
  fontWeight: 'bold',
  fontSize: 17,
},
 
yas:{
  flexDirection: 'row',
  marginTop: 10,
  marginLeft:10,
  alignItems: 'center',
  alignSelf: 'stretch',
},
yastext:{
marginTop:10,
fontWeight: 'bold',
fontSize: 17,
},

yasinput:{
  height: 50,
    width: "30%",
    backgroundColor: "white",
    borderRadius: 10,   
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center",

},
boyinput:{
  height: 50,
    width: "30%",
    backgroundColor: "white",
    borderRadius: 10,   
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center",

},
agirlikinput:{
  height: 50,
    width: "30%",
    backgroundColor: "white",
    borderRadius: 10,   
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",

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

  aktivite:{
    flexDirection: 'row',
    marginTop: 10,
    marginLeft:10,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 50
  },

hesaplabutton:{
  marginTop:20,
  marginStart:100,
  marginEnd: 100, 
},

  mlogo: {
    marginTop: 50,
    marginLeft: 100,
    marginRight: 80,
  },
});

module.exports = gunlukkalori;
