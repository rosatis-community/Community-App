import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useDebounce from '../../../hooks/useDebounce';
import { CommunitiesData } from '../../../types/Community';
import CSearchBar from '../../commons/CSearchBar';
import { SEARCH_COMMUNITIES } from '../Queries';
import SearchList from './List';
import SearchPopper from './SearchPopper';

const CommunitySearchBar = () => {
  const location = useLocation();
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [term, setTerm] = useState('');
  const debouncedValue = useDebounce(term, 500);

  const onCompleted = (data: CommunitiesData) => {
    setAnchorEl(searchBarRef.current);
  };

  const [lazyQuery, { loading, error, data }] = useLazyQuery<CommunitiesData>(
    SEARCH_COMMUNITIES,
    { onCompleted },
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const closePopper = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (debouncedValue) {
      lazyQuery({ variables: { term: debouncedValue } });
    }
  }, [debouncedValue]);

  useEffect(() => {
    setTerm('');
    closePopper();
  }, [location]);

  return (
    <div>
      <div ref={searchBarRef}>
        <CSearchBar term={term} handleInputChange={handleInputChange} />
      </div>
      <SearchPopper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClickAway={closePopper}
        placement="bottom-start"
      >
        {data && <SearchList communities={data.searchCommunities} />}
      </SearchPopper>
    </div>
  );
};

export default CommunitySearchBar;
