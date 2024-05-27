import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

// ================================|| LOGIN ||================================ //

const Login = () => {
    const navigate = useNavigate()
    return <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Login</Typography>

                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthLogin />
            </Grid>
            {/* <div
            onClick={()=>{
                navigate('/register')
            }}
            >
                <span>Don't have an account ? SIGNUP</span>
            </div> */}

        </Grid>
    </AuthWrapper>
};

export default Login;
