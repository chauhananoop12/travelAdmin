import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function RigChip(props) {
  return (
    
      <Chip {...props}>{props.children}</Chip>
      
    
  );
}