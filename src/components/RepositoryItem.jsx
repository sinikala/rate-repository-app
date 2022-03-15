import { View, StyleSheet, Image, Pressable } from 'react-native';
import * as Linking from 'expo-linking';
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
    backgroundColor: theme.colors.elementBackground,
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
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    margin: 5,
    alignSelf: 'center',
    paddingHorizontal: 40
  }
});


const RepositoryItemInfo = ({ item }) => {
  return (
    <View style={styles.infoBox} testID="repositoryItemInfo">
      <Text fontWeight="bold">{item.fullName}</Text>
      <Text style={{ paddingVertical: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
        {item.description}
      </Text>
      <Text style={styles.languageBox}>{item.language}</Text>
    </View>
  )
}

const RepositoryLink = ({ item }) => {
  const onPress = () => {
    Linking.openURL(item.url)
  }

  return (
    <View >
      <Pressable
        onPress={onPress}
        style={styles.button}
      >
        <Text color="buttonText">Open in GitHub</Text>
      </Pressable>
    </View>
  )

}


const RepositoryItem = ({ item }) => {

  return (
    <View>
      <View style={styles.container} testID="repositoryItem">
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
        {item.url &&
          <RepositoryLink item={item} />}
      </View>
    </View >
  )
};

export default RepositoryItem;

