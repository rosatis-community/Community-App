import { Grid, GridProps } from '@material-ui/core';

interface CGridProps extends GridProps { }

const CGrid: React.FC<CGridProps> = ({ children, ...rest }) => {
  return (
    <Grid {...rest}>{children}</Grid>
  );
}
export default CGrid;