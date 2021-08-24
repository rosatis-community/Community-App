import { CardActions, styled } from '@material-ui/core';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { FC } from 'react';
import { Post } from '../../../types/Post';
import { StringUtils } from '../../../utils';
import CTextButton from '../../commons/CTextButton';
import CTypography from '../../commons/CTypography';

const ActionsSectionRoot = styled(CardActions)(({ theme }) => ({}));

const CommentText = styled(CTypography)(({ theme }) => ({
  textTransform: 'capitalize',
}));

interface OperationSectionProps {
  post: Post;
  disableCommentAction?: boolean;
}

const OperationSection: FC<OperationSectionProps> = ({
  post,
  disableCommentAction,
}) => {
  const { numComment } = post;
  return (
    <ActionsSectionRoot>
      <CTextButton
        startIcon={<ModeCommentOutlinedIcon />}
        disabled={disableCommentAction}
      >
        <CommentText>
          {StringUtils.maybePluralize(numComment, 'comment')}
        </CommentText>
      </CTextButton>
    </ActionsSectionRoot>
  );
};

OperationSection.defaultProps = {
  disableCommentAction: false,
};

export default OperationSection;
