import CNavbar from './commons/CNavbar';
import CTypography from './commons/CTypography';

const Navbar = () => {
  return (
    <CNavbar position="sticky">
      <CTypography
        variant="h6"
        noWrap
      >
        Community
      </CTypography>
    </CNavbar>
  );
}

export default Navbar;