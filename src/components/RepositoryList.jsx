import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import RepositoryMenu from './RepositoryMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, orderBy, setOrderBy }) => {
  const repositoryNodes = repositories
    ? repositories.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryMenu orderBy={orderBy} setOrderBy={setOrderBy} />}
      renderItem={({ item }) => (
        <Link to={`/repositories/${item.id}`}>
          <RepositoryItem key={item.id} item={item} />
        </Link>
      )}
    />
  );
};


export const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState();
  const repositories = useRepositories(orderBy);

  return <RepositoryListContainer repositories={repositories} orderBy={orderBy} setOrderBy={setOrderBy} />;
};

export default RepositoryList;