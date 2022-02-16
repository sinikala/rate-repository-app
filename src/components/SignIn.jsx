
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { Formik } from 'formik';
import useSignIn from '../hooks/useSignIn'
import SignInForm from "./SignInForm";


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


const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
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