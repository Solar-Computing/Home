import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import Chart from './SmoothLineChart.js';
//import Summary from './BarSummary.js';
import styles from './GraphStyles.js';

let dayEnergyData = [
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


let weekEnergyData = [
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


let yearEnergyData = [
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
      data: {}
    };
  }
  componentDidMount() {
    // fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/simulations', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     start: '20160101T00:00:00Z',
    //     end: '20170101T00:00:00Z',
    //     aggregate: 'hourly'
    //   })
    // }).then((loadedData) => {
    //     this.setState({ data: JSON.parse(loadedData._bodyInit) });
    //     //this.state.dayData = []
    //     dayEnergyData = [[], []]
    //     this.state.data.contents.forEach(function(entry) {
    //       date = new Date(entry.timestamp)
    //       today = new Date()
    //       today.setYear(2016)
    //       //date.setYear(2017)
    //       //console.log(date + " " + (new Date()))
    //       //console.log(date.toString() + " " + today.toString())
    //       if (date.getDay() === today.getDay() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
    //         // console.log("\n"+today)
    //         // console.log("NEW")
    //         // console.log(date)
    //         // console.log(entry)
    //         dayEnergyData[0].push({x: date.getHours(), y: entry.ACPrimaryLoad})
    //         dayEnergyData[1].push({x: date.getHours(), y: entry.PVPowerOutput})
    //       }
    //     })
    //     console.log(dayEnergyData)
    // }).catch((error) => {
    //   console.log(`Error... ${error}`);
    // });

//Get date for today (ms) --> subtract ms in a week and then put in graph

   today = new Date();
   today.setYear(2016);
   weekBefore = new Date();
   weekBefore.setYear(2016);
   weekBefore.setDate(today.getDate() - 6); //6 days backwards because zero indexed

    fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/simulations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start: weekBefore.toUTCString(),
        end: today.toUTCString(),
        aggregate: 'daily'
      })
    }).then((loadedData) => {
        this.setState({ data: JSON.parse(loadedData._bodyInit) });
        //this.state.dayData = []
        weekEnergyData = [[], []];
        this.state.data.contents.forEach(function(entry) {
          date = new Date(entry.timestamp);
          console.log(date + "ENTRY DATE");
          //TODO: CHANGE IF CONDITIONS 
          weekEnergyData[0].push({x: entry.getDate(), y: entry.ACPrimaryLoad})
          weekEnergyData[1].push({x: entry.getDate(), y: entry.PVPowerOutput})
        });
        console.log(weekEnergyData);
    }).catch((error) => {
      console.log(`Error... ${error}`);
    });

    // fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/simulations', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     start: '20160101T00:00:00Z',
    //     end: '20170101T00:00:00Z',
    //     aggregate: 'monthly'
    //   })
    // }).then((loadedData) => {
    //     this.setState({ data: JSON.parse(loadedData._bodyInit) });
    //     //this.state.dayData = []
    //     yearEnergyData = [[], []]
    //     this.state.data.contents.forEach(function(entry) {
    //       date = new Date(entry.timestamp)
    //       today = new Date()
    //       today.setYear(2016)
    //       //date.setYear(2017)
    //       //console.log(date + " " + (new Date()))
    //       //console.log(date.toString() + " " + today.toString())
    //       if (date.getDay() === today.getDay() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
    //         // console.log("\n"+today)
    //         // console.log("NEW")
    //         // console.log(date)
    //         // console.log(entry)
    //         yearEnergyData[0].push({x: date.getHours(), y: entry.ACPrimaryLoad})
    //         yearEnergyData[1].push({x: date.getHours(), y: entry.PVPowerOutput})
    //       }
    //     })
    //     console.log(yearEnergyData)
    // }).catch((error) => {
    //   console.log(`Error... ${error}`);
    // });
  }
  render() {
    /*const profitData = [
      [{
        x: 0,
        y: -5
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

    const waterData = [
      [{
        x: 0,
        y: 10
      }, {
        x: 2,
        y: 10
      }, {
        x: 4,
        y: 12
      }, {
        x: 6,
        y: 10
      }, {
        x: 8,
        y: 15
      }, {
        x: 10,
        y: 40
      }, {
        x: 12,
        y: 35
      }, {
        x: 14,
        y: 25
      }, {
        x: 16,
        y: 10
      }, {
        x: 18,
        y: 8
      }, {
        x: 20,
        y: 36
      }, {
        x: 22,
        y: 15
      }, {
        x: 24,
        y: 5
      }],
      [{
        x: 0,
        y: 4
      }, {
        x: 2,
        y: 4
      }, {
        x: 4,
        y: 5
      }, {
        x: 6,
        y: 4
      }, {
        x: 8,
        y: 6
      }, {
        x: 10,
        y: 26
      }, {
        x: 12,
        y: 19
      }, {
        x: 14,
        y: 10
      }, {
        x: 16,
        y: 6
      }, {
        x: 18,
        y: 5
      }, {
        x: 20,
        y: 20
      }, {
        x: 22,
        y: 8
      }, {
        x: 24,
        y: 2
      }]
    ];

    const profitOptions = {
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
    };*/

    const energyOptions = {
      width: 300,
      height: 150,
      color: '#cccc00',
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

/*
    const waterOptions = {
      width: 300,
      height: 150,
      color: '#59bbda',
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
      <ScrollView>
        <Chart
          title={'Cash Flow'}
          units={'Dollars'}
          data={profitData}
          options={profitOptions}
        />
        <View style={styles.divider} />
        <Chart
          title={'Energy Consumption vs Production'}
          units={'kW/h'}
          data={energyData}
          options={energyOptions}
        />
        <View style={styles.divider} />
        <Chart
          title={'Water Use vs Filtration'}
          units={'Gal'}
          data={waterData}
          options={waterOptions}
        />        
      </ScrollView>
    );*/

    return (
      <ScrollView>
        {/*<Chart
          title={'Day Energy Consumption vs Production'}
          units={'kW/h'}
          data={dayEnergyData}
          options={energyOptions}
        />*/}
        <View style={styles.divider} />
        <Chart
          title={'Week Energy Consumption vs Production'}
          units={'kW/h'}
          data={weekEnergyData}
          options={energyOptions}
        />
        <View style={styles.divider} />
        {/*<Chart
          title={'Year Energy Consumption vs Production'}
          units={'kW/h'}
          data={yearEnergyData}
          options={energyOptions}
        />  */}
      </ScrollView>
    );
  }
}

