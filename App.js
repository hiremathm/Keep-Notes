import React,{useState} from 'react';
import {View, StyleSheet} from "react-native";
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer'

// import Home from './screans/home'
// import ReviewDetails from './screans/reviewDetails'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-light': require('./assets/fonts/Nunito-Light.ttf')
})

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);
  if(fontsloaded){
    return (
      <Navigator/>
    );
  }else{
    return (
    <AppLoading 
      startAsync = {getFonts}
      onFinish = {() => setFontsLoaded(true)}
    />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});