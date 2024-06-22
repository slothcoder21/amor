import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

function profile() {
  return (
    <View style={styles.container}>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
