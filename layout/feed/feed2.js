import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from './feed_style.js';


export default class Example extends Component {
  constructor() {
    super();
    this.state = {
      connected: true
    };
    this.data = [
      {
        time: 'Jan 04',
        title: 'Milestone',
        description: 'You used 10% less water this week!',
        lineColor: '#009688',
        icon: require('../img/goal.png')
      },
      {
        time: 'Feb 12',
        title: 'Update',
        description: 'The GT Solar Home Team is at the Tiny House Fextival in Decatur this week',
        lineColor: '#0066ff',
        icon: require('../img/logo.png')

      },
      {
        time: 'Feb 26',
        title: 'Reminder',
        description: 'Don\'t forget to turn off the light in the kitchen.',
        lineColor: '#114555',
        icon: require('../img/light-bulb.png')
      },
      {
        time: 'Mar 17',
        title: 'Alert',
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor: '#ff3300',
        icon: require('../img/megaphone.png')
      },
      {
        time: 'Apr 01',
        title: 'Achievement',
        description: 'Great job! You hit a target energy consumption this month!',
        lineColor: '#ff9933',
        icon: require('../img/target.png')
      }
    ];
  }

  render() {
    if (this.state.connected) {
      return (
        <View style={styles.container2}>
          <Timeline
            style={styles.list2}
            data={this.data}
            innerCircle={'icon'}
            circleSize={35}
            descriptionStyle={styles.description}
            titleStyle={styles.title}
            separatorStyle={styles.separator}
            timeStyle={styles.time}
            separator={false}
            timeContainerStyle={styles.timeContainer}
            detailContainerStyle={styles.detailContainer}
          />
        </View>
      );
    }
    return (
        <View>
            <Text style={styles.offlineMessage}>Unable to retrieve Feed from Internet</Text>
        </View>
    );
  }
}
