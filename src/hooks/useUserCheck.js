import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_USER } from '../graphql/queries';


const useUserCheck = () => {

  const [loggedInUser, setLoggedInUser] = useState(false)

  const { data, error, loading } = useQuery(GET_USER, { fetchPolicy: 'cache-and-network', });

  useEffect(() => {
    if (data) {
      if (data.me) {
        setLoggedInUser(true)
      } else {
        setLoggedInUser(false)
      }
    }
  }, [data])



  return loggedInUser

};

export default useUserCheck;