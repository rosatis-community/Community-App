import Paper, { PaperProps } from '@material-ui/core/Paper';
import React from 'react';

function CPaper<C extends React.ElementType>(
  props: PaperProps<C, { component?: C }>,
) {
  const { children, ...rest } = props;

  return <Paper {...rest}>{children}</Paper>;
}
export default CPaper;
