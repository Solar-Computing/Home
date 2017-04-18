import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    graphWrapper: {
        flexDirection: 'column',
        padding: 10,
        paddingBottom: 15,
    },
    scrubButton: {
      height: 50  
    },
    chartIndent: {
        paddingLeft: 10
    },
    scrubView: {
        // backgroundColor: '#36A2C8',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 50
        
        // padding: 10
        // width: 60
    },
    scrubIcon: {
        width: 35,
        height: 35,
    },
    scrubTitles: {
        color: '#f2f2f2',
        justifyContent: 'center',
        textAlign: 'center'
    },
    scrubBar: {
        // backgroundColor: '#191f28',
        // paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50
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
    graphDay: {
        textAlign: 'center'
    },
    divider: {
        height: 20
    },
    activityIndicator: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    }
});
