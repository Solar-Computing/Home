import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import Button from 'react-native-button';
import styles from './controlStyles';

export default class Residents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: 'Tommy',
      name2: 'Leonie',
      name3: 'Sujeeth',
      name4: 'Aayush',
      newResident: 'Zip Code'
    };
  }
  
  render() {
    if (this.props.editable) {
      return (
        <View style={styles.editSection}>
          <Text> {this.state.name1} </Text>
          <Text> {this.state.name2} </Text>
          <Text> {this.state.name3} </Text>
          <Text> {this.state.name4} </Text>
        </View>
     );
    } 
      return (
        <View style={styles.editSection}>
          <Text> Test Edit </Text>
          <Text> {this.state.name1} </Text>
          <Text> {this.state.name2} </Text>
          <Text> {this.state.name3} </Text>
          <Text> {this.state.name4} </Text>
        </View>
      );
  }
}
