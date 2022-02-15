import Text from './Text';
import theme from '../theme';
import { StyleSheet, View, Pressable } from 'react-native';
import { useNavigate } from "react-router-dom";

import useSignOut from '../hooks/useSignout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.elementBackground,
    margin: 5
  },
  button: {
    backgroundColor: theme.colors.error,
    borderRadius: 3,
    margin: 5,
    alignSelf: 'flex-start'
  }
});



const SignOut = () => {
  const signOut = useSignOut();
  let navigate = useNavigate();

  const onPress = async () => {
    await signOut();
    navigate("/");
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={styles.button}
      >
        <Text color="buttonText">Sign out</Text>
      </Pressable>
    </View>
  );
};


export default SignOut;
