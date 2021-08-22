import { ListItem, ListItemProps } from '@material-ui/core';

function CListItem<C extends React.ElementType>(
  props: ListItemProps<C, { component?: C }>,
) {
  const { children, ...rest } = props;

  return <ListItem {...rest}>{children}</ListItem>;
}

export default CListItem;
