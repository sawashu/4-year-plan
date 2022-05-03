import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Prev extends React.Component {
    constructor(props) {
        super(props);
        this.nextScreen = this.nextScreen.bind(this);
    }

    nextScreen() {
         this.props.navigation.navigate('Detail Form');
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.textBar}>Previous Plans</Text>
                <TouchableOpacity
                    style={styles.circleButton}
                    onPress={this.nextScreen}
       	        >
	                <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

	            <TouchableOpacity style={styles.logOut}>
	  	            <Text style={styles.buttpmText}>Log Out</Text>
	            </TouchableOpacity>

	            <Text style={styles.logoText}>Smart Plan</Text>
	            <Text style={styles.tmText}>tm</Text>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  textBar: {
	  fontSize: 46,
	  backgroundColor: '#d3d3d3',
	  alignSelf: 'stretch',
	  //flexDirection: 'row',
	  //flexWrap: 'Wrap',
	  borderColor: '#a9a9a9',
	  borderWidth: 2,
	  justifyContent: 'center',
	  alignItems: 'center',
	  textAlign: 'center',
  },

  circleButton: {
    alignItems: 'center',
    alignSelf: 'right',
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    textAlign: 'center',
    textColor: 'white',
    backgroundColor: '#ADD8E6',
    height: 150,
    width: 150,
    padding: 0,
    borderRadius: 200,
    marginRight: 30,
    marginBottom: 30,
  },

  buttonText: {
    color: 'white',
    alignSelf: 'right',
    fontSize: 74
  },

  logOut: {
    alignItems: 'center',
    alignSelf: 'right',
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    left: 10,
    justifyContent: 'center',
    textAlign: 'center',
    textColor: 'white',
    backgroundColor: '#ADD8E6',
    height: 50,
    width: 100,
    padding: 10,
    borderRadius: 200,
    marginTop: 7,

  },

	logoText: {
		flex: 1,
		right: 10,
		position: 'absolute',
		fontSize: 34,
		marginTop: 20,
		marginRight: 34,
	},

	        tmText: {
                flex: 1,
                right: 10,
                position: 'absolute',
                fontSize: 24,
                marginTop: 30,
        },



});

