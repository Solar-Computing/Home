import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#59bbda'
    },
    scroll: {
        // backgroundColor: '#191f28',
        // padding: 30,
        // flexDirection: 'column',
        // height: 700
    },
    displayText: {
        color: '#FFFFFF',
        marginLeft: 10,
        marginTop: 5,
        fontSize: 18
    },
    button: {
        backgroundColor: '#4dd2ff',
        height: 40,
        width: 80,
        alignSelf: 'center',
        alignItems: 'center'
    },
    buttonText: {
        marginTop: 10,
        color: '#191f28',
        fontWeight: 'bold',
        fontSize: 15
    },
    textInput: {
        color: '#59bbda',
        // col: '#4dd2ff'
    },
    Logo: {
        width: 415,
        height: 700,
        // // justifyContent: 'center',
        // // alignItems: 'center'
        // flex: 1,
        // // resizeMode: 'stretch'
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    LogoView: {
        // marginTop: 120,
        alignItems: 'center'
    }
});
