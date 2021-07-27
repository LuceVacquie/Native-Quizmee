import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//PAGES
import Home from './pages/home';
import Profile from './pages/profile';

//COMPONENTS
import TopBar from './components/topBar';



const BottomTab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <TopBar/>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Home' component={Home} />
        <BottomTab.Screen name='Profile' component={Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({

// });
