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

const blog1 = props => {
  const {navigation} = props;
  return (
      <ScrollView>
    <View style={styles.head}>
      
      <Image
          
          source={require('./blog1.png')}
          style={{width: 350, height: 200, marginTop: 20,marginLeft: 30}}
        />
        <Text style={{ fontSize: 20,fontWeight: 'bold',marginTop:15,marginLeft:100,}}>Meyve Suyu Tüketimi</Text> 


<Text style={{ fontSize: 17,marginTop:5,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Herkese merhabalar, sizlerin merak ettiği konulardan olan meyve suyu tüketimini biraz konuşalım istedim.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Meyve ve sebzelerin, kanser, kalp hastalıkları gibi birçok kronik hastalığın riskini azaltmada büyük rol oynadığını biliyoruz. Peki meyve suyu tüketimi sandığımız kadar yararlı mı?</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Yetersiz meyve ve sebze tüketiminin olduğu bir beslenme tarzı, kişinin gün içerisinde alması gereken vitamin ve minerallerin de yetersiz alımına sebep olur. Yüksek stres düzeyi, çevre kirliliği gibi çevresel etmenlerin vitamin ve minerale ihtiyacı arttırdığını düşünürsek, bu durum ileride bağışıklığın düşmesi ve birçok akut ve kronik hastalığın ortaya çıkmasına sebep olur. Eğer yeterli meyve sebze tüketimini sağlayamıyorsak bu durumda taze sıkılmış (yani vitamin ve mineral kaybının en az olduğu) meyve sularını zaman zaman tercih edebiliriz.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Yine kış aylarında bağışıklığı desteklemek adına haftada 1-2 bardak taze meyve-sebze suları tüketilebilir. Fakat unutulmamalı ki meyveler şeker içeriği yüksek olan gıdalardır. Fazla vitamin mineral alalım derken, yüksek şeker tüketimine bağlı obezite, diş çürükleri, şeker ve insülin yüksekliğine sebep oluyoruz. Ayrıca sıkılma esnasında meyvede bulunan en değerli bileşenlerden olan posanın çok büyük bir bölümünü de çöpe atmış oluyoruz. Bu sebepten ilk önerimiz meyve suyu yerine günlük 2 porsiyon taze meyve tüketimidir.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Paketli meyve suları, taze sıkılmış meyve suları ile karşılaştırıldığında daha az miktarda vitamin ve mineral içeriyor. Ayrıca ilave şeker içeren çeşitleri de mevcut. Bu sebepten paketli olanları zaten önermiyoruz.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Amerikan Pediatri Akademisi 1 yaştan küçük çocuklarda meyve suyu tüketimini önermemekte. Meyve suları asidik Ph a sahiptir. Fazla tüketildiğinde uzun dönemde dişlerde hasara sebep olur. Ayrıca çocukluk çağı obezitesi riskini arttırır. Vitamin alsınlar diye lütfen meyve suyu yerine taze meyveleri tercih edelim. Her öğünde meyve-sebze tüketen çocuklarda meyve suyu fazla şeker yüklemesi olacaktır.</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> Sıvı alımı ve vitamin takviyesi için meyve suları zaman zaman tercih edilebilir. Taneli olarak tüketilen ve şeker oranı az kompostolar da daha iyi seçenekler olacaktır.</Text> 
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

export default blog1;
