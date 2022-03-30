import { View, FlatList, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { format, parseISO } from 'date-fns';
import theme from '../theme';
import Text from './Text';
import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  rating: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  container: {
    backgroundColor: theme.colors.elementBackground,
    margin: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    margin: 5,
    flexShrink: 2,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    margin: 5,
    alignSelf: 'center',
    paddingHorizontal: 40
  },
  separator: {
    height: 10,
  },
  page: {
    marginBottom: 100
  }
});


const ItemSeparator = () => <View style={styles.separator} />;


const ReviewItem = ({ review }) => {
  const date = format(parseISO(review.createdAt), 'dd.MM.yyyy')

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color="primary"
          fontWeight="bold"
          fontSize="subheading">
          {review.rating}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight="bold"
          fontSize="subheading">
          {review.user.username}
        </Text>
        <Text style={{ marginBottom: 3 }}>{date}</Text>
        <Text>
          {review.text}
        </Text>
      </View>
    </View>
  )

}


const SingleRepoView = () => {
  let { repositoryId } = useParams();

  const { repository, fetchMore } = useSingleRepository({
    id: repositoryId
  });


  while (!repository) {
    return (
      <View />
    )
  }
  //const repository = result.repository

  const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  return (
    <View style={styles.page}>
      {repository &&
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={() => <RepositoryItem item={repository} />}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
        />
      }
    </View>
  )
}

export default SingleRepoView;