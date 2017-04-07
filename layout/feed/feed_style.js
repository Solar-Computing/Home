import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    rowSeparator: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 1,
        marginLeft: 4
    },
    rowSeparatorHighlighted: {
        opacity: 0.0
    },
    cellContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#36A2C8',
        margin: 3,
        marginRight: 6
    },
    cellImage: {
        height: 80,
        width: 60,
        marginRight: 8,
        marginLeft: 8,
        resizeMode: 'contain'
    },
    cellText: {
        flex: 1,
        fontSize: 15,
        color: '#f2f2f2',
    },
    offlineMessage: {
        alignSelf: 'center',
        color: '#FFFFFF',
        paddingTop: 50,
        fontSize: 20,
        // fontWeight: 'bold'
    },
    container: {
        margin: 8,
        marginLeft: 12
    }
});
