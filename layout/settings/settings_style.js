import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    headerText: {
        fontSize: 25,
        // fontWeight: 'bold',
        color: '#191f28'
    },
    headerView: {
        flexDirection: 'row',
        padding: 25,
        backgroundColor: '#91a2ba', //1b2631
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#1b2631',
    },
    contentText: {
        padding: 30,
        paddingLeft: 50,
        fontSize: 20,
        color: '#d0d7e2'
    },
    contentView: {
        backgroundColor: '#1b2631', //27313f
        flex: 1,
        flexDirection: 'row',
        height: 100
    },
    slider: {
        // color: '#ff0000'
        borderColor: '#ff0000'
    },
    OnOffSwitch: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 20,
        justifyContent: 'flex-end'
    },
    MySlider: {
        width: 200,
        justifyContent: 'center',
        paddingRight: 10,
        // color: '#'
    },
    pageOptions: {
        backgroundColor: '#1b2631' //191f28
    },
    decrease: {
        fontSize: 55,
        color: 'red'
    },
    increase: {
        fontSize: 55,
        color: 'green'
    },
    offlineMessage: {
        alignSelf: 'center',
        color: '#f2f2f2',
        paddingTop: 50,
        fontSize: 20,
        // fontWeight: 'bold'
    },
    residence: {
        alignSelf: 'center',
        color: '#f2f2f2',
        padding: 15,
        fontSize: 20,
        // fontWeight: 'bold'
    }

});
