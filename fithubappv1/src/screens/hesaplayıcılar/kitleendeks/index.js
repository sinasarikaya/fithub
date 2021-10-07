
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
import { marginTop } from 'styled-system';


export default class kitleendeks extends Component {
   
    
    state = {
        cm: 0,
        kg: 0,
        resultNumber: 0,
        resultText: ""
      };
    
/*
      sıfırla = () => {
        if(this.cm && this.kg){
          this.setState({ cm: 0})
          this.setState({ kg: 0})
          this.setState({ resultNumber: 0})
          handleCalculate = handleCalculate(this.cm,this.kg)
          this.handleCalculate();
        }};
*/

      handleCalculate = () => {
        const imc = this.state.kg / (Math.pow(this.state.cm,2));
        this.setState({
          resultNumber: imc.toFixed(2)
        });
    
        if (imc < 18.5) {
          this.setState({ resultText: "Zayıf" });
        } 
        else if (imc > 18.5 && imc < 25) {
          this.setState({ resultText: "Normal Kilo" });
        } 
        else if (imc >= 25 && imc < 30) {
          this.setState({ resultText: "Kilolu" });
        } 
        else {
          this.setState({ resultText: "Obezite" });
        }
      };
  

render(){
  return (
    <View style={styles.head}>
      <Text style={styles.giristext}>FITHUBAPP</Text>

<View style={styles.labelcontainer}>
<Text style={styles.labelcontainertext}> Boy:</Text>
<TextInput style={styles.boyinput}
keyboardType="numeric"
editable={true}
placeholder="          m"
returnKeyType="done"
type={'money'}
options={{
            precision: 2,
            separator: '.',
            delimiter: '.',
            unit: '',
            suffixUnit: ''
          }}
onChangeText={cm => this.setState({ cm })}
/>
</View>

<View style={styles.label2container}>
<Text style={styles.labelcontainertext}> Ağırlık:</Text>
<TextInput style={styles.agirlikinput}
keyboardType="numeric"
editable={true}
placeholder="          kg"
onChangeText={kg => this.setState({ kg })}

/>
</View>



<View style={styles.hesaplabutton}>
<Button onPress={this.handleCalculate} iconLeft full title="Hesapla" color="#b3d9ff"/>
</View>


<Text style={styles.result}>{this.state.resultNumber}</Text>
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

 
labelcontainer:{
  flexDirection: 'row',
  marginTop: 30,
  marginLeft:90,
  alignItems: 'center',
  alignSelf: 'stretch',
},
label2container:{
    flexDirection: 'row',
    marginTop: 10,
    marginLeft:90,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
labelcontainertext:{
marginTop:10,
fontWeight: 'bold',
fontSize: 17,
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

result: {
    alignSelf: "center",
    color: "#663399",
    fontSize: 35,
    padding: 5,
    marginTop: 40,
  },

  result2: {
    alignSelf: "center",
    color: "#663399",
    fontSize: 35,
    padding: 5,
    marginTop: 10,
  },

  
  mlogo: {
    marginTop: 15,
    marginLeft: 100,
    marginRight: 80,
  },
});

module.exports = kitleendeks;
