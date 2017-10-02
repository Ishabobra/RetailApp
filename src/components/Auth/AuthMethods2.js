import React, { Component } from 'react';
import { Navigator } from "react-native";
import * as firebase from "firebase";
import MainPage from '../Home/MainPage';

export default class AuthMethods2 extends Component{

  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    console.log("reached here");
    this.state = {
      isLoggedIn: true
    };
    console.log(state.isLoggedIn);
  }

    static async login(email, pass) {
    
    await firebase.auth().signInWithEmailAndPassword("isha.bobra@gmail.com", "123456"
    ).then((userData) =>
      {
              //AsyncStorage.setItem('userData', JSON.stringify(userData));
              console.log("Logged In");
              {this.changeState}
      }
    ).catch((error) =>
        {
            
        alert('Login Failed. Please try again'+error);
    });

  }

}


