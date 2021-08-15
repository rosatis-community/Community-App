import { useQuery } from '@apollo/client';
import { PostsData } from '../../types/Post';
import CTypography from '../commons/CTypography';
import PostCard from './Card/PostCard';
import { GET_POSTS } from './Queries';

const Posts = () => {
  const { loading, error, data } = useQuery<PostsData>(GET_POSTS);

  if (loading) return <CTypography>Loading...</CTypography>;
  if (error) return <CTypography>Error! {error.message}</CTypography>;

  return (
    <div>
      {data.posts && data.posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Posts;