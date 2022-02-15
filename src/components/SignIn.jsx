import Text from './Text';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import { StyleSheet, Pressable, View } from 'react-native';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { Formik } from 'formik';
import useSignIn from '../hooks/useSignIn'


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
  username:
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


const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
      //const data = 
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
    resetForm()
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