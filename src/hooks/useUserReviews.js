import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';


const useUserCheck = (includeReviews) => {

  const { data } = useQuery(GET_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  });

  return data

};

export default useUserCheck;