import { IconButton, IconButtonProps } from "@material-ui/core";

interface CIconButtonProps extends IconButtonProps { }

const CIconButton: React.FC<CIconButtonProps> = ({ children, ...rest }) => {
  return (
    <IconButton {...rest}>{children}</IconButton>
  );
}
export default CIconButton;