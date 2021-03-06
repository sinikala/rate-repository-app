import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList'

const repositories = {
  repositories: {
    totalCount: 8,
    pageInfo: {
      hasNextPage: true,
      endCursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
      startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    edges: [
      {
        node: {
          id: 'jaredpalmer.formik',
          fullName: 'jaredpalmer/formik',
          description: 'Build forms in React, without the tears',
          language: 'TypeScript',
          forksCount: 1619,
          stargazersCount: 21856,
          ratingAverage: 88,
          reviewCount: 3,
          ownerAvatarUrl:
            'https://avatars2.githubusercontent.com/u/4060187?v=4',
        },
        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
      },
      {
        node: {
          id: 'async-library.react-async',
          fullName: 'async-library/react-async',
          description: 'Flexible promise-based React data loader',
          language: 'JavaScript',
          forksCount: 69,
          stargazersCount: 1760,
          ratingAverage: 72,
          reviewCount: 3,
          ownerAvatarUrl:
            'https://avatars1.githubusercontent.com/u/54310907?v=4',
        },
        cursor:
          'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
      },
    ],
  }
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {

      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      //const repositoryItems = getAllByTestId('repositoryItem');
      //const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const repositoryItemsInfo = getAllByTestId('repositoryItemInfo');


      expect(repositoryItemsInfo[0]).toHaveTextContent(
        'jaredpalmer/formik'
      );
      expect(repositoryItemsInfo[1]).toHaveTextContent(
        'Flexible promise-based React data loader'
      );
      expect(repositoryItemsInfo[0]).toHaveTextContent(
        'TypeScript'
      );


      expect(getAllByTestId('Stars')[0]).toHaveTextContent(
        '21.9kStars'
      );
      expect(getAllByTestId('Forks')[1]).toHaveTextContent(
        '69Forks'
      );
      expect(getAllByTestId('Reviews')[0]).toHaveTextContent(
        '3Reviews'
      );
      expect(getAllByTestId('Rating')[1]).toHaveTextContent(
        '72Rating'
      );

    });
  });
});