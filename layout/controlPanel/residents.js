import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image
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
          <View style={styles.residentEdit}>
            <Image
              style={styles.deleteIcon}
              source={require('../img/fillminus.png')}
            />
            <Text style={styles.residentNames}> {this.state.name1} </Text>
          </View>
          <View style={styles.residentEdit}>
            <Image
              style={styles.deleteIcon}
              source={require('../img/fillminus.png')}
            />
            <Text style={styles.residentNames}> {this.state.name2} </Text>
          </View>
          <View style={styles.residentEdit}>
            <Image
              style={styles.deleteIcon}
              source={require('../img/fillminus.png')}
            />
            <Text style={styles.residentNames}> {this.state.name3} </Text>
          </View>
          <View style={styles.residentEdit}>
            <Image
              style={styles.deleteIcon}
              source={require('../img/fillminus.png')}
            />
            <Text style={styles.residentNames}> {this.state.name4} </Text>
          </View>
          <View style={styles.residentEdit}>
            <Image
              style={styles.deleteIcon}
              source={require('../img/fillplus.png')}
            />
            <Text style={styles.residentNames}> Add Resident </Text>
          </View>
        </View>
      );
    } 
      return (
        <View style={styles.editSection}>
          <Text style={styles.residentNames}> {this.state.name1} </Text>
          <Text style={styles.residentNames}> {this.state.name2} </Text>
          <Text style={styles.residentNames}> {this.state.name3} </Text>
          <Text style={styles.residentNames}> {this.state.name4} </Text>
        </View>
     );
  }
}
