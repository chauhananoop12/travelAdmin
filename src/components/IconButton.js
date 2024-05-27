import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export default function RIGIconButton(props) {
  return <IconButton {...props}>{props.children}</IconButton>;
}
