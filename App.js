import React, {useEffect} from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold, 
} from '@expo-google-fonts/comfortaa';

//COMPONENTS
import TopBar from './components/topBar';
import Categories from './pages/categories';
import TabNavigator from './tab-navigation';


const Stack = createStackNavigator();


export default function App() {

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold, 
  })

  const handleGoBack = () => {
    navigation.goBack()
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleGoBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleGoBack);
    };
  }, [])

  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
    <NavigationContainer>
      <TopBar goBack={handleGoBack}/>

      <Stack.Navigator
        initialRouteName='TabNavigator' 
      >
        <Stack.Screen 
          name='TabNavigator' 
          component={TabNavigator} 
          options={{ headerShown: false }} />

        <Stack.Screen name='Categories' component={Categories}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
  }
}
