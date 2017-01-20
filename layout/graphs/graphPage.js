import React, { Component } from 'react';
import {
  PropTypes,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Animated,
  Switch
} from 'react-native';

import { BarChart } from 'react-native-charts'

import Chart from 'react-native-chart';
import graphStyles from './graph_style.js';

class GraphPage extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>

      //<Player/>


      </View>
    );
  }
}



class Player extends Component {
  constructor () {
    super()
    const width = {pts: 300, ast: 200, reb: 100}
    this.state = {
      pts: new Animated.Value(width.pts),
      ast: new Animated.Value(width.ast),
      reb: new Animated.Value(width.reb),
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1}            // Configuration
     ).start();                // Don't forget start!
   }

  handeleAnimation () {
    const timing = Animated.timing
    const width = {pts: 30, ast: 20, reb: 10}
    const indicators = ['pts', 'ast', 'reb']
    Animated.parallel(indicators.map(item => {
      return timing(this.state[item], {toValue: width[item]})
    })).start()
  }

  render () {
   const {pts, ast, reb, stl, blk, tov, min} = this.state

   return (
      <View>
       {pts &&
          <Animated.View style={[graphStyles.bar, graphStyles.points, {width: pts}]} />
        }
        {ast &&
          <Animated.View style={[graphStyles.bar, graphStyles.assists, {width: ast}]} />
        }
        {reb &&
          <Animated.View style={[graphStyles.bar, graphStyles.rebounds, {width: reb}]} />
        }
        <Text onPress={this.handeleAnimation.bind(this)}>Button</Text>
      </View>
   )
  }
}
export default GraphPage;
