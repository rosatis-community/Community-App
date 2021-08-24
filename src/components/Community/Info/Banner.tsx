import { styled } from '@material-ui/core';
import { FC } from 'react';
import { Community } from '../../../types/Community';
import { maybePluralize } from '../../../utils/string';
import CAvatar from '../../commons/CAvatar';
import CTypography from '../../commons/CTypography';

interface BannerProps {
  community: Community;
}

const BannerRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const CommunityLogo = styled(CAvatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Banner: FC<BannerProps> = ({ community }) => {
  const { name, title, subscribers, communityIcon } = community;

  return (
    <BannerRoot>
      <CommunityLogo src={communityIcon} alt={name} />
      <CTypography variant="h5">{title ?? name}</CTypography>
      <CTypography variant="h5" color="GrayText">
        {maybePluralize(subscribers, 'subscriber')}
      </CTypography>
    </BannerRoot>
  );
};

export default Banner;
