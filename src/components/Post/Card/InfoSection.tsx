import { Link, styled } from '@material-ui/core';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '../../../router/routes';
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
  color: theme.palette.text.secondary
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
      {community && (
        <>
          <CommunityAvatar alt={community.name} src={community.communityIcon} />
          <Link component={RouterLink} to={`${Routes.communities}/${community.name}`} underline="hover">
            <CommunityName>
              {community.name}
            </CommunityName>
          </Link>
        </>
      )}
      <CTypography>
        <Link href="#" onClick={preventDefault}>
          {author.username}
        </Link>
      </CTypography>
      <CTypography>{created_at}</CTypography>
    </InfoSectionRoot >
  );
};

export default InfoSection;
