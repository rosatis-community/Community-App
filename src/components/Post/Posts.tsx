import { useQuery } from '@apollo/client';
import { styled } from '@material-ui/core';
import { PostsData } from '../../types/Post';
import CTypography from '../commons/CTypography';
import PostCard from './Card/PostCard';
import { GET_POSTS } from './Queries';

const PostCardWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Posts = () => {
  const { loading, error, data } = useQuery<PostsData>(GET_POSTS);

  if (loading) return <CTypography>Loading...</CTypography>;
  if (error) return <CTypography>Error! {error.message}</CTypography>;

  return (
    <div>
      {data.posts &&
        data.posts.map((post) => (
          <PostCardWrapper key={post._id}>
            <PostCard post={post} community={post.community} />
          </PostCardWrapper>
        ))}
    </div>
  );
};

export default Posts;
