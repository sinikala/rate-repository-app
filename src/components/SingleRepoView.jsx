import { View } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';

import RepositoryItem from './RepositoryItem';


const SingleRepoView = () => {
  let { repositoryId } = useParams();
  const repository = useSingleRepository(repositoryId);

  return (
    <View>
      {repository &&
        <RepositoryItem item={repository.repository} />
      }
    </View>
  )
}

export default SingleRepoView;