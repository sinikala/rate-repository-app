import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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