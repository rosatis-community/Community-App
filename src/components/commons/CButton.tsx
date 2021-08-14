import Button, { ButtonProps } from '@material-ui/core/Button';

interface CButtonProps extends ButtonProps { }

const CButton: React.FC<CButtonProps> = ({ children, ...rest }) => {
  return (
    <Button {...rest}>{children}</Button>
  );
}
export default CButton;