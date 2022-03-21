import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
          fullName
          reviewCount
          ratingAverage
          forksCount
          description
          language
          stargazersCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  query repository($id: ID!) {
    repository (id: $id) {
      id
      fullName
      reviewCount
      ratingAverage
      forksCount
      description
      language
      stargazersCount
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;


export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;