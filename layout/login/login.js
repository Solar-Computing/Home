import React, { Component } from 'react';
import { Text,
          View,
          TextInput,
          ScrollView,
          Image
} from 'react-native';
import Button from 'react-native-button';
import Drawer from 'react-native-drawer';
import styles from './LoginStyles.js';
import ControlPanel from './controlpanel.js';
import App from '../../app.js';

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
  
  // closeControlPanel = () => {
  //   this.navDrawer.close();
  // };
  // openControlPanel = () => {
  // };
  
  // toggleDrawer() {
  //   this.state.toggled ? this._drawer.close() : this._drawer.open();
  // }


  closeDrawer() {
    this.navDrawer.close();
  }


  openDrawer() {
    this.navDrawer.open();
  }

  
  render() {
    if (this.state.loggedIn) {
      return (
        <App />
      );
    }      
      return (
        <ScrollView>
          <View style={styles.LogoView}>
            <Image
              style={styles.Logo}
              source={require('../img/homeSplash1.png')}
            >
              <View accessible>
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
              </View>
              </Image>
          </View>
        </ScrollView>
      );
  }
}

// https://youtu.be/1xu1eeRCPEk
