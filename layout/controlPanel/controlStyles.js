import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1b2631',
    
  },
  menuHeader: {
    backgroundColor: '#263340',    
  },
  TitleText: {
    color: '#4dd2ff',
    fontSize: 26,
    padding: 10,
    paddingLeft: 20
  },
  Name: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20

  },
  Email: {
    color: 'white',
    fontSize: 15,
    padding: 10,
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
    backgroundColor: '#4dd2ff',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10
  },
  buttonText: {
    color: '#191f28',
    fontWeight: 'bold',
    fontSize: 15
  }
});
