import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import {Baa} from './Screens/Ba'
import { createBottomTabNavigator } from 'react-navigation-tabs';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
        />
        <TouchableOpacity style={{borderRadius: 100, backgroundColor: 'Blue'}}><Text>Submit</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
      borderRadius: 100,
    },
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
