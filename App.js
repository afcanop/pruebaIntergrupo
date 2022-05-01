import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import AppNavigator from './src/screen';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
