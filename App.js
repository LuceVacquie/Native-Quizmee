import React from 'react';
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//PAGES
import Home from './pages/home';
import Profile from './pages/profile';

//COMPONENTS
// import TopBar from './components/topBar';



const BottomTab = createBottomTabNavigator();


export default function App({navigation}) {
  
  return (
    <NavigationContainer>
      <Button title='Quizmee' onPress={() => navigation.navigate('Home')}/>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Home' component={Home} />
        <BottomTab.Screen name='Profile' component={Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
    
  );
}
