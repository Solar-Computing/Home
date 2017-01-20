import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#59bbda'
    },
    headerView: {
        flexDirection: 'row',
        padding: 25,
        backgroundColor: '#e5e5ff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    contentText: {
        padding: 30,
        paddingLeft: 20,
        fontSize: 20,
    },
    contentView: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row',
        height: 100
    },
    slider: {
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
    }
});
