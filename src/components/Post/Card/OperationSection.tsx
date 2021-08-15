import { styled } from '@material-ui/core';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { FC } from "react";
import { Post } from "../../../types/Post";
import { StringUtils } from '../../../utils';
import CTextButton from '../../commons/CTextButton';
import CTypography from "../../commons/CTypography";

const OperationSectionRoot = styled('div')(({ theme }) => ({

}));

const CommentText = styled(CTypography)(({ theme }) => ({
  textTransform: 'capitalize'
}));

interface OperationSectionProps {
  post: Post;
}

const OperationSection: FC<OperationSectionProps> = ({ post }) => {
  const { numComment } = post
  return (
    <OperationSectionRoot>
      <CTextButton startIcon={<ModeCommentOutlinedIcon />}>
        <CommentText>
          {StringUtils.maybePluralize(numComment, 'comment')}
        </CommentText>
      </CTextButton>
    </OperationSectionRoot>
  )
}

export default OperationSection;