import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: theme.colors.barBackground,
    //flex: 1

    // ...
  },
  scroller: { //contentContainerStyle
    //flex: 1

  }
});


const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal contentContainerStyle={styles.scroller} >
      <AppBarTab text="Repositories" link={"/"} />
      <AppBarTab text="Sign in" link={"/signin"} />
    </ScrollView>
  </View>;
};

export default AppBar;