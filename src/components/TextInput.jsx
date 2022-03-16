import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';


const TextInput = ({ style, error, ...props }) => {
  let textInputStyle = style

  if (error && style) {
    textInputStyle = { ...style, borderColor: theme.colors.error }
  }


  return <NativeTextInput style={[textInputStyle]} {...props} />;
};

export default TextInput;