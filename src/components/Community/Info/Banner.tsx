import { styled } from '@material-ui/core';
import { FC } from 'react';
import { Community } from '../../../types/Community';
import { maybePluralize } from '../../../utils/string';
import CAvatar from '../../commons/CAvatar';
import CTypography from '../../commons/CTypography';

interface BannerProps {
  community: Community;
}

const BannerWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}));

const Banner: FC<BannerProps> = ({ community }) => {
  const { name, title, subscribers, communityIcon } = community;

  return (
    <BannerWrapper>
      <CAvatar src={communityIcon} alt={name} />
      <CTypography variant="h5">{title ?? name}</CTypography>
      <CTypography variant="h5">{maybePluralize(subscribers, 'subscriber')}</CTypography>
    </BannerWrapper>
  );
};

export default Banner;
