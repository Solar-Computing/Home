/*
Copyright 2016 Capital One Services, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.

SPDX-Copyright: Copyright (c) Capital One Services, LLC
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

import React, { Component } from 'react';
import { View, Text, Navigator, Alert, Image } from 'react-native';

import { SmoothLine } from 'react-native-pathjs-charts';
import Button from 'react-native-button';
import styles from './GraphStyles.js';

class SmoothLineChartBasic extends Component {
  render() {
    return (
      <View style={styles.graphWrapper}>
        <View>
          <Text style={styles.graphTitle}>{this.props.title}</Text>
          <Text style={styles.graphUnits}>({this.props.units})</Text>
        </View>
        <View style={styles.chartIndent} >
          <SmoothLine
            data={this.props.data}
            options={this.props.options}
            xKey='x'
            yKey='y'
          />
        </View>        
        <View style={styles.scrubBar}>
          <Button
            onPress={() => this.handleBack()}
            containerStyle={styles.scrubButton}
          >
            <View style={styles.scrubView} >              
              <Image
                  style={styles.scrubIcon}
                  source={require('../img/past.png')}
              /> 
              <Text style={styles.scrubTitles}>
                Back
              </Text>
            </View>
          </Button>
          <View style={styles.spacer} />
          <Button
            onPress={() => this.handleNext()}
            containerStyle={styles.scrubButton}
          >
            <View style={styles.scrubView} >              
              <Image
                  style={styles.scrubIcon}
                  source={require('../img/future.png')}
              /> 
              <Text style={styles.scrubTitles}>
                Next
              </Text>
            </View>
          </Button>
        </View>
      </View>
    );
  }

  handleBack() {
    Alert.alert(
      'Alert Title',
      'Reload with data one step back',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed!') },
      ]
    );
  }

  handleNext() {
    Alert.alert(
      'Alert Title',
      'Reload with data one step forward',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed!') },
      ]
    );
  }
}

export default SmoothLineChartBasic;
