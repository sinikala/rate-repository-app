import { gql } from '@apollo/client';

export const SIGNIN = gql`
mutation authenticate($credentials: AuthenticateInput!) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`


export const CREATE_REVIEW = gql`
mutation createReview($review: CreateReviewInput){
  createReview(review: $review) {
    id
  }
}
`
