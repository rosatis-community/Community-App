import { styled } from '@material-ui/core';
import React, { FC } from 'react';
import { Community } from '../../../../types/Community';
import CAvatar from '../../../commons/CAvatar';
import CListItemAvatar from '../../../commons/CListItemAvatar';

interface ListItemAvatarProps {
  community: Community;
}

const AvatarWrapper = styled(CListItemAvatar)(() => ({
  '&.MuiListItemAvatar-root': {
    minWidth: 32
  }
}));

const CommunityAvatar = styled(CAvatar)(() => ({
  width: 16,
  height: 16,
}));

const ListItemAvatar: FC<ListItemAvatarProps> = ({ community }) => {
  const { name, communityIcon } = community;

  return (
    <AvatarWrapper>
      <CommunityAvatar src={communityIcon} alt={name} />
    </AvatarWrapper>
  );
};

export default ListItemAvatar;
