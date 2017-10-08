import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import * as firebase from "firebase";

export default class MainPage extends Component {

	_onItemPressedNext(item){

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
    	console.log("in Mainpage!");
		let shops = [{
	      value: 'Shop1',
	    }, {
	      value: 'Shop2',
	    }, {
	      value: 'Shop3',
	    }, {
	      value: 'Shop4',
	    }, {
	      value: 'Shop5',
	    }, {
	      value: 'Shop6',
	    }];

	    let invoices = [{
	      value: 'A1',
	    }, {
	      value: 'A2',
	    }, {
	      value: 'A3',
	    }, {
	      value: 'A4',
	    }, {
	      value: 'A5',
	    }, {
	      value: 'A6',
	    }];
	 
	    return (
	    <View style={styles.container}>
	    <View style={styles.dropdown}>
	      <Dropdown 
	        label='Select Shop'
	        data={shops}
	        textColor='rgba(41, 128, 185,1.0)'
	      />
	      <Dropdown 
	        label='Select Invoice'
	        data={invoices}
	        textColor='rgba(41, 128, 185,1.0)'
	      />
	      </View>
	       <View>
	       <TouchableOpacity style={styles.buttonContainer}>
		     <Text style={styles.buttonText}>NEXT</Text>
		   </TouchableOpacity>
		   <TouchableOpacity style={styles.buttonContainer}
		   	onPress={this._onItemPressedLogout.bind(this)}>
		     <Text style={styles.buttonText}>LOGOUT</Text>

		   </TouchableOpacity>
		   </View>
		   </View>
	    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    flexGrow:1,
  },
  container: {
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
  },
 });