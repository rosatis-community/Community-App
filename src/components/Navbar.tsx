import { styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../router/routes';
import CAvatar from './commons/CAvatar';
import CBox from './commons/CBox';
import CNavbar from './commons/CNavbar';
import COutlinedButton from './commons/COutlinedButton';
import CTextButton from './commons/CTextButton';
import CTypography from './commons/CTypography';

const UserAvatar = styled(CAvatar)(({ theme }) => ({
  width: 24,
  height: 24
}))

const LoginLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none'
}))


const Navbar = () => {
  return (
    <CNavbar position="sticky">
      <LoginLink to={Routes.homepage}>
        <CTextButton color="secondary">
          <CTypography
            variant="h6"
            noWrap
          >
            Community
          </CTypography>
        </CTextButton>
      </LoginLink>
      <CBox flex="1" />
      <LoginLink to={Routes.login}>
        <COutlinedButton color="neutral" startIcon={<UserAvatar alt="avatar" />}>
          Login
        </COutlinedButton>
      </LoginLink>
    </CNavbar>
  );
}

export default Navbar;