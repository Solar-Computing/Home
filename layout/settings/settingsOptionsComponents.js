import React, { Component } from 'react';
import {
  Switch,
  View,
  Text,
  Slider
} from 'react-native';
import Button from 'react-native-button';
import styles from './settings_style.js';

export class SubSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }
  render() {
    return (
      <View style={styles.OnOffSwitch}>
        <Switch
          onValueChange={(value) => {
            this.setState({ switchIsOn: value });
                                      this.props.state.switchIsOn = value;
                                    }}
          value={this.props.state.switchIsOn}
        />
      </View>
    );
  }
}

export class RoomSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state.toggle;
  }
  roomUpdate(value) {
    for (let i = 0; i < this.props.state.options.length; i++) {
      if (this.props.state.options[i].optionType === 'switch') {
        this.props.state.options[i].state.switchIsOn = value;
      }
    }
    this.props.update(value);
  }
  render() {
    return (
      <View style={styles.OnOffSwitch}>
        <Switch
          onValueChange={(value) => { 
                                      this.setState({ switchIsOn: value }); 
                                      this.props.state.toggle.switchIsOn = value;
                                      this.roomUpdate(value);
                                    }}
          value={this.props.state.toggle.switchIsOn}
        />
      </View>
    );
  }
}

export class MySlider extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.state.value = parseInt((this.state.maximum - this.state.minimum) / 2);
  }
  handlePress(num) {
    if (this.state.value + num <= this.state.maximum
      && this.state.value + num >= this.state.minimum) {
      this.setState({ value: this.state.value + num });
    }
  }
  render() {
    return (
      <View style={styles.MySlider}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button
                  style={{ fontSize: 55, color: 'red' }}
                  styleDisabled={{ color: 'red' }}
                  onPress={() => this.handlePress(-1)}
          > - </Button>
          <Text style={{ paddingLeft: 10, paddingRight: 10, fontSize: 40 }}>
          {this.state.value || '000'}</Text>
          <Button 
                  style={{ fontSize: 55, color: 'green' }}
                  styleDisabled={{ color: 'red' }}
                  onPress={() => this.handlePress(1)}
          > + </Button>
        </View>
        <Slider
          style={styles.slider}
          value={this.state.value}
          minimumValue={parseInt(this.state.minimum)}
          maximumValue={parseInt(this.state.maximum)}
          step={1}
          onValueChange={(value) => this.setState({ value })}
        />
      </View>
    );
  }
}
