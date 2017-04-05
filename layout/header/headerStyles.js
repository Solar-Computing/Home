import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    headerBar: {
        backgroundColor: '#2c3239',
        padding: 5,
        // paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55
    },
    headerLogo: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    controlPanel: {
        flex: 1,
        backgroundColor: '#326945'
    },
    ctrlPanelTitle: {
        color: '#FFFFFF',
        justifyContent: 'center',
        padding: 8,
        textAlign: 'center',
        width: 50,
        flex: 1,
        fontSize: 20
    },
    controlPanelBtn: {
        width: 50,
        backgroundColor: '#FFFFFF',
        // alignSelf: 'flex-start',
        // justifyContent: 'flex-start'
    },
    editTitle: {
        color: '#FFFFFF',
        justifyContent: 'center',
        // paddingTop: 10,
        padding: 8,
        textAlign: 'center',
        flex: 1,
        width: 50,
        fontSize: 20

    },
    editBtn: {
        backgroundColor: '#FFFFFF',
        // alignSelf: 'flex-end',
        // justifyContent: 'flex-end',
        width: 50,
    }
});
