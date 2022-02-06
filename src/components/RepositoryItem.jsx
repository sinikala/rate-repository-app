import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryStatsRow from './RepositoryStatsRow';




const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    resizeMode: 'stretch'
  },
  container: {
    backgroundColor: 'white',
    margin: 5
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    margin: 5
  },
  languageBox: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    color: 'white',
    padding: 5,
    alignSelf: 'flex-start'
  },
  infoBox: {
    display: 'flex',
    padding: 5,
    margin: 5,
    alignContent: 'flex-start',
    flex: 5
  },
});


const RepositoryItemInfo = ({ item }) => {
  return (
    <View style={styles.infoBox}>
      <Text fontWeight="bold">{item.fullName}</Text>
      <Text style={{ paddingVertical: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
        {item.description}
      </Text>
      <Text style={styles.languageBox}>{item.language}</Text>
    </View>
  )
}



const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <RepositoryItemInfo item={item} />
      </View>
      <RepositoryStatsRow item={item} />
    </View>
  )
};

export default RepositoryItem;

