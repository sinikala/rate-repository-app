import { Link } from "react-router-native";
import Text from './Text';


const AppBarTab = ({ text, link }) => {
  return (
    <Link to={link}>
      <Text color="barText"
        fontWeight="bold"
        fontSize="subheading"
        style={{ paddingRight: 20 }}>
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;