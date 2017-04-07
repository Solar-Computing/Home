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
      email: 'E-mail',
      newpswd: 'Password',
      confirmpswd: 'Password',
      zip: 'Zip Code'
    };
  }
  
  updateName = (text) => {
      this.setState({ name: text });
  }
  updateEmail = (text) => {
      this.setState({ email: text });
  }
  updateZip = (text) => {
    this.setState({ zip: text });
  }
  updateNewPassword = (text) => {
    this.setState({ newpswd: text });
  }
  updateConfirmPassword = (text) => {
    this.setState({ confirmpswd: text });
  }
  
  render() {
    if (this.props.editing) {
      return (
        <View style={styles.editAccount}>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.name}
            placeholderTextColor={'#e6e6e6'}
            onChangeText={this.updateName}
          />
          <TextInput
            style={styles.textInput}
            placeholder={this.state.email}
            placeholderTextColor={'#e6e6e6'}
            keyboardType={'email-address'}
            onChangeText={this.updateEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'New Password'}
            placeholderTextColor={'#e6e6e6'}
            keyboardType={'default'}
            secureTextEntry={true}
            onChangeText={this.updateNewPassword}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Confirm Password'}
            placeholderTextColor={'#e6e6e6'}
            keyboardType={'default'}
            secureTextEntry={true}
            onChangeText={this.updateConfirmPassword}
          />
          <TextInput
            style={styles.textInput}
            placeholder={this.state.zip}
            placeholderTextColor={'#e6e6e6'}
            keyboardType={'phone-pad'}
            onChangeText={this.updateZip}
          />
        </View>
     );
    } 
      return (
        <View style={styles.editAccount}>
          <Text
            style={styles.name}
          >
            {this.state.name}
          </Text>
          <Text
            style={styles.email}
          >
            {this.state.email}  
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.state.newpswd}
            placeholderTextColor={'#e6e6e6'}
            secureTextEntry={true}
            editable={false}
          />
          <Text
            style={styles.zip}
          >
            {this.state.zip}  
          </Text>
        </View>
      );
    
  }
}
