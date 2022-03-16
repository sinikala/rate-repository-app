import { View } from 'react-native';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import useSignIn from '../hooks/useSignIn'



const validationSchema = yup.object().shape({
  ownerName:
    yup
      .string()
      .min(1, 'Repository owner name must contain at least 1 character')
      .required('Repository owner name is required'),
  repositoryName:
    yup
      .string()
      .min(3, 'Repository name must contain at least 1 character')
      .required('Repository name is required'),
  rating:
    yup
      .number()
      .min(0, 'Rating minimun value is 0')
      .max(100, 'Rating maximum value is 100')
      .required('Rating is required'),
  reviewText:
    yup
      .string()
      .nullable()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: 0,
  reviewText: ''
}

export const NewReviewContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}



const NewReview = () => {
  const onSubmit = async (values, { resetForm }) => {
    const { ownerName, repositoryName, rating, reviewText } = values
  }
  return (
    <NewReviewContainer onSubmit={onSubmit} />
  )
}


export default NewReview;