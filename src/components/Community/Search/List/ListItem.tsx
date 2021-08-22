import React, { FC } from 'react';
import { Community } from '../../../../types/Community';
import CListItem from '../../../commons/CListItem';
import CListItemText from '../../../commons/CListItemText';
import CTypography from '../../../commons/CTypography';
import ListItemAvatar from './ListItemAvatar';

interface ListItemProps {
  community: Community;
}

const ListItem: FC<ListItemProps> = ({ community }) => {
  const { name } = community;

  return (
    <CListItem button>
      <ListItemAvatar community={community} />
      <CListItemText
        primary={<CTypography variant="body2">{name}</CTypography>}
      />
    </CListItem>
  );
};

export default ListItem;
