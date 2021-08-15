import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
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
        _id
        name
        title
        communityIcon
        subscribers
      }
    }
  }
`;