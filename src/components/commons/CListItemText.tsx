import { ListItemText, ListItemTextProps } from '@material-ui/core';

type CListItemTextProps = ListItemTextProps;

const CListItemText: React.FC<CListItemTextProps> = ({ children, ...rest }) => {
  return <ListItemText {...rest}>{children}</ListItemText>;
};

export default CListItemText;
