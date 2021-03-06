const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const colors = {
  primary: '#283046',
  secondary: '#212739',
  accent: '#1bd982',
  text: '#111',
  lightText: '#333',
  white: '#fff',

  blue: '#3498db',
  purple: '#9b59b6',
  green: '#2ecc71',
  yellow: '#f1c40f',
};

module.exports = {
  colors,

  fullscreen: {
    width: window.width,
    height: window.height,
  },

  header: {
    backgroundColor: colors.primary,
    height: 70,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  caption: {
    color: colors.accent,
    flex: 1,
    fontSize: 16,
    paddingTop: 38,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },

  prevBtnContainer: {
    height: 36,
    width: 36,
    top: 30,
    left: 10,
    justifyContent: 'center',
  },

  nextBtnContainer: {
    height: 36,
    width: 36,
    top: 30,
    right: 10,
    justifyContent: 'center',
  },

  btn: {
    height: 28,
    width: 28,
    tintColor: colors.accent,
  },

  segmented: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    tintColor: colors.accent,
  },
};
