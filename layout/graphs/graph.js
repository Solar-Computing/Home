import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import Chart$ from './SmoothLineChart$.js';
import ChartE from './SmoothLineChartE.js';
import ChartW from './SmoothLineChartW.js';
import Summary from './BarSummary.js';


export default class GraphPage extends Component {
  render() {
    return (
      <ScrollView>
        <Summary />
        <ChartE />
        <ChartW />
        <Chart$ />
      </ScrollView>
    );
  }
}