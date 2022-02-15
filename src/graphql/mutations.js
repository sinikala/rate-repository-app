import { gql } from '@apollo/client';

export const SIGNIN = gql`
mutation authenticate($credentials: AuthenticateInput!) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`



// export const SIGNIN = gql`
// mutation {
//   authenticate(credentials: { username: "kalle", password: "password" }) {
//     accessToken
//   }
// }
// `