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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
      <FormikTextInput secureTextEntry={true} name="passwordConfirm" placeholder="Password confirmation" />
      <Pressable
        onPress={onSubmit}
        style={styles.button}
      >
        <Text color="buttonText">Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;