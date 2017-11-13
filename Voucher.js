import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Firebase from './src/components/Firebase/Firebase';
import * as firebase from "firebase";
import MainPage from './MainPage';

export default class Voucher extends Component {
	
	constructor(props){
    super(props);
    this.state = {
      selectedItems: []
    };
  }
 
  render() {

    let items= [{
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

    const { selectedItems } = this.state;
    return (
      <View style={styles.container1}>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={(selectedItems) => this.setState({ selectedItems })}
          selectedItems={selectedItems}
          selectText="Pick Vouchers"
          textColor ="rgba(41, 128, 185,1.0)"
          searchInputPlaceholderText="Search Vouchers..."
          //altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="rgba(41, 128, 185,1.0)"
          tagBorderColor="rgba(41, 128, 185,1.0)"
          tagTextColor="rgba(255, 255, 255,1.0)"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="rgba(41, 128, 185,1.0)"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor = "#2980b9"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    flexGrow:1,
    backgroundColor: '#3498db',

  },
  container1: {
    flex: 1,
    backgroundColor: '#3498db',
  },
});