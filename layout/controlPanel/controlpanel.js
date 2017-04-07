import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import Button from 'react-native-button';
import styles from './controlStyles';
import AccInfo from './accountInfo';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      icon: '../img/pen.png'
    };
  }  
  
  toggleEdit() {
    if (this.state.editable) {
      this.setState({
        editable: false,
        icon: '../img/pen.png'
      });
    } else {
      this.setState({
        editable: true,
        icon: '../img/pen.png'
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <Text style={styles.TitleText}>
            User Menu
          </Text>
          <Button
            onPress={() => this.toggleEdit()}
            styles={styles.editBtn}
          >
            <Image
              style={styles.headerBtn}
              source={require('../img/pen.png')}
            />
          </Button>
        </View>

        <AccInfo editing={this.state.editable} />

        <View style={styles.divider} />

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
