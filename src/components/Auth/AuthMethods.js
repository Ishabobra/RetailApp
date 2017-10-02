import React, { Component } from 'react';
import { Navigator } from "react-native";
import * as firebase from "firebase";
import MainPage from '../Home/MainPage';

export default class AuthMethods extends Component{

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.changeState = this.changeState.bind(this);
    this.login = this.login.bind(this);

  }

  changeState() {
    console.log("reached here");
    this.state = {
      isLoggedIn: true
    };
    console.log(state.isLoggedIn);
  }

   render() {
    console.log("in here");

    <Text> Yes  </Text>
  }

    static async login(email, pass) {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword("isha.bobra@gmail.com", "123456")


        console.log("Logged In..");
        {this.changeState}

    } catch (error) {
        console.log(error.toString())
    }

  }

}


