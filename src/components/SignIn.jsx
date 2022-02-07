import Text from './Text';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import { StyleSheet, Pressable, View } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';

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


const initialValues = {
  name: '',
  password: '',
};



const validationSchema = yup.object().shape({
  name:
    yup
      .string()
      .min(1, 'Username must contain at least 1 character')
      .required('Username is required'),
  password:
    yup
      .string()
      .min(3, 'Password must be contain at least 3 characters')
      .required('Password is required'),
});


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="name" placeholder="Username" />
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


const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default SignIn;