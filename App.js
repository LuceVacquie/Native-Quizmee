import React, { useEffect, useMemo, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from './context';
import AsyncStorage from '@react-native-community/async-storage';

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

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGIN':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      case 'SIGNUP':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGOUT':
        return{
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  }

  

  const authContext = useMemo(() => ({

    signIn: async(userName, password) => {
      let userToken;
      userToken = null;
      if(userName === 'user' && password === 'password'){
        try {
          userToken = 'abcd'
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e)
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken})
    },

    signUp: () => {

    },

    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch(e) {
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },

  }), [])

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e) {
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken})
    }, 1000)
  }, [])

  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold, 
  })

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  if (!fontsLoaded && loginState.isLoading){
    return <AppLoading/>
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

      <TopBar/>

      {loginState.userToken !== null ? 
        <TabNav/>
        : 
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
      }
      </NavigationContainer>
    </AuthContext.Provider>
    
  );
}
