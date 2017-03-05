import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import ChartP from './SmoothLineChartP.js';
import ChartE from './SmoothLineChartE.js';
import ChartW from './SmoothLineChartW.js';
import Summary from './BarSummary.js';


export default class GraphPage extends Component {
  render() {
    return (
      <ScrollView>
        {/*<ChartE />*/}
        {/*<ChartW />*/}
        <ChartP />
      </ScrollView>
    );
  }
}
