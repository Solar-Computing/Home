import React, { Component } from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native';

import Chart from './SmoothLineChart.js';
import styles from './GraphStyles.js';

let dayStatic = new Date();

let dayPowerData = [
      [{
        x: 0,
        y: 1.2
      }, {
        x: 2,
        y: 1
      }, {
        x: 4,
        y: 1.1
      }, {
        x: 6,
        y: 1
      }, {
        x: 8,
        y: 1.5
      }, {
        x: 10,
        y: 2
      }, {
        x: 12,
        y: 3
      }, {
        x: 14,
        y: 3.2
      }, {
        x: 16,
        y: 3.5
      }, {
        x: 18,
        y: 4
      }, {
        x: 20,
        y: 5
      }, {
        x: 22,
        y: 2.5
      }, {
        x: 24,
        y: 1
      }],
      [{
        x: 0,
        y: 0
      }, {
        x: 2,
        y: 0
      }, {
        x: 4,
        y: 0
      }, {
        x: 6,
        y: 0.5
      }, {
        x: 8,
        y: 1
      }, {
        x: 10,
        y: 3
      }, {
        x: 12,
        y: 4
      }, {
        x: 14,
        y: 3.5
      }, {
        x: 16,
        y: 2
      }, {
        x: 18,
        y: 0.6
      }, {
        x: 20,
        y: 0.2
      }, {
        x: 22,
        y: 0
      }, {
        x: 24,
        y: 0
      }]
    ];


const weekEnergyData = [
      [{
        x: 0,
        y: 1.2
      }, {
        x: 2,
        y: 1
      }, {
        x: 4,
        y: 1.1
      }, {
        x: 6,
        y: 1
      }, {
        x: 8,
        y: 1.5
      }, {
        x: 10,
        y: 2
      }, {
        x: 12,
        y: 3
      }, {
        x: 14,
        y: 3.2
      }, {
        x: 16,
        y: 3.5
      }, {
        x: 18,
        y: 4
      }, {
        x: 20,
        y: 5
      }, {
        x: 22,
        y: 2.5
      }, {
        x: 24,
        y: 1
      }],
      [{
        x: 0,
        y: 0
      }, {
        x: 2,
        y: 0
      }, {
        x: 4,
        y: 0
      }, {
        x: 6,
        y: 0.5
      }, {
        x: 8,
        y: 1
      }, {
        x: 10,
        y: 3
      }, {
        x: 12,
        y: 4
      }, {
        x: 14,
        y: 3.5
      }, {
        x: 16,
        y: 2
      }, {
        x: 18,
        y: 0.6
      }, {
        x: 20,
        y: 0.2
      }, {
        x: 22,
        y: 0
      }, {
        x: 24,
        y: 0
      }]
    ];


const yearEnergyData = [
      [{
        x: 0,
        y: 1.2
      }, {
        x: 2,
        y: 1
      }, {
        x: 4,
        y: 1.1
      }, {
        x: 6,
        y: 1
      }, {
        x: 8,
        y: 1.5
      }, {
        x: 10,
        y: 2
      }, {
        x: 12,
        y: 3
      }, {
        x: 14,
        y: 3.2
      }, {
        x: 16,
        y: 3.5
      }, {
        x: 18,
        y: 4
      }, {
        x: 20,
        y: 5
      }, {
        x: 22,
        y: 2.5
      }, {
        x: 24,
        y: 1
      }],
      [{
        x: 0,
        y: 0
      }, {
        x: 2,
        y: 0
      }, {
        x: 4,
        y: 0
      }, {
        x: 6,
        y: 0.5
      }, {
        x: 8,
        y: 1
      }, {
        x: 10,
        y: 3
      }, {
        x: 12,
        y: 4
      }, {
        x: 14,
        y: 3.5
      }, {
        x: 16,
        y: 2
      }, {
        x: 18,
        y: 0.6
      }, {
        x: 20,
        y: 0.2
      }, {
        x: 22,
        y: 0
      }, {
        x: 24,
        y: 0
      }]
    ];

export default class GraphPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      day: dayStatic,
      loaded: false
    };
    //this.state.day.setYear(2016)
  }

  componentDidMount() {
    // First mount
    //this.state.day.setHours(this.state.day.getHours() - 1)
    this.update(this.state.day);
  }

  componentWillUnmount() {
    // On destroy
    console.log('UNMOUNTING!');
  }

  timeout(ms, promise) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out'));
      }, ms);
      promise.then(resolve, reject);
    });
  }

  update(currentDay) {
    // Load activity indicator (loading symbol)
    this.state.loaded = false;
    this.forceUpdate();
    
    this.state.day = new Date(currentDay);
    dayStatic = new Date(currentDay);
    currDayMidnight = new Date(currentDay);
    currDayMidnight.setHours(0);
    currDayMidnight.setMinutes(0);
    currDayMidnight.setSeconds(0);

    // Timeout function whose callback in case of error is a recursive call to update() (basically it tries until it gets connection and succeeds)
    this.timeout(5000, fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/neurioData', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start: currDayMidnight.toUTCString(),
        end: currentDay.toUTCString(),
        aggregate: 'hourly'
      })
    })).then((loadedData) => {
      // Parse data
      this.setState({ data: JSON.parse(loadedData._bodyInit) });

      // Set up data pools
      hour = 0;
      dayPowerData = [[], [], []];
      dayPowerData[2].push({ x: 0, y: 3 });
      
      this.state.data.contents.forEach((entry) => {
        
        // Push data to curve data pools
        date = new Date(entry.timestamp);
        dayPowerData[0].push({ x: date.getHours(), y: entry.ACPrimaryLoad / 1000.0 });
        dayPowerData[1].push({ x: date.getHours(), y: entry.PVPowerOutput });
        hour++;
      });

      // Finish filling up data pools with 0 values
      for (; hour < 24; hour++) {
        dayPowerData[0].push({ x: hour, y: 0 });
        dayPowerData[1].push({ x: hour, y: 0 });
      }

      // Load component once it's been populated
      this.state.loaded = true;
      this.forceUpdate();

    }).catch((error) => {
      console.log(`Connection error... ${error}`);
      this.update(this.state.day);
    });
  }


  render() {
    const graphOptions = {
        width: 300,
        height: 150,
        color: '#f2f2f2',
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
            fill: '#f2f2f2'
          }
        },
        axisY: {
          showAxis: true,
          showLines: true,
          // color: '#4e5865',
          showLabels: true,
          showTicks: true,
          zeroAxis: false,
          orient: 'left',
          label: {
            fontFamily: 'Arial',
            fontSize: 13,
            fontWeight: true,
            fill: '#f2f2f2'
          }
        }
    };
    
    x = this.state.day.toLocaleString().split(' ');
    dayTitle = `${x[0]  } ${  x[1]  } ${  x[2]  }, ${  x[4]}`;
    return (
      <ScrollView>
        <Chart
          title={'Day Power Consumption vs Production'}
          units={'kWh'}
          day={dayTitle}
          data={dayPowerData}
          options={graphOptions}
          update={(newDay) => { this.update(newDay); }}
          today={new Date()}
          loaded={this.state.loaded}
        />{/*
        <View style={styles.divider} />
        <Chart
          title={'Week Energy Consumption vs Production'}
          units={'kW/h'}
          data={weekEnergyData}
          options={graphOptions}
        />
        <View style={styles.divider} />
        <Chart
          title={'Year Energy Consumption vs Production'}
          units={'kW/h'}
          data={yearEnergyData}
          options={energyOptions}
        />  */}
      </ScrollView>
    );
  }
}

