import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
// import AuthForgetPassword from './auth-forms/ForgetPassword';
import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

const ForgetPassword = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Forgot Password</Typography>
                   
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthForgetPassword />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default ForgetPassword;
