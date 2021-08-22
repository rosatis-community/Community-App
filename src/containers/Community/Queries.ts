import { gql } from '@apollo/client';

export const GET_COMMUNITY_INFO = gql`
  query getCommunity($name: String!) {
    community(name: $name) {
      name
      title
      communityIcon
      subscribers
    }
  }
`;

export const GET_COMMUNITY_POSTS = gql`
  query getCommunityPost($name: String!) {
    communityPosts(name: $name) {
      _id
      title
      author {
        _id
        username
      }
      upvote
      downvote
      score
      numComment
    }
  }
`;