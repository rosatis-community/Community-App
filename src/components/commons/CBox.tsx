import { Box, BoxProps } from '@material-ui/core';

interface CBoxProps extends BoxProps { }

const CBox: React.FC<CBoxProps> = ({ children, ...rest }) => {
  return (
    <Box {...rest}>{children}</Box>
  );
}
export default CBox;