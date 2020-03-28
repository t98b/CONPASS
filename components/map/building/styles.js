import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 300,
    flex: 1,
    justifyContent: 'center',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute'
  },

  buildingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 300
  },

  quitButton: {
    left: 0,
    top: 100,
    marginTop: 225,
    flex: 1,
    height: 20,
    fontSize: 20
  },
  switcher: {
    display: 'flex',
    flexDirection: 'row',
    left: 0,
    bottom: 100,
  },
  lvl: {
    marginBottom: 175,
    padding: 10,
    backgroundColor: '#FFE8D2',
    borderColor: '#9CD3D7',
    borderWidth: 3,
    borderStyle: 'solid'
  }
});

export default styles;
