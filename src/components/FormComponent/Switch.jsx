import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { useSwitch } from '@mui/base';
import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
import { green, red } from '@mui/material/colors'

const blue = {
  700: '#0059B2'
};

const grey = {
  400: '#BFC7CF',
  800: '#2F3A45'
};

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 36px;
  padding: 8px;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')`
  position: absolute;
  display: block;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  top: 3px;
  left: 4px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(58 53 65 / 20%) 0px 2px 1px -1px, rgb(58 53 65 / 14%) 0px 1px 1px 0px, rgb(58 53 65 / 12%) 0px 1px 3px 0px;
  padding:5px;
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: url('../../../../close.jpg')center center no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(24px);

    &::before {
      border-radius: 8px;
      background-color: #fff;
      background: url('../../../../tick.png')center center no-repeat;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
   }
  }
`;

const SwitchTrack = styled('span')(
  ({ theme }) => `
  background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[400]};
  border-radius: 25px;
  width: 100%;
  height: 100%;
  display: block;
`
);
function MUISwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible
  };

  return (
    // @ts-ignore
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput {...getInputProps()} aria-label="Demo switch" />
    </SwitchRoot>
  );
}

MUISwitch.propTypes = {
  name: PropTypes.string
};

export default function RIGSwitch({ name, isDisabled, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormGroup>
          <FormControlLabel control={<MUISwitch {...field} checked={field.value} disabled={isDisabled} />} label={label} />
        </FormGroup>
      )}
    />
  );
}