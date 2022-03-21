import { Picker } from '@react-native-picker/picker';

const RepositoryMenu = ({ orderBy, setOrderBy }) => {
  //const [selectedOption, setOption] = useState();

  const handleChange = (itemValue) => {
    setOrderBy(itemValue)

  }
  return (
    <Picker
      selectedValue={orderBy}
      prompt="Sort repositories..."
      onValueChange={(itemValue) =>
        handleChange(itemValue)}>
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  );
};

export default RepositoryMenu;
