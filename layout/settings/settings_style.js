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
        backgroundColor: '#91a2ba', //2c3239
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#27313f',
    },
    contentText: {
        padding: 30,
        paddingLeft: 50,
        fontSize: 20,
        color: '#d0d7e2'
    },
    contentView: {
        backgroundColor: '#2c3239', //27313f
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
        backgroundColor: '#2c3239' //191f28
    },
    decrease: {
        fontSize: 55,
        color: 'red'
    },
    increase: {
        fontSize: 55,
        color: 'green'
    }
});
