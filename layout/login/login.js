import React, { Component } from 'react';
import { Text,
          View,
          TextInput,
          ScrollView,
          Image,
          Alert
} from 'react-native';
import Button from 'react-native-button';
import firebase from 'firebase';
import styles from './LoginStyles.js';
import App from '../../app.js';
import Drawer from 'react-native-drawer';
import ControlPanel from '../controlPanel/controlpanel';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: '', 
      password: '', 
      loading: false
    };
  }

  onButtonPress() {
		const { email, password } = this.state;

		this.setState({ loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password).then(
				this.onLoginSuccess.bind(this))
			.catch(
				this.onLoginFail.bind(this));
		}
  
  onLoginFail() {
      this.setState({
        loading: false,
        loggedIn: false
      });
      Alert.alert(
        'Incorrect Email/Password',
        'Please Try Again.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed!') },
        ]
      );
    }

    onLoginSuccess() {
      this.setState({
        email: '',
        password: '',
        loading: false,
        loggedIn: true
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
        <ScrollView style={styles.container}>
          <Text style={styles.subtext}> WELCOME </Text>
          <Text style={styles.main}> Home </Text>
          <View accessible style={styles.loginCard}>
                <Text style={styles.displayText}>Username or Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='user@email.com'
                    label='Email'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <Text style={styles.displayText}>Password</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    placeholder='password'
                    label='Password'
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <View style={styles.buttonRow}>
                  <Button
                    onPress={() => this.onButtonPress()}
                    containerStyle={styles.button}
                  >
                    <Text style={styles.buttonText}>
                      Login
                    </Text>
                  </Button>
              </View>
          </View>
              
        </ScrollView>
      );
  }
}

// https://youtu.be/1xu1eeRCPEk
