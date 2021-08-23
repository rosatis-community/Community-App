import { Card, styled } from '@material-ui/core';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Community } from '../../../types/Community';
import { Post } from '../../../types/Post';
import CTypography from '../../commons/CTypography';
import VoteSection from '../Card/VoteSection';
import ActionsSection from './ActionsSection';
import InfoSection from './InfoSection';

const CardRoot = styled(Card)(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer'
}));

const PostContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 500,
}));

const PostMedia = styled('div')(({ theme }) => ({
  height: '100%',
}));

interface PostCardProps {
  post: Post;
  community: Community;
}

const PostCard: FC<PostCardProps> = ({ post, community }) => {
  const { _id, title } = post;
  const history = useHistory();

  const handleRouting = (post: Post) => {
    history.push(`/communities/${community.name}/posts/${post._id}`);
  }

  return (
    <CardRoot onClick={() => handleRouting(post)}>
      <VoteSection post={post} />
      <PostContent>
        <InfoSection post={post} />
        <CTypography>{title}</CTypography>
        <PostMedia>
          <CTypography>Content</CTypography>
        </PostMedia>
        <ActionsSection post={post} />
      </PostContent>
    </CardRoot>
  );
};

export default PostCard;
