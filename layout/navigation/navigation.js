import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Button from 'react-native-button';
import styles from './navigation_style.js';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleSettings() {
    if (this.state.index !== 0) {
      this.props.toSettings();
      this.setState({ index: 0 });
    }
  }
  handleData() {
    if (this.state.index !== 1) {
      this.props.toData();
      this.setState({ index: 1 });
    }
  }
  handleFeed() {
    if (this.state.index !== 2) {
      this.props.toFeed();
      this.setState({ index: 2 });
    }
  }

  render() {
    return (
      <View >
        <View style={styles.navbar}>
          <Image
            style={styles.navBarImage}
            source={require('../img/logo.png')}
          />
        </View>


        <View style={styles.statusbar}>
          <Button
            disabled={this.state.index === 0}
            onPress={() => this.handleSettings()}
            containerStyle={[styles.statusbarButton,
            this.state.index === 0 && styles.activebarButton]}
          >
            <Text
              style={[styles.statusbarTitles,
              this.state.index === 0 && styles.activebarTitles]}
            >
              Settings
                    </Text>
          </Button>
          <Button
            disabled={this.state.index === 1}
            onPress={() => this.handleData()}
            containerStyle={[styles.statusbarButton,
            this.state.index === 1 && styles.activebarButton]}
          >
            <Text
              style={[styles.statusbarTitles,
              this.state.index === 1 && styles.activebarTitles]}
            >
              Data
                    </Text>
          </Button>
          <Button
            disabled={this.state.index === 2}
            onPress={() => this.handleFeed()}
            containerStyle={[styles.statusbarButton,
            this.state.index === 2 && styles.activebarButton]}
          >
            <Text
              style={[styles.statusbarTitles,
              this.state.index === 2 && styles.activebarTitles]}
            >
              Feed
                    </Text>
          </Button>
        </View>
      </View>
    );
  }
}


export default Navigation;
