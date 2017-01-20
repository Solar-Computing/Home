import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  ScrollView
} from 'react-native';
import styles from './feed_style.js';

class DataList extends Component {
  constructor() {
    super();
    this.state = {
        resultsData: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    };
  }
  componentDidMount() {
    this.searchApi();
  }

  getDataSource(dataItems: Array<any>): ListView.DataSource {
        return this.state.resultsData.cloneWithRows(dataItems);
  }

  searchApi() {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      fetch('http://jarvis.jarvisnet.ga:8165/test_leonie.php').then((loadedData) => {
          this.setState({ resultsData: ds.cloneWithRows(JSON.parse(loadedData._bodyInit)) });
      }).catch((error) => {
        console.log('Error when fetching update data: ' + error);
      });
  }

  renderSeperator(
      sectionID: number | string,
      rowID: number | string,
      adjacentRowHighlighted: boolean
  ) {
      return (
          <View
            key={'SEP_' + sectionID + '_' + rowID}
            style={[styles.rowSeparator, adjacentRowHighlighted && styles.rowSeparatorHighlighted]}
          />
      );
  }

  renderRow(
      data: Object,
      sectionID: number | string,
      rowID: number | string,
      highlightRowFunction: (sectionID: ?number | string, rowID: ?number | string) => void
  ) {
    var imgGoal = require('../img/goal.png');
    var imgLogo = require('../img/logo.png');
    var imgLightBulb = require('../img/light-bulb.png');
    var imgMegaphone = require('../img/megaphone.png');
    var imgTarget = require('../img/target.png');
    var imgTrophy = require('../img/trophy.png');
    var showImage = imgLogo;
    if (data.category == 'logo') {
        showImage = imgLogo;
    }
    if (data.category == 'goal') {
        showImage = imgGoal;
    }
    if (data.category == 'trophy') {
        showImage = imgTrophy;
    }
    if (data.category == 'target') {
        showImage = imgTarget;
    }
    if (data.category == 'light-bulb') {
        showImage = imgLightBulb;
    }
    if (data.category == 'announcement') {
        showImage = imgMegaphone;
    }
    return (
        <View style={styles.cellContainer}>
            <Image
                source={showImage}
                style={styles.cellImage}
            />
            <Text style={styles.cellText}>{data.message}</Text>
        </View>
    );
  }

  render() {
    return (
    <ScrollView>
      <ListView
        dataSource={this.state.resultsData}
        renderRow={this.renderRow}
        renderSeperator={this.renderSeperator}
        automaticallyAdjustContentInsets={false}
      />
      </ScrollView>
    );
  }
}

export default DataList;
