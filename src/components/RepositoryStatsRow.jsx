import { View, StyleSheet } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({
  statRow: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  statBox: {
    // display: 'flex',
    // justifyContent: 'space-evenly',
    // alignItems: "center",
  }
});




const editCount = (count) => {
  let output = 0
  {
    count >= 1000
      ? output = +(count / 1000).toFixed(1) + 'k'
      : output = count
  }
  return output
}


const StatsRowBox = ({ count, text }) => {

  return (
    <View style={styles.statBox}>
      <Text fontWeight="bold">{editCount(count)}</Text>
      <Text>{text}</Text>
    </View>
  )
}


const RepositoryStatsRow = ({ item }) => {
  return (
    <View style={styles.statRow}>
      <StatsRowBox count={item.stargazersCount} text="Stars" />
      <StatsRowBox count={item.forksCount} text="Forks" />
      <StatsRowBox count={item.reviewCount} text="Reviews" />
      <StatsRowBox count={item.ratingAverage} text="Rating" />
    </View>
  )
}

export default RepositoryStatsRow