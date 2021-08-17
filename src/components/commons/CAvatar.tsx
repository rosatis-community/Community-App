import { Avatar, AvatarProps } from '@material-ui/core';

type CAvatarProps = AvatarProps;

const CAvatar: React.FC<CAvatarProps> = ({ children, ...rest }) => {
  return <Avatar {...rest}>{children}</Avatar>;
};
export default CAvatar;
