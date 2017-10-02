import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, StatusBar } from 'react-native';
//import AuthMethods from '../Auth/AuthMethods';
import MainPage from '../Home/MainPage';
import Login from './Login';

export default class LoginForm extends Component {

	constructor(props){
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }
  }

	/*_onItemPressed(item){
       AuthMethods.login(this.state.email,this.state.password);
    }*/

    render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput 
          placeholder = "Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}	
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />
        <TextInput 
          placeholder = "Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.buttonContainer}
          //onPress={this._onItemPressed.bind(this)}>
           onPress={() => navigate('MainPage')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
  	height: 40,
  	backgroundColor: 'rgba(255,255,255,0.2)',
  	marginBottom: 10,
  	color: '#FFF',
  	paddingHorizontal: 10
  },
  buttonContainer: {
  	backgroundColor: "#2980b9",
  	paddingVertical: 15
  },
  buttonText: {
  	textAlign: 'center',
  	color: '#FFF',
  	fontWeight: '700'
  }
});

