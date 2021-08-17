import Button, { ButtonProps } from '@material-ui/core/Button';

type CButtonProps = ButtonProps;

const CButton: React.FC<CButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
export default CButton;
