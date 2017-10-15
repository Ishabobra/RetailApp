import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import * as firebase from "firebase";
import Firebase from './src/components/Firebase/Firebase';

export default class FinalPage extends Component {

	constructor(props){
    super(props);
    
    this.state = {
      invoice_amount: '',
      credit: '',
      loaded: 'false',
    }

    Firebase.initialise();
  }

	async _onItemPressedLogout(item){
		try {

        await firebase.auth().signOut();

        // Navigate to login view
        console.log("trying to logout");
        this.props.navigation.navigate('Home');


	    } catch (error) {
	        console.log(error);
	    }
	}

    render() {
    return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container1}>	
       <View style={styles.container}>
        <TextInput 
          placeholder = "Amount realised"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.credit.focus()}
          keyboardType="numeric"	
          style={styles.input}
          onChangeText={(text) => this.setState({invoice_amount: text})}
          value={this.state.invoice_amount}
        />
      </View>
      <View>
         <TouchableOpacity style={styles.buttonContainer}
		   	onPress={this._onItemPressedLogout.bind(this)}>
		     <Text style={styles.buttonText}>LOGOUT</Text>
		   </TouchableOpacity>
      </View>
     </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
  	height: 40,
  	backgroundColor: 'rgba(255,255,255,0.2)',
  	marginBottom: 10,
  	color: '#FFF',
  	paddingHorizontal: 10
  },
  container1: {
  	padding: 20,
    flex: 1,
    backgroundColor: '#3498db',
  },
  container: {
  	marginTop: 40,
    flex: 1,
    backgroundColor: '#3498db',
  },
  buttonContainer: {
  	backgroundColor: "#2980b9",
  	paddingVertical: 15,
  	marginBottom: 20,
  },
  buttonText: {
  	textAlign: 'center',
  	color: '#FFF',
  	fontWeight: '700'
  }
});