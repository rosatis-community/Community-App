import Button, { ButtonProps } from '@material-ui/core/Button';

interface COutlinedButtonProps extends ButtonProps { }

const COutlinedButton: React.FC<COutlinedButtonProps> = ({ children, ...rest }) => {
  return (
    <Button variant="outlined" {...rest}>{children}</Button>
  );
}
export default COutlinedButton;