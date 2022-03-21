import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useUserCheck from '../hooks/useUserCheck';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: theme.colors.barBackground,

  },
  scroller: { //contentContainerStyle
    //flex: 1

  }
});


const AppBar = () => {
  const userIsLoggedIn = useUserCheck();
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scroller} >
        <AppBarTab text="Repositories" link={"/"} />
        {userIsLoggedIn &&
          <AppBarTab text="Create a review" link={"/repositories/newreview"} />
        }
        {(userIsLoggedIn)
          ? <AppBarTab text="Sign out" link={"/signout"} />
          : <AppBarTab text="Sign in" link={"/signin"} />
        }
        {!userIsLoggedIn &&
          <AppBarTab text="Sign up" link={"/signup"} />
        }
      </ScrollView>
    </View>
  )
};

export default AppBar;