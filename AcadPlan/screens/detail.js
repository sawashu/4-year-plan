import * as React from 'react';
import { StyleSheet, View, Text, Button, TextInput }
    from 'react-native';
import { NavigationContainer }
    from '@react-navigation/native';
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';


export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.nextScreen = this.nextScreen.bind(this);
    }
    nextScreen() {
        this.props.navigation.navigate('Academic Plan');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{justifyContent: 'space-between'}}>
                    <Text style={styles.textform}>     Plan Name: <TextInput style={styles.input}/></Text>
                    <Text style={styles.textform}>              Major: <TextInput style={styles.input}/></Text>
                    <Text style={styles.textform}> Starting Date: <TextInput style={styles.inputDate}/>   <TextInput style={styles.inputDate}/></Text>
                    <View style={styles.butview}>
                        <Button onPress={this.nextScreen}
                        title="Enter" />
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textform: {
    alignSelf: 'center',
    width: 400,
    height: 'auto',
    padding: 5,
    marginBottom: 1,
    fontSize: 18,
  },
  input: {
    alignSelf: 'center',
    width: 'auto',
    height: 'auto',
    margin: 1,
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
  },
  inputDate: {
    alignSelf: 'center',
    width: 95,
    height: 'auto',
    margin: 1,
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
  }, 
  butview: {
    height: 'auto',
    alignItems: 'center',

  },
  button: {
    height: 'auto',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 10
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    },
})
