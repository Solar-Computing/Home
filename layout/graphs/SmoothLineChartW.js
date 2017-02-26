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

'use strict'

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { SmoothLine } from 'react-native-pathjs-charts'

class SmoothLineChartBasic extends Component {
  render() {
    let data = [
      [{
        "x": 0,
        "y": 10
      }, {
        "x": 2,
        "y": 10
      }, {
        "x": 4,
        "y": 12
      }, {
        "x": 6,
        "y": 10
      }, {
        "x": 8,
        "y": 15
      }, {
        "x": 10,
        "y": 40
      }, {
        "x": 12,
        "y": 35
      }, {
        "x": 14,
        "y": 25
      }, {
        "x": 16,
        "y": 10
      }, {
        "x": 18,
        "y": 8
      }, {
        "x": 20,
        "y": 36
      }, {
        "x": 22,
        "y": 15
      }, {
        "x": 24,
        "y": 5
      }],
      [{
        "x": 0,
        "y": 4
      }, {
        "x": 2,
        "y": 4
      }, {
        "x": 4,
        "y": 5
      }, {
        "x": 6,
        "y": 4
      }, {
        "x": 8,
        "y": 6
      }, {
        "x": 10,
        "y": 26
      }, {
        "x": 12,
        "y": 19
      }, {
        "x": 14,
        "y": 10
      }, {
        "x": 16,
        "y": 6
      }, {
        "x": 18,
        "y": 5
      }, {
        "x": 20,
        "y": 20
      }, {
        "x": 22,
        "y": 8
      }, {
        "x": 24,
        "y": 2
      }]
    ]

    let options = {
      width: 300,
      height: 300,
      color: '#59bbda',
      margin: {
        top: 20,
        left: 20,
        bottom: 20,
        right: 20
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
    }

    return (
      <View style={{flexDirection:'column'}}>
        <Text>Water Use vs Filtration (gal)</Text>
        <SmoothLine data={data} options={options} xKey='x' yKey='y' />
      </View>
    )
  }
}

export default SmoothLineChartBasic;
