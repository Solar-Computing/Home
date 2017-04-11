import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import Button from 'react-native-button';
import styles from './controlStyles';
import SectionHeader from './menuHeader.js';
import AccInfo from './accountInfo';
import Residents from './residents';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accInfoEditable: false,
      resInfoEditable: false
    };
  }  
  
  toggleAccInfoEdit() {
    if (this.state.accInfoEditable) {
      this.setState({
        accInfoEditable: false,
      });
    } else {
      this.setState({
        accInfoEditable: true,
      });
    }
  }

  toggleResInfoEdit() {
    if (this.state.resInfoEditable) {
      this.setState({
        resInfoEditable: false,
      });
    } else {
      this.setState({
        resInfoEditable: true,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionHeader
          toggleEdit={this.toggleAccInfoEdit.bind(this)}
          editable={this.state.accInfoEditable}
          title={'Account Info'}
        />

        <AccInfo editable={this.state.accInfoEditable} />

        <View style={styles.divider} />

        <SectionHeader
          toggleEdit={this.toggleResInfoEdit.bind(this)}
          editable={this.state.resInfoEditable}
          title={'Residents'}
        />

        <Residents editable={this.state.resInfoEditable} />

        <View style={styles.navBtns} >
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.logout();
            }}
            >
            <Text style={styles.buttonText}> Logout </Text>  
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.closeMenu();
            }}
          >
            <Text style={styles.buttonText}> Close Menu </Text>  
          </TouchableOpacity>  
        </View>

      </View>
    );
  }
}
