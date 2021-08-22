import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { CommunitiesData } from '../../../types/Community';
import CSearchBar from '../../commons/CSearchBar';
import { SEARCH_COMMUNITIES } from '../Queries';
import SearchList from './List';
import SearchPopper from './SearchPopper';

const CommunitySearchBar = () => {
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [term, setTerm] = useState('');
  const debouncedValue = useDebounce(term, 500);
  const [lazyQuery, { loading, error, data }] =
    useLazyQuery<CommunitiesData>(SEARCH_COMMUNITIES);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    if (data && data.searchCommunities?.length) {
      setAnchorEl(searchBarRef.current);
    }
  }, [data]);

  useEffect(() => {
    if (debouncedValue) {
      lazyQuery({ variables: { term: debouncedValue } });
    }
  }, [debouncedValue]);

  return (
    <div>
      <div ref={searchBarRef}>
        <CSearchBar term={term} handleInputChange={handleInputChange} />
      </div>
      <SearchPopper open={!!anchorEl} anchorEl={anchorEl} onClickAway={() => setAnchorEl(null)} placement="bottom-start">
        {data && <SearchList communities={data.searchCommunities} />}
      </SearchPopper>
    </div>
  );
};

export default CommunitySearchBar;