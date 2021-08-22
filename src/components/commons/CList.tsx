import { List, ListProps } from '@material-ui/core';

type CListProps = ListProps;

const CList: React.FC<CListProps> = ({ children, ...rest }) => {
  return <List {...rest}>{children}</List>;
};

export default CList;
