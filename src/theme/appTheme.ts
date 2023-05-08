import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  calculatorContainer: {
    alignSelf: 'center',
    // backgroundColor: 'green',
    width: 360,
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    gap: 10,
  },
  result: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'right',
  },
  resultSmall: {
    color: 'rgba(255,255,255, .5)',
    textAlign: 'right',
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    gap: 10,
  },
  button: {
    flex: 1,
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2D2D',
  },
  zero: {
    flex: 2,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    color: '#fff',
  },
  gray: {
    backgroundColor: '#9b9b9b',
  },
  orange: {
    backgroundColor: '#FF9427',
  },
});
