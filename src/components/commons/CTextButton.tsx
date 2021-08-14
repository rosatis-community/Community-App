import Button, { ButtonProps } from '@material-ui/core/Button';

interface CTextButtonProps extends ButtonProps { }

const CTextButton: React.FC<CTextButtonProps> = ({ children, ...rest }) => {
  return (
    <Button variant="text" {...rest}>{children}</Button>
  );
}
export default CTextButton;