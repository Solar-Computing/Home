import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import Chart from './SmoothLineChart.js';
import Summary from './BarSummary.js';
import styles from './GraphStyles.js';


export default class GraphPage extends Component {
  render() {
    const profitData = [
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

    const energyData = [
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
    };

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
    );
  }
}

