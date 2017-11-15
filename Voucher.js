import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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
      id: 'xyz',
      name: 'xyz',
    }];

    const { selectedItems } = this.state;
    return (
      <View style={styles.container1}>
      <ScrollView>
        <MultiSelect
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={(selectedItems) => this.setState({ selectedItems })}
          selectedItems={selectedItems}
          selectText="Pick Vouchers"
          textColor ="rgba(204, 204, 204,1.0)"
          searchInputPlaceholderText="Search Vouchers..."
          tagRemoveIconColor="rgba(41, 128, 185,1.0)"
          tagBorderColor="rgba(41, 128, 185,1.0)"
          tagTextColor="rgba(41, 128, 185,1.0)"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="rgba(41, 128, 185,1.0)"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor = "#2980b9"
        />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#ffffff',
     paddingVertical: 10,
  },
});