import React, { FC } from 'react';
import { Community } from '../../../../types/Community';
import CList from '../../../commons/CList';
import ListItem from './ListItem';

interface SearchListProps {
  communities: Community[];
}

const SearchList: FC<SearchListProps> = ({ communities }) => {
  return (
    <CList disablePadding>
      {communities &&
        communities.map((community) => (
          <ListItem key={community.name} community={community} />
        ))}
    </CList>
  );
};

export default SearchList;
