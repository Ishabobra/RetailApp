import React, { Component } from 'react';
import { StyleSheet, TextInput,Text, View, Image, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import MultiSelect from 'react-native-multiple-select';
import Firebase from './src/components/Firebase/Firebase';
import * as firebase from "firebase";
import Login from './Login';
import FinalPage from './FinalPage';
import LoginForm from './LoginForm';
import Voucher from './Voucher';
export default class MainPage extends Component {

	/*constructor(props){
		super(props);
		this.state = {
			email: this.props.navigation.state.email
		};
		console.log("id is "+this.props.navigation.state.email);
	}*/

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
    	const email = this.props.navigation.state.params.email;
    	//const fbref =firebase.database().ref();
    	console.log("in Mainpage!");
    	console.log(email);

    	/*let data = firebase.database().ref().child(email).once('value', function(snapshot) {
			var EmailID = firebase.database().ref(email+'/EmailId');
		});*/
    	var salesperson= firebase.database().ref('Salesperson').child(email+'/EmailId').key;
    	console.log(salesperson);
    	
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
			   	<Voucher/>
			    <View style={{height: 10}} />
			    <Text style={styles.textStyle}>
				    Amount Due: {cost} 
				</Text>
				<View style={styles.input} >
				<View style={{height: 10}} />
			   		<Text style={styles.textStyle}>
			    	Amount Paid: 
			  		</Text>
		      		<TextInput
			    		placeholder = "0.00"
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
  	width: 100,
  	fontSize: 20, 
  	fontWeight: 'bold',
  	height: 40,
  	marginBottom: 10,
  	color: '#FFF',
  	paddingHorizontal: 10
  },
  input: {
  	height: 40,
  	flexDirection: 'row',
  },
  textStyle: {
  	fontSize: 20, 
  	fontWeight: 'bold',
  	marginTop: 10,
  },
 });