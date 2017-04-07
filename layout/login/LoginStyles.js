import {
    StyleSheet,
  Platform  
} from 'react-native';

export default StyleSheet.create({
    subtext: {
        fontSize: 30,
    },
    main: {
        fontSize: 70,
        color: '#f2f2f2',
        alignSelf: 'center',
        paddingBottom: 30,
        fontWeight: '300',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        backgroundColor: '#0d333f',
        padding: 20
    },
    buttonRow: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50
    },
    loginCard: {
        backgroundColor: '#1e7794',
        padding: 20
    },
    scroll: {
        // backgroundColor: '#191f28',
        // padding: 30,
        // flexDirection: 'column',
        // height: 700
    },
    displayText: {
        color: '#f2f2f2',
        marginLeft: 10,
        marginTop: 5,
        fontSize: 18
    },
    button: {
        backgroundColor: '#36A2C8',
        height: 40,
        width: 80,
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        marginTop: 10,
        color: '#f2f2f2',
        // fontWeight: 'bold',
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
    },
    LogoView: {
        // marginTop: 120,
        alignItems: 'center'
    },
    app: {
        flex: 1,
    }
});
