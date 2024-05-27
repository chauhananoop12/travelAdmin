import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { forgotPassword } from 'api/forgotPassword';
import { generateOtp } from 'api/forgotPassword';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthForgetPassword = () => {
    const [checked, setChecked] = React.useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    // phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    return (
        <>
            <Formik
                initialValues={{
                    mobile: '',
                    otp: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    mobile: Yup.string().matches(phoneRegExp,'Mobile Number is not valid').min(10).required('Mobile is required')
                        ,
                    otp: Yup.number()
                    .required('OTP is required')
                    ,
                    password: Yup.string()
                    .required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                
                    console.log(values)
                    
                    try {
                        setTimeout(async () => {
                            //change values.otp to number
                            values.otp = parseInt(values.otp);
                            const resp = await forgotPassword(values);
                            console.log(resp);
                            if (resp.code === 200) {
                                enqueueSnackbar('Password Changed!', {
                                    variant: 'success'
                                });
                                console.log(resp);
                                localStorage.setItem('token', resp.data.token);
                                localStorage.setItem('user', JSON.stringify(resp.data));
                                navigate('/login', { replace: true });
                            } else {
                                enqueueSnackbar(resp.message, { variant: 'error', duration: 2000 });
                            }

                            setStatus({ success: false });
                            setSubmitting(false);
                        }, 2000);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
                    return (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="email-login">Mobile</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="string"
                                            value={values.mobile}
                                            name="mobile"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter Mobile Number"
                                            fullWidth
                                            error={Boolean(touched.email && errors.email)}
                                        />
                                        {touched.email && errors.email && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.email}
                                            </FormHelperText>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            onClick={async () => {
                                              console.log(values)
                                                try {
                                                    const resp = await generateOtp({ mobile: values.mobile });
                                                    console.log(resp);
                                                    if (resp.code === 201) {
                                                        enqueueSnackbar('OTP Sent!', {
                                                            variant: 'success'
                                                        });
                                                    } else {
                                                        enqueueSnackbar(resp.message, {
                                                            variant: 'error'
                                                        });
                                                    }
                                                } catch (err) {
                                                    console.log(err);
                                                }
                                            }}
                                        >
                                            Send OTP
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    {' '}
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-login">OTP</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="otp-login"
                                            type={'text'}
                                            value={values.otp}
                                            name="otp"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter OTP"
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-login">Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="-password-login"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        size="large"
                                                    >
                                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            placeholder="Enter password"
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sx={{ mt: -1 }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                        <Link variant="h6" component={RouterLink} to="" color="text.primary">
                                            Forgot Password?
                                        </Link>
                                    </Stack>
                                </Grid>
                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Login
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
};

export default AuthForgetPassword;
