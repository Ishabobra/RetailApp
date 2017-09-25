import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {

    render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../../images/logo1.png')} 
            />
          <Text style={styles.title}>An app for distribution agencies</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logo: {
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow:1,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9
  }
});