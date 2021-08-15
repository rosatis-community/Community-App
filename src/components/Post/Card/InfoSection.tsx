import { styled } from '@material-ui/core';
import { FC } from "react";
import { Post } from "../../../types/Post";
import CAvatar from '../../commons/CAvatar';
import CTypography from "../../commons/CTypography";

const InfoSectionRoot = styled('div')(({ theme }) => ({
  display: 'flex'
}));

const CommunityAvatar = styled(CAvatar)(({ theme }) => ({
  width: 24,
  height: 24
}))

interface InfoSectionProps {
  post: Post;
}

const InfoSection: FC<InfoSectionProps> = ({ post }) => {
  const { community, author, created_at } = post
  return (
    <InfoSectionRoot>
      <CommunityAvatar alt={community.name} src={community.communityIcon} />
      <CTypography>
        {community.name}
      </CTypography>
      <CTypography>
        {author.username}
      </CTypography>
      <CTypography>
        {created_at}
      </CTypography>
    </InfoSectionRoot>
  )
}

export default InfoSection;