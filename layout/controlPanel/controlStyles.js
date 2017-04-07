import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09222a',
    
  },
  menuHeader: {
    backgroundColor: '#0d333f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  TitleText: {
    color: '#e6e6e6',
    fontSize: 26,
    paddingLeft: 10
  },
  Name: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 20

  },
  Email: {
    color: 'white',
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 20,

  },
  divider: {
    padding: 10
  },
  navBtns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#36A2C8',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10
  },
  buttonText: {
    color: '#f2f2f2',
    // fontWeight: 'bold',
    fontSize: 15
  },
  editBtn: {
    backgroundColor: '#FFFFFF',
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
    width: 70,
    justifyContent: 'center',
    alignSelf: 'center'

  },
  headerBtn: {
    width: 30,
    height: 30,
    padding: 15,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textInput: {
    color: '#e6e6e6',
    // width: 100,
    paddingLeft: 15,


        // col: '#4dd2ff'
  },
  editAccount: {
    padding: 10
  }
});
