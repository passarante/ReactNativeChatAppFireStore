import {Dimensions, Platform} from 'react-native';
let headerHight = Platform.OS === 'ios' ? 66 : 46;
let footerHeight = 55;

const constants = {
  headerHight,
  footerHeight,
  viewHeight: Dimensions.get('window').height - headerHight,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
};

export default constants;
