import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator
} from 'react-native';
import Accordion from 'react-native-accordion';
import styles from './settings_style.js';
import { MySlider, SubSwitch, RoomSwitch } from './settingsOptionsComponents.js';

const optionComponents = {
  switch: SubSwitch,
  slider: MySlider
};

let mySwitch: SubSwitch;
const allSwitches = [];

/* myData = [
//   {"name": "General", "state": {"switchIsOn": false}, "options": [
//     {"name": "Temperature", "optionType": "slider", "state": {"minimum": "20", "maximum":"120"}},
//     {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   },
//   {"name": "Kitchen", "state": {"switchIsOn": false}, "options": [
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   },
//   {"name": "Living Room", "state": {"switchIsOn": false}, "options": [
//     {"name": "Light 1", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Light 2", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   },
//   {"name": "Bed Room", "state": {"switchIsOn": false}, "options": [
//     {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Heater", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   }
// ]*/


class SettingsPage extends Component {
  render() {
    return (
      <ListOfRooms data={{}} style={styles.pageOptions} />
    );
  }
}

class ListOfRooms extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
      connected: false,
    };
  }
  componentDidMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    fetch('http://jarvis.jarvisnet.ga:8165/test.php').then((loadedData) => {
      this.setState({
        dataSource: ds.cloneWithRows(JSON.parse(loadedData._bodyInit)),
        connected: true
      });
    }).catch((error) => {
      console.log(`Error... ${  error}`);
      this.setState({
        connected: false
      });
    });
  } 
  renderCollapsibleRow(rowData) {
    return (
      <MyAccordion
        state={rowData}
      />
    );
  }
  render() {
    if (this.state.connected) {
      return (
        <View>
          <View style={styles.houseView}>
            <Image
                style={styles.houseGraphic}
                source={require('../img/house3.png')}
            />
            <Text style={styles.residence}>George's House</Text>
          </View>
          
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderCollapsibleRow}
            enableEmptySections
            style={styles.pageOptions}
          />
        </View>
      );
    } 
      return (
        <ActivityIndicator
          animating={this.state.animating}
          style={styles.activityIndicator}
          size="large"
        />
      );
    
  }
}

class MyAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  updateSwitches(value) {
    for (let i = 0; i < allSwitches.length; i++) {
      if (typeof allSwitches[i] === typeof allSwitches[1] && allSwitches[i] != null) {
        allSwitches[i].setState({ switchIsOn: value });
      }
    }
  }

  render() {
    // title = '▼' {this.state.name};

    const header = (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>▼ {this.state.name}</Text>
        <RoomSwitch state={this.state} update={(value) => this.updateSwitches(value)} />
      </View>
    );
    const content = (
      <RoomOptions data={this.state} />
    );
    
    return (
      <Accordion
        style={{overflow: 'scroll'}}
        header={header}
        content={content}
        
        //onPress={() => this.handleTitle()}
      />
    );
  }

  // handleTitle() {
  //   if (title.startsWith('▼')) {
  //     title = '▼ {this.state.name}';
  //   } else {
  //     title = '▶ {this.state.name}';
  //   }
  // }
}

class RoomOptions extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data.options),
    };
  }

  renderOptionRow(rowData) {
    const SpecificType = optionComponents[rowData.optionType];
    return (
      <View style={styles.contentView}>
        <View>
          <Text style={styles.contentText}>{rowData.name}</Text>
        </View>
        <SpecificType 
          state={rowData.state} 
          ref={(mswitch) => { mySwitch = mswitch; allSwitches.push(mySwitch); }}
        />
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderOptionRow}
      />
    );
  }
}


export default SettingsPage;
