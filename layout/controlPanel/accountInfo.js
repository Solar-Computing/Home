import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import Button from 'react-native-button';
import styles from './controlStyles';

export default class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name',
      email: 'E-mail'
    };
  }  
  
  render() {
    return (
      <View style={styles.editAccount}>
        <TextInput
          style={styles.textInput}
          placeholder={'Name'}
          placeholderTextColor={'#e6e6e6'}
          editable={this.props.editing}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}
          placeholderTextColor={'#e6e6e6'}
          editable={this.props.editing}
          keyboardType={'email-address'}
        />
      </View>
    );
  }
}
