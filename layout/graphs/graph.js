// @flow
'use strict';

import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
} from 'react-native';

import AreaSpline from './../../js/charts/AreaSpline';
import Pie from './../../js/charts/Pie';
import Theme from './../../js/theme';
import data from './../../resources/data';

type State = {
  activeIndex: number,
  spendingsPerYear: any
}

export default class GraphPage extends Component {

  state: State;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
    };
    this.onPieItemSelected = this.onPieItemSelected.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  onPieItemSelected(newIndex) {
    this.setState({ ...this.state,
        activeIndex: newIndex,
        spendingsPerYear: this.shuffle(data.spendingsPerYear) });
  }

  shuffle(a) {
      /*for (let i = a.length; i; i--) {
          const j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }*/
      return a;
  }

  render() {
    const height = 200;
    const width = 500;

    return (
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.charttitle}>Distribution of spending this month</Text>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this.onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth}
          />
          <Text style={styles.charttitle}>
          Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}
          </Text>
          <AreaSpline
            width={width}
            height={height}
            data={this.state.spendingsPerYear}
            color={Theme.colors[this.state.activeIndex]}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'whitesmoke',
    marginTop: 21,
  },
  chart_title: {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor: 'white',
    color: 'grey',
    fontWeight: 'bold',
  }
};
