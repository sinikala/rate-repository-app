import { View } from 'react-native';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import useCreateReview from '../hooks/useCreateReview';



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
  rateInput:
    yup
      .number()
      .min(0, 'Rating minimun value is 0')
      .max(100, 'Rating maximum value is 100')
      .required('Rating is required'),
  text:
    yup
      .string()
      .nullable()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rateInput: '',
  text: ''
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
  const [createReview] = useCreateReview();
  let navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { ownerName, repositoryName, rateInput, text } = values
    const rating = parseInt(rateInput, 10)

    try {
      const data = await createReview({ ownerName, repositoryName, rating, text });
      if (data) {
        const fullId = data.createReview.id
        const repositoryId = fullId.substring(fullId.indexOf('.') + 1)
        resetForm()
        navigate(`/repositories/${repositoryId}`)
      }

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <NewReviewContainer onSubmit={onSubmit} />
  )
}


export default NewReview;
