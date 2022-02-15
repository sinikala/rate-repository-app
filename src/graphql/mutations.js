import { gql } from '@apollo/client';

export const SIGNIN = gql`
mutation authenticate($credentials: AuthenticateInput!) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`
