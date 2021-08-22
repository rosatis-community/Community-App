import { Popper, PopperProps, styled } from '@material-ui/core';

export type CPopperProps = PopperProps;

const PopperWrapper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.modal,
}));

const CPopper: React.FC<CPopperProps> = ({ children, ...rest }) => {
  return <PopperWrapper {...rest}>{children}</PopperWrapper>;
};
export default CPopper;
