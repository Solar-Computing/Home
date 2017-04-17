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
      connected: false
    };

    this.data = [];
  }

  componentDidMount() {
    this.searchApi({
      time: 'Apr 01',
      title: 'Achievement',
      description: 'Great job! You hit a target energy consumption this month!',
      lineColor: '#ff9933',
      icon: require('../img/target.png')
    });
  }


  searchApi() {
      fetch('http://lowcost-env.kwjgjsvk34.us-east-1.elasticbeanstalk.com/api/feedData', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      } }).then((loadedData) => {
          this.setState({
              resultsData: JSON.parse(loadedData._bodyInit),
              connected: false
          });
          console.log(this.state.resultsData);

          this.setState({ resultsData: JSON.parse(loadedData._bodyInit) });

          const imgGoal = require('../img/goal.png');
          const imgLogo = require('../img/logo.png');
          const imgLightBulb = require('../img/light-bulb.png');
          const imgMegaphone = require('../img/megaphone.png');
          const imgTarget = require('../img/target.png');
          const imgTrophy = require('../img/trophy.png');
          let showImage = imgLogo;

          this.state.resultsData.forEach((entry) => {
             //feedData.push({ message: entry.message, category: entry.category, timestamp: entry.timestamp });

             if (entry.category == 'logo') {
                 showImage = imgLogo;
             }
             if (entry.category == 'goal') {
                 showImage = imgGoal;
             }
             if (entry.category == 'trophy') {
                 showImage = imgTrophy;
             }
             if (entry.category == 'target') {
                 showImage = imgTarget;
             }
             if (entry.category == 'light-bulb') {
                 showImage = imgLightBulb;
             }
             if (entry.category == 'announcement') {
                 showImage = imgMegaphone;
             }

            this.data.push(
                 {
                     time: entry.timestamp.substring(6, 12),
                     title: entry.category,
                     description: entry.message,
                     lineColor: 'white',
                 }
             );
          });

          this.state = {
            connected: true
          };

      }).catch((error) => {
          console.log(`Error when fetching update data: ${error}`);
            this.setState({
                connected: false
            });
      });
  }

  render() {
    if (this.state.connected) {
      return (
        <View style={styles.container2}>
          <Timeline
            style={styles.list2}
            data={this.data}
            innerCircle={'dot'}
            circleSize={35}
            descriptionStyle={styles.description}
            titleStyle={styles.title}
            separatorStyle={styles.separator}
            timeStyle={styles.time}
            separator={false}
            timeContainerStyle={styles.timeContainer}
            detailContainerStyle={styles.detailContainer}
            circleColor={'transparent'}
            dotColor={'white'}
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
