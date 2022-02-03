import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground
    // ...
  },
  // ...
});


const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab text="Repositories"/>
  </View>;
};

export default AppBar;