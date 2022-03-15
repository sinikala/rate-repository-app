//import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepoView from './SingleRepoView';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AppBar from './AppBar';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  },
});



const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signout" element={<SignOut />} exact />
        <Route path="/repositories/:repositoryId" element={<SingleRepoView />} />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;

