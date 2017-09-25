import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase";
import Login from './src/components/Login/Login';

export default class RetailApp extends Component {

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

firebase.initializeApp({
    apiKey: "AIzaSyDgKP09XY7SLarZFMBbG0qPai_u9VNg2PQ",
    authDomain: "retailapp-fe8bc.firebaseapp.com",
    databaseURL: "https://retailapp-fe8bc.firebaseio.com",
    projectId: "retailapp-fe8bc",
    storageBucket: "retailapp-fe8bc.appspot.com",
    messagingSenderId: "23053084040"
});
