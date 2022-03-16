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

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rateInput" placeholder="Rating between 0 and 100" keyboardType="numeric" />
      <FormikTextInput name="text" placeholder="Review" multiline={true} numberOfLines={5} />
      <Pressable
        onPress={onSubmit}
        style={styles.button}
      >
        <Text color="buttonText">Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;

