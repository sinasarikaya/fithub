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

const blog3 = props => {
  const {navigation} = props;
  return (
      <ScrollView>
    <View style={styles.head}>
      
      <Image
          
          source={require('./blog3.png')}
          style={{width: 300, height: 250, marginTop: 20,marginLeft: 55}}
        />
        <Text style={{ fontSize: 20,fontWeight: 'bold',marginTop:15,marginLeft:150,}}>Tuz Tüketimi</Text> 


<Text style={{ fontSize: 17,marginTop:5, marginLeft:10,marginRight:10,textAlign: 'justify',}}> Herkese merhaba umarım herkes iyidir. Bugün sizlerle tuz tüketimiyle ilgili konuşmak istedim. Türkiye tuz tüketimi en fazla olan ülkelerden bir tanesi. Danışanlarımda da tuz tüketimi konusunda problem yaşayanlarla karşılaşıyorum. Maalesef beslenmede göz ardı ettiğimiz konulardan bir tanesi.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Sofra tuzu sodyum ve klordan oluşuyor. 1 gr tuz içerisinde yaklaşık 400 mg sodyum bulunuyor. Vücudumuzda birçok fizyolojik süreçte rol alıyor, elektrolit dengesi, kan basıncı, kas ve sinir sistemi, böbrekler gibi birçok yerde rolü var. Bu sebepten aslında almamız gereken bir mineral. Fakat fazla tuz tüketimi başta hipertansiyon ve kalp hastalıkları olmak üzere mide kanseri, felç gibi ciddi hastalıklara sebep olmakta. Ülkemizde her 3 ölümden 1’ i hipertansiyon sebepli. Ayrıca hipertansiyonu olan kişilerin %50’ si bunun farkında değil. Aslında ülkemizde ciddi bir sorun haline gelmiş durumda. Burada tüketim miktarı oldukça önemli. Ülkemizde uygulanan SALTÜRK-2 çalışmasına göre tuz tüketimi 15 gr. Önerilen tuz miktarı ise günlük maksimum 6 gr olması. Yani neredeyse önerilen miktarın 2,5 katı. Oldukça fazla bir miktar. Özellikle işlenmiş birçok ürün, peynir, salamura zeytin, salça, turşu çeşitleri ve ekmek tuz tüketimimizin çok büyük kısmını oluşturuyor. Bu gıdaların kullanımında dikkat etmek gerekli. Peki ne gibi önlemler alabiliriz?</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> ‼️Tadını kontrol etmeden yemeklere ekstra tuz eklenmemeli.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> ‼️Yemek yaparken kullanılan tuz azaltılmalı.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> ‼️Baharatlardan faydalanabilirsiniz. Fazla tuz alımını engelleyebilir.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> ‼️Hazır gıdalarda etiketlerde tuz içeriklerini kontrol edin</Text> 
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> ‼️Saydığımız yüksek tuzlu gıdaların tüketimini sınırlayın.</Text> 
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> ‼️Potasyum böbreklerden sodyumun geri emilimini azaltarak kan basıncını düşürebilir. Potasyum içeriği yüksek meyve ve sebzeler tüketin.</Text> 

<Text>

  
  

</Text>
      
      
      
      
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#ccccff',
    flex: 1,
  },
   


});

export default blog3;
