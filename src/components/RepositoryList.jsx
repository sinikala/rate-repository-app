import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
//import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  //const { repositories } = useRepositories();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network', });


  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem key={item.id} item={item} />
      )}
    />
  );
};

export default RepositoryList;