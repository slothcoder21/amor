import React from 'react';
import { ScrollView, View, TextInput, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          log in
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          returnKeyType="done"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}> continue </Text>
        </TouchableOpacity>
      </View>
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