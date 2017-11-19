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

    const { selectedItems } = this.state;
    return (
      <View style={styles.container1}>
      <ScrollView>
        <MultiSelect
          items={this.props.vouchers}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={(selectedItems) => this.setState({ selectedItems })}
          selectedItems={selectedItems}
          selectText="Pick Vouchers"
          searchInputPlaceholderText="Search Vouchers..."
          tagRemoveIconColor="rgba(41, 128, 185,1.0)"
          tagBorderColor="rgba(41, 128, 185,1.0)"
          tagTextColor="rgba(41, 128, 185,1.0)"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="rgba(41, 128, 185,1.0)"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor = "#2980b9"
          textColor = "rgba(149, 165, 166,1.0)"
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
    paddingVertical: 10
  },
});