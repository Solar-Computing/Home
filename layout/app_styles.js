import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  layout: {
    backgroundColor: '#1b2631',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
  }, 
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  slide1: {
    flex: 1,
    paddingBottom: 130
  },
  slide2: {
    flex: 1,
    paddingBottom: 130
  },
  slide3: {
    flex: 1,
    paddingBottom: 130
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  drawerStyles: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#191f28',
    height: 50,
    width: 100
  }
});
