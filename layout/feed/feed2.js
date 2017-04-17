import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  ScrollView
} from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from './feed_style.js';

class DataList extends Component {
  constructor() {
    super();
    this.state = {
        connected: false
    };
    this.data = []
  }

  componentDidMount() {
    this.searchApi();
  }

  searchApi() {
      fetch('http://jarvis.jarvisnet.ga:8165/test_leonie.php', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
      }).then((loadedData) => {
          this.setState({
              resultsData: JSON.parse(loadedData._bodyInit),
              connected: false
          });
          this.state.resultsData.forEach((entry) => {
            this.data.push(
                 {
                     time: entry.timestamp.substring(0, 5),
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

export default DataList;
