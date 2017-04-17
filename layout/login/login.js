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
      email: 'a@b.com', 
      password: 'abc123', 
      loading: false
    };
  }


  componentWillMount() {
    console.log('STARTING FIREBASE AUTHORIZATION.');
    firebase.initializeApp({
      apiKey: 'AIzaSyBDFIwygLphnXFyAfJBVBk17G9SqEa4R3w',
      authDomain: 'home-7748b.firebaseapp.com',
      databaseURL: 'https://home-7748b.firebaseio.com',
      projectId: 'home-7748b',
      storageBucket: 'home-7748b.appspot.com',
      messagingSenderId: '803538838637'
    });

    // firebase.auth().onAuthStateChanged((user) => {
		// 	if (user) {
		// 		this.setState({ loggedIn: true });
		// 	} else {
		// 		this.setState({ loggedIn: false });
		// 	}
		// });
    console.log('FINISHED FIREBASE AUTHORIZATION.');
  }

  onButtonPress() {
    console.log('LOGIN BUTTON PRESSED.');
    // console.log('{ this.state.password }');

    var str = this.state.email;
    console.log(str);
    var str2 = this.state.password;
    console.log(str2);

		const { email, password } = this.state;

		this.setState({ loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password).then(
				this.onLoginSuccess.bind(this))
			.catch(
				this.onLoginFail.bind(this));
		}
  
  onLoginFail() {
      console.log('LOGIN FAILED');

      var str = this.state.email;
      console.log(str);
      var str2 = this.state.password;
      console.log(str2);

      this.setState({
        loading: false,
        loggedIn: true
      });
      // Alert.alert(
      //   'Incorrect Email/Password',
      //   'Please Try Again.',
      //   [
      //     { text: 'OK', onPress: () => console.log('OK Pressed!') },
      //   ]
      // );
    }

    onLoginSuccess() {
      console.log('LOGIN SUCCESS');
      this.setState({
        // email: '',
        // password: '',
        loading: false,
        loggedIn: true
      });
      var str = this.state.email;
      console.log(str);
      var str2 = this.state.password;
      console.log(str2);

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
            logout={this.onLoginFail.bind(this)}
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
