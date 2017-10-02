import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import Firebase from './src/components/Firebase/Firebase';
import * as firebase from "firebase";

export default class RetailApp extends Component {

  constructor(props) {
    super(props);

    Firebase.initialise();
  }

  render() {
      return (
        <Login />
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
