import Paper, { PaperProps } from '@material-ui/core/Paper';

interface CPaperProps extends PaperProps { }

const CPaper: React.FC<CPaperProps> = ({ children, ...rest }) => {
  return (
    <Paper {...rest}>{children}</Paper>
  );
}
export default CPaper;