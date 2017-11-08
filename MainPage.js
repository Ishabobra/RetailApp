import React, { Component } from 'react';
import { StyleSheet, TextInput,Text, View, Image, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import * as firebase from "firebase";
import Login from './Login';
import FinalPage from './FinalPage';

export default class MainPage extends Component {

	_onItemPressedNext(item){
		this.props.navigation.navigate('FinalPage');
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
	    let creditNotes = [{
	      value: 'CN1',
	    }, {
	      value: 'CN2',
	    }, {
	      value: 'CN3',
	    }, {
	      value: 'CN4',
	    }, {
	      value: 'CN5',
	    }, {
	      value: 'CN6',
	    }];

	    let cost=100;
	 
	    return (
	    <KeyboardAvoidingView behaviour="padding" style={styles.container1}>	
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
		      {/* Add credit voucher Need to change to multiselect dropdown */}
			   <Dropdown 
		        label='Credit Notes'
		        data={creditNotes}
		        textColor='rgba(41, 128, 185,1.0)'
		      	/>
		      <View style={{height: 10}} />
		      <Text style={styles.baseText}>
			    	Amount Due: {cost} 
			  </Text>
			  <View style={{height: 10}} />
			   	<View style={styles.input} >
			   		<Text style={{width: 100,fontSize: 20, fontWeight: 'bold'}}>
			    	Amount Paid: 
			  		</Text>
		      		<TextInput
			    		placeholder = "0.0"
          				placeholderTextColor="rgba(0,0,0,0.7)"
		          		keyboardType="numeric"
		          		style={styles.paidBox}

			    	/>
			    </View>
		    </View>
		    <View>
		        <TouchableOpacity style={styles.buttonContainer}
		        onPress={this._onItemPressedNext.bind(this)}>
			    <Text style={styles.buttonText}>NEXT</Text>
			    </TouchableOpacity>
			    <TouchableOpacity style={styles.buttonContainer}
			   	onPress={this._onItemPressedLogout.bind(this)}>
			    <Text style={styles.buttonText}>LOGOUT</Text>

				</TouchableOpacity>
			</View>
		 </View>
		   </KeyboardAvoidingView>
	    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    flexGrow:1,
  },
  container1: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  container: {
  	padding: 20,
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
  },
  paidBox: {
  	marginBottom: 10,
  	color: '#FFF',
  	width: 100,
  	fontSize: 20, 
  	fontWeight: 'bold',
  },
  input: {
  	height: 30,
  	flexDirection: 'row',
  },
 });