import Text from './Text';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import { StyleSheet, Pressable, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.elementBackground,
    margin: 5
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    margin: 5,
    alignSelf: 'flex-start'
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
      <Pressable
        onPress={onSubmit}
        style={styles.button}
      >
        <Text color="buttonText">Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;