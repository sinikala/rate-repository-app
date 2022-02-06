import { View, StyleSheet } from 'react-native';
import Text from './Text';
//import theme from '../theme';
import RepositoryStatsRow from './RepositoryStatsRow';


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    //resizeMode: 'stretch'
  },
  container: {
    backgroundColor: 'white',
    margin: '5px'
  },
  infoContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // padding: '10px',
    // margin: '5px'
  },
  languageBox: {
    // backgroundColor: theme.colors.primary,
    // borderRadius: 3,
    // color: 'white',
    // padding: '3px',
    // alignSelf: 'flex-start'
  },
  infoBox: {
    // display: 'flex',
    // padding: '5px',
    // margin: '5px'
  },
});


const RepositoryItemInfo = ({ item }) => {

  return (
    <View style={styles.infoBox}>
      <Text fontWeight="bold">{item.fullName}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.languageBox}>{item.language}</Text>
    </View>

  )

}



const RepositoryItem = ({ item }) => {


  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>

        <RepositoryItemInfo item={item} />
      </View>
      <RepositoryStatsRow item={item} />
    </View>
  )
};

export default RepositoryItem;

{/* <Image
          style={styles.image}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        /> */}