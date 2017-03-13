import React, { Component } from 'react';
import { Text,
          View,
          TextInput,
          ScrollView,
          Image
} from 'react-native';
import Button from 'react-native-button';
import styles from './LoginStyles.js';
import App from './app.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  handlePress() {
    this.setState({
        loggedIn: true
    });
  }
  
  render() {
    if (this.state.loggedIn) {
      return (
        <App />
      );
    }      
      return (
        <ScrollView style={styles.scroll}>
          <Text style={styles.displayText}>Username or Email</Text>
          <TextInput
              style={styles.textInput}
          />
          <Text style={styles.displayText}>Password</Text>
          <TextInput
              style={styles.textInput}
          />
          <Button
              onPress={() => this.handlePress()}
              containerStyle={styles.button}
          >
            <Text style={styles.buttonText}>
              Login
            </Text>
          </Button>
          <View style={styles.LogoView}>
            <Image
              style={styles.Logo}
              source={require('./layout/img/logo.png')}
            />
          </View>
        </ScrollView>
      );
    
  }
}

// https://youtu.be/1xu1eeRCPEk
