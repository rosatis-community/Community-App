import { ClickAwayListener } from '@material-ui/core';
import React, { FC, useMemo } from 'react';
import CPaper from '../../commons/CPaper';
import CPopper, { CPopperProps } from '../../commons/CPopper';

interface SearchPopperProps extends CPopperProps {
  onClickAway: () => void;
}

const SearchPopper: FC<SearchPopperProps> = (props) => {
  const { children, onClickAway, ...rest } = props;

  const modifiers = useMemo(() => [
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ], []);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div>
        <CPopper {...rest} popperOptions={{ modifiers }}>
          <CPaper>
            {children}
          </CPaper>
        </CPopper>
      </div>
    </ClickAwayListener >
  );
};

SearchPopper.defaultProps = {
  open: false
}

export default SearchPopper;
