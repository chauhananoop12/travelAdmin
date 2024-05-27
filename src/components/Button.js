import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function RigButton(props) {
  return (
    
      <Button {...props}>{props.children}</Button>
      
    
  );
}