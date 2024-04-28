import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen.js';
import HomeScreen from './pages/HomeScreen.js';
import SignUpScreen from './pages/SignUpScreen.js';
import WelcomeScreen from './pages/WelcomeScreen.js';
import Config from 'react-native-config';



const Stack = createNativeStackNavigator();
// function ChatStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name = "chat" component = {HomeScreen} />
//     </Stack.Navigator>
//   )
// }

// function RootNavigator() {
//   return (
//     <NavigationContainer>
//       <ChatStack/>
//      </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//        <NavigationContainer>
//          <Stack.Navigator>
//             {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
//              <Stack.Screen name="Login" component={LoginScreen} /> */}
//              <Stack.Screen name="Home" component={HomeScreen} />
//              {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
//            </Stack.Navigator>
//          </NavigationContainer>
//        );
//     }



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


