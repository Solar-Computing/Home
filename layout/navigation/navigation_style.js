import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    headerBar: {
        backgroundColor: '#2c3239',
        paddingTop: 10,
        paddingBottom: 0,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerLogo: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    statusbar: {
        backgroundColor: '#191f28',
        // paddingTop: 10,
        // paddingBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 40
    },
    statusbarTitles: {
        color: '#FFFFFF',
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
        backgroundColor: '#2c3239',
        padding: 0
    },
    activebarTitles: {
        color: '#59bbda',
        justifyContent: 'center',
        textAlign: 'center'
    },
    drawerStyles: {
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        // paddingLeft: 3,
        alignSelf: 'center'
    },
    controlPanel: {
        // backgroundColor: '#000000'
        flex: 1,
        backgroundColor: '#326945'
    },
    ctrlPanelTitle: {
        color: '#FFFFFF',
        justifyContent: 'center',
        // paddingTop: 10,
        paddingRight: 10,
        textAlign: 'center',
        flex: 1,
        fontSize: 40
    },
    controlPanelBtn: {
        backgroundColor: '#FFFFFF'
    }
});
