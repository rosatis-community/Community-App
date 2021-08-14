import { AppBarProps } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FC } from 'react';

interface CNavbarProps extends AppBarProps { }

const CNavbar: FC<CNavbarProps> = ({ children, ...rest }) => {
  return (
    <AppBar {...rest}>
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  );
}

export default CNavbar;
