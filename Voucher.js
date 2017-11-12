import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Firebase from './src/components/Firebase/Firebase';
import * as firebase from "firebase";
import MainPage from './MainPage';

export default class Voucher extends Component {
	
	this.state = {
    	selectedItems: []
  	}

  	this.items= [{
	    id: 'voucher1',
	    name: 'voucher1',
	  }, {
	    id: 'voucher2',
	    name: 'voucher2',
	  }, {
	    id: 'voucher3',
	    name: 'voucher3',
	  }, {
	    id: 'voucher4',
	    name: 'voucher4',
	  }, {
	    id: 'voucher5',
	    name: 'voucher5',
	  }];
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
 
  render() {
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          searchInputStyle={{ color: '#CCC' }}
        />
        <View>
          {this.multiSelect.getSelectedItemsExt(selectedItems)}
        </View>
      </View>
    );
  }
}