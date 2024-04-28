import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 70, color: '#9FA54B'}}>
        b r i d g e
      </Text>
      <Button
        title="log in"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="new to bridge? sign up"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C9D09A',
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  }
});

export default WelcomeScreen;