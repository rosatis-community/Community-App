import { styled } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { FC } from 'react';
import { Post } from '../../../types/Post';
import CIconButton from '../../commons/CIconButton';
import CTypography from '../../commons/CTypography';

const VoteSectionRoot = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

interface VoteSectionProps {
  post: Post;
}

const VoteSection: FC<VoteSectionProps> = ({ post }) => {
  const { score } = post;
  return (
    <VoteSectionRoot>
      <CIconButton size="small">
        <ArrowUpwardIcon />
      </CIconButton>
      <div>
        <CTypography>{score}</CTypography>
      </div>
      <CIconButton size="small">
        <ArrowDownwardIcon />
      </CIconButton>
    </VoteSectionRoot>
  );
};

export default VoteSection;
