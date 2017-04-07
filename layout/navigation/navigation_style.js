import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    statusbar: {
        backgroundColor: '#191f28',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 40
    },
    inactivebarTitles: {
        color: '#e6e6e6',
        justifyContent: 'center',
        paddingTop: 10,
        //paddingLeft: 40,
        textAlign: 'center',
        flex: 1
    },
    inactivebarButton: {
        justifyContent: 'center',
        flex: 1,
        height: 40,
        width: 60,
        backgroundColor: '#09222a',
        padding: 0
    },
    activebarButton: {
        justifyContent: 'center',
        flex: 1,
        height: 40,
        width: 60,
        backgroundColor: '#1e7794',
        padding: 0
    },
    activebarTitles: {
        color: '#f2f2f2',
        justifyContent: 'center',
        textAlign: 'center'
    }
});
