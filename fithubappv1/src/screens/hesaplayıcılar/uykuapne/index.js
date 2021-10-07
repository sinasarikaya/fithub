
import {Component} from 'react';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  Image,
  
} from 'react-native';



export default class uykuapne extends Component {
   
    
    state = {
        cm: 0,   
        resultText: ""
      };
    


      apnerisk = () => {
        const risk = this.state.cm 
        if (this.state.gender === "male") {
            if (risk>0 && risk<=37) {
                this.setState({ resultText: "Risk yok" });
            }
            else if (risk>37) {
                this.setState({ resultText: "Risk var" });
            }   
  }  
  
  if (this.state.gender === "female") {
    if (risk>0 && risk<=34) {
        this.setState({ resultText: "Risk yok" });
    }
    else if (risk>34) {
        this.setState({ resultText: "Risk var" });
}   
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
<View style={styles.label2container}>
<Text style={styles.labelcontainertext}> Boyun Çevresi:</Text>
<TextInput style={styles.agirlikinput}
keyboardType="numeric"
editable={true}
placeholder="            cm"
onChangeText={cm => this.setState({ cm })}

/>
</View>



<View style={styles.hesaplabutton}>
<Button onPress={this.apnerisk} iconLeft full title="Hesapla" color="#b3d9ff"/>
</View>

<Text style={styles.result2 }>{this.state.resultText}</Text>

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

label2container:{
    flexDirection: 'row',
    marginTop: 30,
    marginLeft:10,
    alignItems: 'center',
    alignSelf: 'stretch',
  },

labelcontainertext:{
    fontWeight: 'bold',
    fontSize: 17    
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

hesaplabutton:{
  marginTop:30,
  marginStart:100,
  marginEnd: 100, 
},

sıfırlabutton:{
  marginTop:10,
  marginStart:100,
  marginEnd: 100, 
},


  result2: {
    alignSelf: "center",
    color: "#663399",
    fontSize: 35,
    padding: 5,
    marginTop: 25,
  },

  
  mlogo: {
    marginTop: 50,
    marginLeft: 100,
    marginRight: 80,
  },
});

module.exports = uykuapne;
