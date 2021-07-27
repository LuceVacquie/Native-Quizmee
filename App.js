import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from './context';

//STYLE
import { theme } from './theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

//PAGES
import { SignIn, SignUp } from './pages/authScreens';
import Home from './pages/home';
import Profile from './pages/profile';
import Friends from './pages/friends';
import { Categories } from './pages/homeScreens';


//CREATE THE NAVIGATIONS
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

//Home navigation -> different types of quiz
const HomeStackScreen = () => {
  return(
  <HomeStack.Navigator headerMode='none'>
    <HomeStack.Screen name='Home' component={Home}/>
    <HomeStack.Screen 
      name='Categories' 
      component={Categories} 
      options={({ route }) => ({
        title: route.params.name
      })}/>
  </HomeStack.Navigator>
  )
}

//Bottom tab navigation -> Home / Profile / Friends
const TabNav = () => {
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
          <Tab.Screen name='Home' component={HomeStackScreen} />
          <Tab.Screen name='Profile' component={Profile} />
          <Tab.Screen name='Friends' component={Friends} />
        </Tab.Navigator>
  )
}



export default function App() {

  const [userToken, setUserToken] = useState(null)

  const authContext = useMemo(() => {
    return{
      signIn: () => {
        setUserToken('asdf')
      },
      signUp: () => {
        setUserToken('asdf')
      },
      signOut: () => {
        setUserToken(null)
      },
    }
  }, [])

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold, 
  })


  if (!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

      <TopBar/>

      {userToken ? (
        <TabNav/>
        // <Tab.Navigator>
        //   <Tab.Screen name='Home' component={HomeStackScreen} />
        //   <Tab.Screen name='Profile' component={Profile} />
        //   <Tab.Screen name='Friends' component={Friends} />
        // </Tab.Navigator>
        ) : (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen 
            name='SignIn' 
            component={SignIn} 
            options={{ title: 'Sign in' }}
          />

          <Stack.Screen 
            name='SignUp' 
            component={SignUp} 
            options={{ title: 'Create an account' }}
          />
        </Stack.Navigator>
      )
      }
      </NavigationContainer>
    </AuthContext.Provider>
    
  );
  }
}
