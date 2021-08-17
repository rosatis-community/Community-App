import { Typography, TypographyProps } from '@material-ui/core';

type CTypographyProps = TypographyProps;

const CTypography: React.FC<CTypographyProps> = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>;
};
export default CTypography;
