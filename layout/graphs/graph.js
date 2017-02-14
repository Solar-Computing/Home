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

import { Bar } from 'react-native-pathjs-charts'
import 'babel-polyfill'

class BarChartColumnBasic extends Component {
  render() {
    let dataE = [
      [{
        "e": 8.5,
        "name": "Energy Produced"
      }],
      [{
        "e": 8,
        "name": "Energy Consumed"
      }]
      ]
    let dataW = [
      [{
        "e": 200,
        "name": "Water Saved"
      }],
      [{
        "e": 280,
        "name": "Water Consumed"
      }]
      ]
    let data$ = [
      [{
        "e": 15,
        "name": "$ Profit"
      }],
      [{
        "e": 29,
        "name": "$ Cost"
      }]
      ]

    let optionsE = {
      width: 170,
      height: 120,
      margin: {
        top: 20,
        left: 20,
        bottom: 55,
        right: 20
      },
      color: '#cccc00',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
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
          fontSize: 10,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    let optionsW = {
      width: 170,
      height: 120,
      margin: {
        top: 20,
        left: 20,
        bottom: 55,
        right: 20
      },
      color: '#7f7fff',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
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
          fontSize: 10,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    let options$ = {
      width: 170,
      height: 120,
      margin: {
        top: 20,
        left: 20,
        bottom: 50,
        right: 20
      },
      color: '#228B22',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
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
          fontSize: 10,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>Energy:</Text>
          <Bar data={dataE} options={optionsE} accessorKey='e'/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Water:</Text>
          <Bar data={dataW} options={optionsW} accessorKey='e'/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Profit:</Text>
          <Bar data={data$} options={options$} accessorKey='e'/>
        </View>
      </View>
    )
  }
}

export default BarChartColumnBasic;
