import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';



const useRepositories = (orderBy) => {
  let variables = {}

  if (orderBy === 'lowest') {
    variables = {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC'
    }
  } else if (orderBy === 'highest') {
    variables = {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC'
    }
  } else {
    variables = {
      orderBy: 'CREATED_AT',
      orderDirection: 'ASC'
    }
  }
  const { data } = useQuery(GET_REPOSITORIES, { variables: variables, fetchPolicy: 'cache-and-network', });

  return data;
};

export default useRepositories;





// import { useState, useEffect } from 'react';

 //const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);

//     const response = await fetch('http://<IP HERE>:5000/api/repositories');
//     const json = await response.json();

//     setLoading(false);
//     setRepositories(json);
//   };

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// };

// export default useRepositories;

