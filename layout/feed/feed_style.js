import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    rowSeparator: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 1,
        marginLeft: 5
    },
    rowSeparatorHighlighted: {
        opacity: 0.0
    },
    cellContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#36A2C8',
        margin: 3,
        marginRight: 4
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
    },
    container2: {
      flex: 1,
      padding: 20,
      paddingTop: 65,
      backgroundColor: '#1e7794'
    },
    list2: {
      flex: 1,
      marginTop: 20,
    },
    description: {
        color: '#f2f2f2'
    },
    title: {
        fontSize: 25,
        color: '#36A2C8'

    },
    separator: {
        color: '#0d4659'
    },
    time: {
        color: '#0d4659',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#36A2C8',
        // color: 'white',
        padding: 5,
        borderRadius: 13
    },
    timeContainer: {
        minWidth: 52,
        marginTop: -5
    },
    detailContainer: {
        marginBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#0d4659",
        borderRadius: 10

    }
});
