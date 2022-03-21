
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { Formik } from 'formik';
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import SignUpForm from "./signUpForm";
import { View } from "react-native";


const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
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
      .min(5, 'Password must contain at least 5 characters')
      .required('Password is required'),
  passwordConfirm:
    yup
      .string()
      .oneOf([yup.ref('password'), null], "Password and password confirm don't match")
      .required('Password confirm is required')
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
};


const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password, passwordConfirm } = values;

    try {
      await signUp({ username, password });
      resetForm()
      await signIn({ username, password });
      navigate("/");

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};


export default SignUp;