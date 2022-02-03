import { Pressable } from 'react-native';
import Text from './Text';





const handlePress = () => (
  console.log('press')
);



const AppBarTab = ({ text }) => {
  return <Pressable onPress={handlePress}>
   <Text color="barText" fontWeight="bold">{text}</Text>
  </Pressable>

};

export default AppBarTab;