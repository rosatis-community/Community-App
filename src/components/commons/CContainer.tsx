import Container, { ContainerProps } from '@material-ui/core/Container';

type CContainerProps = ContainerProps;

const CContainer: React.FC<CContainerProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
export default CContainer;
