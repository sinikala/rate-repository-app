import { View, StyleSheet, Text } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const SingleRepoView = () => {
  let { repositoryId } = useParams();
  //console.log('single view', repositoryId)

  const repository = useSingleRepository(repositoryId);
  //console.log('repo', repository)

  return (
    <View>
      {repository &&
        <RepositoryItem item={repository.repository} />
      }
    </View>
  )
}

export default SingleRepoView;