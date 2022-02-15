import { useMutation, useApolloClient } from '@apollo/client';
import { SIGNIN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';


const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { credentials: { username, password } } })
    //console.log('data', data.authenticate);

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
