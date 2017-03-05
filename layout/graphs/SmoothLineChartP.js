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
import { View, Text, Navigator, Alert } from 'react-native';

import { SmoothLine } from 'react-native-pathjs-charts';
import Button from 'react-native-button';
import styles from './GraphStyles.js';

class SmoothLineChartBasic extends Component {
  render() {
    const data = [
      [{
        x: 0,
        y: -15
      }, {
        x: 2,
        y: -20
      }, {
        x: 4,
        y: -25
      }, {
        x: 6,
        y: -20
      }, {
        x: 8,
        y: -10
      }, {
        x: 10,
        y: -5
      }, {
        x: 12,
        y: -10
      }, {
        x: 14,
        y: 20
      }, {
        x: 16,
        y: 15
      }, {
        x: 18,
        y: 10
      }, {
        x: 20,
        y: -8
      }, {
        x: 22,
        y: -15
      }, {
        x: 24,
        y: -5
      }]
    ];

    const options = {
      width: 300,
      height: 150,
      color: '#228B22',
      margin: {
        top: 40,
        left: 40,
        bottom: 40,
        right: 40
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: false,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    };

    return (
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.graphTitle}>Cash Flow (Dollars)</Text>
        <SmoothLine data={data} options={options} xKey='x' yKey='y' />
        <View style={styles.statusbar}>
          <Button
            containerStyle={styles.scrubButtons}
            onPress={() => this.handleBack()}
          >
            <Text style={styles.scrubTitles}>
              Back
            </Text>
          </Button>
          <View style={styles.spacer} />
          <Button
            containerStyle={styles.scrubButtons}
            onPress={() => this.handleNext()}
          >
            <Text style={styles.scrubTitles}>
              Next
            </Text>
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
