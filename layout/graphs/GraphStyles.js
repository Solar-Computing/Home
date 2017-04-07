import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    graphWrapper: {
        flexDirection: 'column',
        padding: 10
    },
    scrubButtons: {
        backgroundColor: '#36A2C8',
        justifyContent: 'center',
        width: 60
    },
    scrubTitles: {
        color: '#f2f2f2',
        justifyContent: 'center',
        textAlign: 'center'
    },
    scrubBar: {
        // backgroundColor: '#191f28',
        // paddingTop: 10,
        // paddingBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 30
    },
    spacer: {
        width: 60
    },
    graphTitle: {
        color: '#f2f2f2',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 18
    },
    graphUnits: {
        color: '#0d4659',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    graphPage: {
        backgroundColor: '#1e7794'
    },
    divider: {
        height: 20
    },
    profitGraph: {
        color: '#228B22'
    },
    waterGraph: {
        color: '#59bbda'
    },
    energyGraph: {
        color: '#cccc00'
    },
    energyOptions: {
      width: 300,
      height: 150,
      color: '#cccc00',
      margin: {
        top: 40,
        left: 40,
        bottom: 40,
        right: 40
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: false,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#647282'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        // color: '#4e5865',
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 13,
          fontWeight: true,
          fill: '#647282'
        }
      }
    }
});
