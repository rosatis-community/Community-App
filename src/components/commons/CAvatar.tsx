import { Avatar, AvatarProps } from '@material-ui/core';

interface CAvatarProps extends AvatarProps { }

const CAvatar: React.FC<CAvatarProps> = ({ children, ...rest }) => {
  return (
    <Avatar {...rest}>{children}</Avatar>
  );
}
export default CAvatar;