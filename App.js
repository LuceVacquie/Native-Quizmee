import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//PAGES
import Home from './pages/home';
import Profile from './pages/profile';

//COMPONENTS
import TopBar from './components/topBar';



const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <TopBar/>
      <Tab.Navigator
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if(route.name === 'Home'){
              iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
            } else if (route.name === 'Profile'){
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions = {{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({

// });
