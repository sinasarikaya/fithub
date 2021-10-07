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

const blog2 = props => {
  const {navigation} = props;
  return (
      <ScrollView>
    <View style={styles.head}>
      
      <Image
          
          source={require('./blog2.png')}
          style={{width: 325, height: 275, marginTop: 10,marginLeft: 40}}
        />
        <Text style={{ fontSize: 20,fontWeight: 'bold',marginTop:15,marginLeft:90,}}>Gaz/Şişkinlik Ve Beslenme</Text> 


<Text style={{ fontSize: 17,marginTop:5, marginLeft:10,marginRight:10,textAlign: 'justify',}}> Gaz ve şişkinlik sindirim sürecinin normal bir parçasıdır. Sindirilemeyen bazı gıdaların kolondaki bakteriler tarafından fermente edilmesiyle gazların üretimi gerçekleşmektedir. Aşırı gaz üretimi veya sindirim sistemi kaslarının hareketindeki bozukluk sonucu şişkinlik oluşur. Gaz, özellikle yemekten sonra oluşan şişkinliğin en yaygın nedenidir. Bazen ciddi tıbbi durumlardan kaynaklansa da, çoğunlukla beslenmemizde bulunan bazı yiyecekler ve içerik maddelerinden kaynaklanmaktadır. Şişkinliğinizi azaltma amaçlı yapabileceklerinizi hemen sıralıyorum. 👇🏻</Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}>• Büyük ve yoğun öğünler tüketiyor ve kendinizi rahatsız hissediyorsanız daha küçük porsiyonları tercih etmek faydalı olabilir. Gerekirse gün içerisine ek öğün planlanabilir. </Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}>• Gıdaların yeterli çiğnenmeden hızlıca tüketilmesi sonucu yiyeceklerle birlikte yutulan hava miktarı artar. Yemekleri daha iyi çiğnemeli ve yavaş yemelisiniz. </Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}>• Yüksek lif içerikli yiyecekler, FODMAP dediğimiz sindirilmeyen karbonhidratları içerirler. Bu sindirilmeyen karbonhidratlar kolonda bakteriler tarafından parçalanır ve gaz üretimine sebep olur. Yüksek FODMAP içeren gıdalar, buğday, soğan, sarımsak, brokoli, karnabahar lahana, enginar, fasulye, elma, armut, kurubaklagiller gibi lif miktarı yüksek gıdalardır. Bu gıdaları tamamen beslenmeden çıkarmak yerine, hangisinin size rahatsızlık verdiğini tek tek deneyerek ve şikayetlerinizi not ederek hangi gıdanın iyi gelmediğini öğrenebilirsiniz ya da bir beslenme uzmanından yardım alabilirsiniz. </Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}>• Yaşa bağlı laktoz intoleransı görülme sıklığı toplumda %70 gibi yüksek bir oranda görülmektedir. Süt yerine yoğurt, kefir ve probiyotik içeren süt ürünlerini tercih edebilirsiniz. </Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> </Text>
<Text style={{ fontSize: 17,marginLeft:10,marginRight:10,textAlign: 'justify',}}> </Text> 
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

export default blog2;
