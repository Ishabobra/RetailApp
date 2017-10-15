import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import Firebase from './src/components/Firebase/Firebase';
import * as firebase from "firebase";
import { StackNavigator } from 'react-navigation';
import MainPage from './MainPage';
import FinalPage from './FinalPage';

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
  Home: { screen: Login, navigationOptions: { header: null } },
  MainPage: { screen: MainPage, navigationOptions: { header: null }},
  FinalPage: { screen: FinalPage, navigationOptions: { header: null }},

});

export default RetailApp;
