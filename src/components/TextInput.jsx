import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  let textInputStyle = style

  if (error && style) {
    textInputStyle = { ...style, borderColor: theme.colors.error }
  }


  return <NativeTextInput style={[textInputStyle]} {...props} />;
};

export default TextInput;