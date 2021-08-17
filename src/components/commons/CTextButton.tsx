import Button, { ButtonProps } from '@material-ui/core/Button';

type CTextButtonProps = ButtonProps;

const CTextButton: React.FC<CTextButtonProps> = ({ children, ...rest }) => {
  return (
    <Button variant="text" {...rest}>
      {children}
    </Button>
  );
};
export default CTextButton;
