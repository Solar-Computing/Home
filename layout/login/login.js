import React, { Component } from 'react';
import { Text,
          View,
          TextInput,
          ScrollView,
          Image,
          Alert
} from 'react-native';
import Button from 'react-native-button';
import styles from './LoginStyles.js';
import App from '../../app.js';
import Drawer from 'react-native-drawer';
import ControlPanel from '../controlPanel/controlpanel';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  login() {
    this.setState({
        loggedIn: true
    });
  }
  
  logout() {
    this.setState({
      loggedIn: false
    });
  }

  toggleMenu() {
    if (this.state.drawerOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.navDrawer.open();
      this.setState({
        drawerOpen: true
      });
  }

  closeMenu() {
    this.navDrawer.close();
      this.setState({
        drawerOpen: false
    });
  }

  render() {
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 15 }
    };
    
    if (this.state.loggedIn) {
      return (
        <Drawer
          ref={(ref) => this.navDrawer = ref}  
          type="overlay"
          content={<ControlPanel
            closeMenu={this.closeMenu.bind(this)}
            logout={this.logout.bind(this)}
          />}
          tapToClose
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          tweenHandler={(ratio) => ({
            main: { opacity: (2 - ratio) / 2 }
          })}
          tweenDuration={300}
          negotiatePan
          
        >
          <App
            openMenu={this.openMenu.bind(this)}
          />
        </Drawer>
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
                    onPress={() => this.login()}
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
