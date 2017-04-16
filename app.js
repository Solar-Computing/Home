import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';
import Swiper from 'react-native-swiper';
import DataList from './layout/feed/feed2.js';
import Navigation from './layout/navigation/navigation.js';
import HeaderBar from './layout/header/headerBar.js';
import SettingsPage from './layout/settings/settingsPage.js';
import GraphPage from './layout/graphs/graph.js';
import styles from './layout/app_styles.js';


import Drawer from 'react-native-drawer';


import 'babel-polyfill';

let ourSwiper: Swiper;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      drawerOpen: false
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

  toSettings() {
    ourSwiper.scrollBy(0 - this.state.index, true);
    this.setState({ index: 0 });
  }

  toData() {
    ourSwiper.scrollBy(1 - this.state.index, true);
    this.setState({ index: 1 });
  }

  toFeed() {
    ourSwiper.scrollBy(2 - this.state.index, true);
    this.setState({ index: 2 });
  }

  updateIndex() {
    switch (ourSwiper.state.index) {
      case 0:
        this.refs.navigation.setState({ index: 0 });
        this.setState({ index: 0 });
        break;
      case 1:
        this.refs.navigation.setState({ index: 1 });
        this.setState({ index: 1 });
        break;
      case 2:
        this.refs.navigation.setState({ index: 2 });
        this.setState({ index: 2 });
        break;
      default:
        console.log('DEFAULT');
    }
  }

  render() {
    return (
      <View style={styles.layout}>
        <HeaderBar openMenu={() => this.props.openMenu()} />
        <Navigation
          ref="navigation"
          toFeed={() => this.toFeed()}
          toData={() => this.toData()}
          toSettings={() => this.toSettings()}
        />
          <Swiper
            ref={(swiper) => { ourSwiper = swiper; }}
            style={styles.wrapper}
            onMomentumScrollEnd={() => this.updateIndex()}
            loop={false}
            index={this.state.index}
          >
            <View style={styles.slide1}>
              <SettingsPage />
            </View>
            <View style={styles.slide2}>
              <GraphPage />
            </View>
            <View style={styles.slide3}>
              <DataList />
            </View>
          </Swiper>
      </View>
    );
  }
}

export default App;
