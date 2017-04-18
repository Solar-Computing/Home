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

let start = 0;
let end = 0;
let aggregate = 'hourly';
let aggregateValue = 0;
let cache = [[], [], []];

export default class Chart extends Component {
  
  constructor(props) {
    super(props);

    start = this.props.start; //Pass in UTC props for start and end.
    end = this.props.end;
    aggregate = this.props.aggregate;
    aggregateValue = () => {
        if(this.props.aggregateValue == 'hourly') {
            return 3600000;
        } else if (this.props.aggregateValue == 'daily') {
            return 86400000;
        } else {
            return 604800000;
        }
    }

    this.state = {
        updatedCache: false,
        loading: true
    };
  }
  
  handleBack() {
    //decrement start and end by an aggregate unit
    this.start -= this.aggregateValue;
    this.end -= this.aggregateValue;
    this.setState({updatedCache: false});
  }

  handleNext() {
    //increment start and end by an aggregate unit
    this.start += this.aggregateValue;
    this.end += this.aggregateValue;
    this.setState({updatedCache: false});
  }

    timeout(ms, promise) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Request timed out'));
        }, ms);
        promise.then(resolve, reject);
        });
    }

render() {
    if (this.state.updatedCache) {
        return (
            <View style={{ flexDirection: 'column' }}>
            <Text style={styles.graphTitle}>{this.props.title}</Text>
            <Text style={styles.graphUnits}>({this.props.units})</Text>
            <Text style={styles.graphDay}>({this.props.day})</Text>
            <SmoothLine data={this.cache} options={this.props.options} xKey='x' yKey='y' />
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
    } else {
        return (
            <View>
                <Text style={styles.offlineMessage}>Unable to retrieve Graphs from Internet</Text>
            </View>
        );
    }
}

  update() {
    if (!this.state.updatedCache) {
        this.timeout(5000, fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/neurioData', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            start: this.start,
            end: this.end,
            aggregate: this.aggregate
        })
        })).then((loadedData) => {
            console.log(loadedData)
            let interval = 0;

            cache[2].push({ x: 0, y: 3 });

            loadedData.forEach((entry) => {
                // Push data to curve data pools
                const date = new Date(entry.timestamp);
                cache[0].push({ x: date.getHours(), y: entry.ACPrimaryLoad / 1000.0 });
                cache[1].push({ x: date.getHours(), y: entry.PVPowerOutput });
                interval++
            });

            // Finish filling up data pools with 0 values
            for (; interval < 24; hour++) { //TODO: DON'T HARDCODE 24- USE ENUMS
                cache[0].push({ x: hour, y: 0 });
                cache[1].push({ x: hour, y: 0 });
            }

            //successfully updated cache
            this.setState({updatedCache: true})
            return this.render();

        }).catch((error) => {
            console.log(`Error loading graph data... ${error}`);
            this.setState({
                updatedCache: false
            })
        });
    
  }
}
