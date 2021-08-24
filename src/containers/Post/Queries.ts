import { gql } from '@apollo/client';

export const GET_POST = gql`
  query getPost($id: String!) {
    post(id: $id) {
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
      community {
        name
        communityIcon
      }
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
      community {
        name
      }
    }
  }
`;
