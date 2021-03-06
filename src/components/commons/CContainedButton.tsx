import Button, { ButtonProps } from '@material-ui/core/Button';

type CContainedButtonProps = ButtonProps;

const CContainedButton: React.FC<CContainedButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <Button variant="contained" {...rest}>
      {children}
    </Button>
  );
};
export default CContainedButton;
