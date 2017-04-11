import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import Chart from './SmoothLineChart.js';
import styles from './GraphStyles.js';

// mock data and styling
const dayEnergyData = [
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

// graph component
export default class GraphPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
  //Get date for today (ms) --> subtract ms in a week and then put in graph
    fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/simulations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start: '20160101T00:00:00Z',
        end: '20170101T00:00:00Z',
        aggregate: 'daily'
      })
    }).then((loadedData) => {
        this.setState({ data: JSON.parse(loadedData._bodyInit) });
        //this.state.dayData = []
        weekEnergyData = [[], []];
        this.state.data.contents.forEach((entry) => {
          date = new Date(entry.timestamp);
          today = new Date();
          today.setYear(2016);
          //console.log(today.getFullYear(), today.getMonth(), today.getDay())
          weekBefore = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
          //date.setYear(2017)
          //console.log(date + " " + today)
          //console.log(date.toString() + " " + today.toString())
          if (date.getMonth() === today.getMonth()) {
            // console.log("\n"+today)
            // console.log("NEW")
            // console.log(date)
            // console.log(entry)
            weekEnergyData[0].push({ x: date.getMonth(), y: entry.ACPrimaryLoad });
            weekEnergyData[1].push({ x: date.getMonth(), y: entry.PVPowerOutput });
          }
        });
        console.log(weekEnergyData);
    }).catch((error) => {
      console.log(`Error... ${error}`);
    });
  }
  render() {
    return (
      <ScrollView>
        <Chart
          title={'Day Energy Consumption vs Production'}
          units={'kW/h'}
          data={dayEnergyData}
          options={graphOptions}
        />
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
          options={graphOptions}
        />
        <View style={styles.divider} />

      </ScrollView>
    );
  }
}

