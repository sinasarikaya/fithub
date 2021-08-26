import React from 'react';
import {SafeAreaView} from 'react-native';
import AppContainer from './src/navigation/AppContainer.js';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
