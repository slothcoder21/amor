import React, { useState }from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Login success"))
      .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <Text style={styles.title}>
        log in
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize='none'
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={(onHandleLogin)}>
        <Text style={styles.buttonText}> continue </Text>
      </TouchableOpacity>
    </View>
  )
}
// function LoginScreen({ navigation }) {
//   return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>
    //     log in
    //   </Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Username"
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     secureTextEntry
    //   />
    //   <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate('Home')}
    //   >
    //     <Text style={styles.buttonText}> continue </Text>
    //   </TouchableOpacity>
    // </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C9D09A'
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    alignSelf: 'flex-start',
    color: '#9FA54B'
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#9FA54B',
    borderRadius: 25,
    backgroundColor: '#FFFFFF'
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 25,
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 20,
    color: '#9FA54B'
  }
});

// export default LoginScreen;