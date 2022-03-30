import { View, FlatList, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';
import theme from '../theme';
import Text from './Text';
import useUserReviews from '../hooks/useUserReviews'

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
  const fullId = review.id
  const repositoryId = fullId.substring(fullId.indexOf('.') + 1).replace('.', '/', 1)

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
          {repositoryId}
        </Text>
        <Text style={{ marginBottom: 3 }}>{date}</Text>
        <Text>
          {review.text}
        </Text>
      </View>
    </View>
  )

}


const UserReviews = () => {
  const data = useUserReviews(true)

  while (!data) {
    return (
      <View />
    )
  }

  const reviews = data.me.reviews
    ? data.me.reviews.edges.map(edge => edge.node)
    : [];


  return (
    <View style={styles.page}>
      {reviews &&
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
          ItemSeparatorComponent={ItemSeparator}

        />
      }
    </View>
  )
}

export default UserReviews;