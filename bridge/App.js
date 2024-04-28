import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen.js';
import HomeScreen from './pages/HomeScreen.js';
import SignUpScreen from './pages/SignUpScreen.js';
import WelcomeScreen from './pages/WelcomeScreen.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBnRA9y1nPT9Pr2I-VM8bhZ12LXkw6Ln9g",
  authDomain: "davishacks2024-bridge.firebaseapp.com",
  projectId: "davishacks2024-bridge",
  storageBucket: "davishacks2024-bridge.appspot.com",
  messagingSenderId: "806585146053",
  appId: "1:806585146053:web:7ff4de014b752fb25e2eac",
  measurementId: "G-D45Q888MLT"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
