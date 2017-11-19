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

	constructor(props){
		super(props);
		let shop1 = [];
		const email = this.props.navigation.state.params.email;
		var salesperson = firebase.database().ref('Salesperson/'+email);
    	salesperson.once("value").then(function(snapshot) {
	     snapshot.forEach(function(childSnapshot) {
	     	var key = childSnapshot.key
	      if (key == 'Dealers'){
	      	childSnapshot.forEach(function(child2Snapshot) {
	      	console.log(child2Snapshot.key);
	      	shop1.push({value: child2Snapshot.key});
	      	});
	      }   
	  });
	  });
      this.state = {
			dealer: "",
			invoices: [],
			shops: shop1
		};
	}

	_onItemPressedNext(item){
		this.props.navigation.navigate('FinalPage');
	}

	_onDealerSelected(text){
		console.log("selected dealer: "+ text);
		let invoicelist = []
		const email = this.props.navigation.state.params.email;

    	var salesperson = firebase.database().ref('Salesperson/'+email);
    	salesperson.once("value").then(function(snapshot) {
	     snapshot.forEach(function(childSnapshot) {
	     	var key = childSnapshot.key
	      if (key == 'Dealers'){
	      	childSnapshot.forEach(function(child2Snapshot) {
	      		var key = child2Snapshot.key;
	      		//console.log("text: "+ text);
		      	if(key == text) {
		      		child2Snapshot.forEach(function(child3Snapshot) {
			      		var key = child3Snapshot.key
			      		if (key =='Invoices') {
			      			child3Snapshot.forEach(function(child4Snapshot) {
			      				var child = child4Snapshot.child('Invoice No');
			      				//console.log(child.val());
			      				invoicelist.push({value: child.val()});
			      			});

			      		}
		      		});
		      	}

	      	});
	      }   
	  });
	  });
      this.setState({invoices: invoicelist});
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
	   
	    let cost=100;
	 
	    return (
	    <KeyboardAvoidingView behaviour="padding" style={styles.container1}>	
	    <View style={styles.container}>
		    <View style={styles.dropdown}>
		    	<Dropdown 
			        label='Select Shop'
			        data={this.state.shops}
			        textColor='rgba(41, 128, 185,1.0)'
			        onChangeText = {(text) => this._onDealerSelected(text) }
		      	/>
		      	<Dropdown 
		        	label='Select Invoice'
		        	data={this.state.invoices}
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
    backgroundColor: '#ffffff',
  },
  container: {
  	padding: 20,
  	marginTop: 40,
    flex: 1,
    backgroundColor: '#ffffff',
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