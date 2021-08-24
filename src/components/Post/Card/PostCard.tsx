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
  cursor: 'pointer',
  position: 'relative',
  paddingLeft: theme.spacing(6),
}));

const VoteSectionWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  padding: theme.spacing(0.5)
}));

const PostContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 500,
  paddingTop: theme.spacing(1),
  position: 'relative',
}));

const InfoSectionWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const PostMedia = styled('div')(({ theme }) => ({
  height: '100%',
}));

interface PostCardProps {
  post: Post;
  community: Community;
  disableRouting?: boolean;
  disableCommentAction?: boolean;
}

const PostCard: FC<PostCardProps> = ({
  post,
  community,
  disableRouting,
  disableCommentAction,
}) => {
  const { _id, title } = post;
  const history = useHistory();

  const handleRouting = (post: Post) => {
    if (!disableRouting) {
      history.push(`/communities/${community.name}/posts/${post._id}`);
    }
  };

  return (
    <CardRoot onClick={() => handleRouting(post)}>
      <VoteSectionWrapper>
        <VoteSection post={post} />
      </VoteSectionWrapper>
      <PostContent>
        <InfoSectionWrapper>
          <InfoSection post={post} />
        </InfoSectionWrapper>
        <CTypography>{title}</CTypography>
        <PostMedia>
          <CTypography>Content</CTypography>
        </PostMedia>
        <ActionsSection
          post={post}
          disableCommentAction={disableCommentAction}
        />
      </PostContent>
    </CardRoot>
  );
};

PostCard.defaultProps = {
  disableRouting: false,
  disableCommentAction: false,
};

export default PostCard;
