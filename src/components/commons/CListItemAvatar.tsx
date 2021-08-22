import { ListItemAvatar, ListItemAvatarProps } from '@material-ui/core';

type CListItemAvatarProps = ListItemAvatarProps;

const CListItemAvatar: React.FC<CListItemAvatarProps> = ({
  children,
  ...rest
}) => {
  return <ListItemAvatar {...rest}>{children}</ListItemAvatar>;
};

export default CListItemAvatar;
