import { Link, styled } from '@material-ui/core';
import { FC } from 'react';
import { Post } from '../../../types/Post';
import CAvatar from '../../commons/CAvatar';
import CTypography from '../../commons/CTypography';

const InfoSectionRoot = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const CommunityAvatar = styled(CAvatar)(({ theme }) => ({
  marginRight: theme.spacing(1),
  width: 24,
  height: 24,
}));

const CommunityName = styled(CTypography)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

interface InfoSectionProps {
  post: Post;
}

const InfoSection: FC<InfoSectionProps> = ({ post }) => {
  const { community, author, created_at } = post;
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <InfoSectionRoot>
      <CommunityAvatar alt={community.name} src={community.communityIcon} />
      <CommunityName>{community.name}</CommunityName>
      <CTypography>
        <Link href="#" onClick={preventDefault}>
          {author.username}
        </Link>
      </CTypography>
      <CTypography>{created_at}</CTypography>
    </InfoSectionRoot>
  );
};

export default InfoSection;
