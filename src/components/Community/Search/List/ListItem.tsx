import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '../../../../router/routes';
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
    <CListItem component={RouterLink} to={`${Routes.communities}/${name}`}>
      <ListItemAvatar community={community} />
      <CListItemText
        primary={
          <CTypography variant="body2" color="ButtonFace">
            {name}
          </CTypography>
        }
      />
    </CListItem>
  );
};

export default ListItem;
