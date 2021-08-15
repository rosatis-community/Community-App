import { styled } from '@material-ui/core';
import { FC } from "react";
import { Post } from "../../../types/Post";
import CTypography from "../../commons/CTypography";
import VoteSection from '../Card/VoteSection';
import InfoSection from './InfoSection';
import OperationSection from './OperationSection';

const CardRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  width: 500,
  backgroundColor: theme.palette.grey[900],
}));

const PostContent = styled('div')(({ theme }) => ({
  width: '100%',
}));

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { _id, title } = post
  return (
    <CardRoot>
      <VoteSection post={post} />
      <PostContent>
        <InfoSection post={post} />
        <CTypography>
          {title}
        </CTypography>
        <OperationSection post={post} />
      </PostContent>
    </CardRoot>
  )
}

export default PostCard;