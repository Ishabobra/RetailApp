import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import Firebase from './src/components/Firebase/Firebase';
import * as firebase from "firebase";
import { StackNavigator } from 'react-navigation';
import MainPage from './MainPage';

/*export default class RetailApp extends Component {

  constructor(props) {
    super(props);

    Firebase.initialise();
  }

  render() {
      return (
        <Login />
      );
    }
}*/
const RetailApp = StackNavigator({
  Home: { screen: Login },
  MainPage: { screen: MainPage},
});

export default RetailApp;
