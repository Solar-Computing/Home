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
import { View, Text, ActivityIndicator } from 'react-native';

import { SmoothLine } from 'react-native-pathjs-charts';
import Button from 'react-native-button';
import styles from './GraphStyles.js';

class SmoothLineChartBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: this.props.today
    };
  }
  
  handleBack() {
    const dayBefore = this.state.currentDay;
    dayBefore.setDate(dayBefore.getDate() - 1);
    dayBefore.setHours(23);
    this.props.update(dayBefore);
    this.state.currentDay = new Date(dayBefore);
  }

  handleNext() {
    const nextDay = this.state.currentDay;
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(23);
    this.props.update(nextDay);
    this.state.currentDay = new Date(nextDay);
  }

  render() {
    if (this.props.loaded) {
      return (
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.graphTitle}>{this.props.title}</Text>
          <Text style={styles.graphUnits}>({this.props.units})</Text>
          <Text style={styles.graphDay}>({this.props.day})</Text>
          <SmoothLine data={this.props.data} options={this.props.options} xKey='x' yKey='y' />
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

    // Loads waiting animation if component hasn't been populated yet
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={styles.activityIndicator}
        size="large"
      />
    );
  }

}

export default SmoothLineChartBasic;
