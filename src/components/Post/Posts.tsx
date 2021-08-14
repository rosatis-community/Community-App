import { gql, useQuery } from '@apollo/client';
import { PostsData } from '../../types/Post';
import CTypography from '../commons/CTypography';
import Post from './Post';

const GET_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      author
      authorId
      upvote
      downvote
      score
      numComment
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery<PostsData>(GET_POSTS);

  if (loading) return <CTypography>Loading...</CTypography>;
  if (error) return <CTypography>Error! {error.message}</CTypography>;

  return (
    <div>
      {data.posts && data.posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default Posts;