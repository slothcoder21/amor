import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';


import LoginScreen from './pages/LoginScreen.js';
import HomeScreen from './pages/HomeScreen.js';
import SignUpScreen from './pages/SignUpScreen.js';
import WelcomeScreen from './pages/WelcomeScreen.js';
import ProfilePhoto from './pages/createprofile/profilePhoto.js';
import Register from './pages/createprofile/register.js';


import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { auth } from './config/firebase.js';

//import Config from 'react-native-config';

const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value = {{user, setUser}}>
      { children }
    </AuthenticatedUserContext.Provider>
  )
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Home" component = {HomeScreen} />
    </Stack.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator defaultScreenOptions={WelcomeScreen} >
      <Stack.Screen name = "Welcome" component = {WelcomeScreen} />
      <Stack.Screen name = "Login" component = {LoginScreen} />
      <Stack.Screen name = "SignUp" component = {SignUpScreen} />
      <Stack.Screen name="Profile" component={ProfilePhoto}/>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  const {user, setUser} = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, 
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [user]);
  if (loading)
  {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      { user ? <ChatStack /> : <AuthStack /> }
     </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  )
}



// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//          <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} /> 
//         <Stack.Screen name="Home" component={HomeScreen} />
//          <Stack.Screen name="SignUp" component={SignUpScreen} /> 
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//export default App;


