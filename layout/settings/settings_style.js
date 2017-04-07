import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    accordian: {
        padding: 18
    },
    headerText: {
        fontSize: 25,
        // fontWeight: 'bold',
        color: '#f2f2f2'
    },
    headerView: {
        flexDirection: 'row',
        padding: 25,
        backgroundColor: '#36A2C8', //1e7794
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#1e7794',
    },
    contentText: {
        padding: 30,
        paddingLeft: 50,
        fontSize: 20,
        color: '#d0d7e2'
    },
    contentView: {
        backgroundColor: '#1e7794', //27313f
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
        backgroundColor: '#1e7794', //191f28
        paddingLeft: 10,
        paddingRight: 5
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
        color: '#e6e6e6',
        padding: 15,
        paddingTop: 25,
        fontSize: 20,
        // fontWeight: 'bold'
    },
    houseView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15
    },
    houseGraphic: {
        width: 60,
        height: 60
    },
    tempControls: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
