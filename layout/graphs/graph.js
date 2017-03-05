import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import Chart$ from './SmoothLineChart$.js';
import ChartE from './SmoothLineChartE.js';
import ChartW from './SmoothLineChartW.js';
import Summary from './BarSummary.js';


export default class GraphPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/simulations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start:"20160101T00:00:00Z",
        end: "20170101T00:00:00Z",
        aggregate: "hourly"
      })
    }).then((loadedData) => {
        this.setState({ data: JSON.parse(loadedData._bodyInit) });
        this.state.dayData = []
        this.state.data.contents.forEach(function(entry) {
          date = new Date(entry.timestamp)
          today = new Date()
          today.setYear(2016)
          //date.setYear(2017)
          //console.log(date + " " + (new Date()))
          //console.log(date.toString() + " " + today.toString())
          if (date.getDay() === today.getDay() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
            console.log("\n"+today)
            console.log("NEW")
            console.log(date)
            console.log(entry)
          }
        })

    }).catch((error) => {
      console.log('Error... ' + error);
    });
  }
  render() {
    return (
      <ScrollView>
        <ChartE />
      </ScrollView>
    );
  }
}