import { gql } from '@apollo/client';

export const SEARCH_COMMUNITIES = gql`
  query searchCommunities($term: String!) {
    searchCommunities(term: $term) {
      name
      title
      communityIcon
    }
  }
`;
