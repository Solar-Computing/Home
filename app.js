import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import DataList from './layout/feed/feed.js';
import Navigation from './layout/navigation/navigation.js';
import SettingsPage from './layout/settings/settingsPage.js';
import GraphPage from './layout/graphs/graph.js';
import styles from './layout/app_styles.js';
import 'babel-polyfill'
//import { Client } from 'bugsnag-react-native';

let ourSwiper: Swiper;

class App extends Component {
  constructor(props) {
    console.log('APP');
    super(props);
    //this.client = new Client('b23af9fb9b2e3d5c144b1772a44c68ab');
    this.state = {
      index: 0
    };
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
      <View>
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
