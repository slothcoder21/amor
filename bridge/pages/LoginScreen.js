import React from 'react';
import { ScrollView, View, TextInput, Button, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';
import {BRIDGE_AUTH} from '../../bridge/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginScreen({ navigation }) {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[loading, setLoading] = useState(false);
  const auth = BRIDGE_AUTH;

  const signIn = async() => {
    setLoading(True);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    }
    catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.title}>
            log in
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize='none'
            returnKeyType="done"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry="true"
            returnKeyType="done"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}> continue </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#C9D09A',
  },
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

export default LoginScreen;