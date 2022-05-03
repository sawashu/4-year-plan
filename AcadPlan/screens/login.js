import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TextInput, View, StyleSheet } from 'react-native';

 

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.nextScreen = this.nextScreen.bind(this)
  }

  nextScreen() {
    this.props.navigation.navigate('Previous Plans');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput //Username input box
          placeholder={'Username'}
          style={styles.input}
        />

        <TextInput //Password input box
          placeholder={'Password'}
          style={styles.input}
          secureTextEntry={true}
        />

        <Button //Login enter box
          title={'Login'}
          style={styles.input}
          onPress={this.nextScreen}
        />
      </View>
    );
  }
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: { //Set dimensions for our boxes
    width: 500,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});


