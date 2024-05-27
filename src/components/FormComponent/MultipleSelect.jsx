import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};



function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelectChip({ options, label, name,onChange=()=>{}, ...other }) {
  const theme = useTheme();
  const { control } = useFormContext();
//   const [selectedValue, setSelectedValue] = React.useState(defaultValues);

//   const handleChange = (event) => {
//     const {
//       target: { value }
//     } = event;

//     setSelectedValue(value);
//   };

  return (
      <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const {onBlur,onChange,value,} = field;
        
        return(
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          {...field}

          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {value.map((value) => {
                const label = options.find((item) => item.value == value).label;
                return <Chip key={label} label={label} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map(({ label, value }) => (
            <MenuItem
              key={label}
              value={value}
              style={getStyles(
                label,
                options.map(({ label }) => label),
                theme
              )}
            >
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div> )}}
    />
  );
}
