import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from './theme';

//PAGES
import Home from './pages/home';
import Profile from './pages/profile';
import Friends from './pages/friends';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
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
              } else if (route.name === 'Friends'){
                iconName = focused ? 'ios-people' : 'ios-people-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions = {{
            activeTintColor: theme.colors.pink,
            inactiveTintColor: 'gray'
          }}
          initialRouteName='Home'
          >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Friends' component={Friends} />
          </Tab.Navigator>
    )
}

export default TabNavigator;