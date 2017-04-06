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
    statusbarTitles: {
        color: '#e6e6e6',
        justifyContent: 'center',
        paddingTop: 10,
        //paddingLeft: 40,
        textAlign: 'center',
        flex: 1
    },
    statusbarButton: {
        justifyContent: 'center',
        flex: 1,
        height: 40,
        width: 60,
        backgroundColor: '#191f28',
        padding: 0
    },
    activebarButton: {
        justifyContent: 'center',
        flex: 1,
        height: 40,
        width: 60,
        backgroundColor: '#1b2631',
        padding: 0
    },
    activebarTitles: {
        color: '#59bbda',
        justifyContent: 'center',
        textAlign: 'center'
    }
});
