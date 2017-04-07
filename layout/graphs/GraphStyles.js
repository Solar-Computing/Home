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
    }
});
