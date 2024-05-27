import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    CardHeader,
    Divider,
    Paper,
    Stack,
    TextField,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
// import { getVendorById } from '../../api/vendorApi';
import AddIcon from '@mui/icons-material/Add';
import { changePassword } from '../../api/forgotPassword';
import { useSnackbar } from 'notistack';

export default function ChangePassword() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        // oldPassword: '',
        password: ''
    });

    const handleChange = useCallback((event) => {
        setValues((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }, []);

    const changeVendorPassword = async () => {
        const resp = await changePassword(values);
        console.log('resp', resp);
        if (resp.code === 200) {
            enqueueSnackbar('Password Updated Successfully', { variant: 'success' });
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login', { replace: true });
        } else {
            enqueueSnackbar(resp.message, { variant: 'error' });
        }
    };

    return (
        <Paper
            sx={{
                backgroundColor: '#fff',
                minHeight: '100%'
            }}
        >
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 2
                }}
            >
                <Container maxWidth="lg">
                    <Stack spacing={3}>
                        <div>
                            <Typography variant="h4">Change Password</Typography>
                        </div>
                        <div>
                            <Grid container spacing={3}>
                                <Grid xs={12} md={6} lg={8}>
                                    <form autoComplete="off" noValidate>
                                        <Card>
                                            <CardContent sx={{ pt: 0 }}>
                                                <Box sx={{ m: -1.5 }}>
                                                    <Grid container spacing={3}>
                                                        {/* <Grid xs={12} md={6}>
                                                            <TextField
                                                                fullWidth
                                                                helperText="Please specify the first name"
                                                                label="First name"
                                                                name="name"
                                                                onChange={handleChange}
                                                                required
                                                                value={values.name}
                                                            />
                                                        </Grid>
                                                        <Grid xs={12} md={6}>
                                                            <TextField
                                                                fullWidth
                                                                label="Last name"
                                                                name="lastName"
                                                                onChange={handleChange}
                                                                required
                                                                value={values.lastName}
                                                            />
                                                        </Grid> */}

                                                        {/* <Grid xs={12} md={6}>
                                                            <TextField
                                                                fullWidth
                                                                label="Old Password"
                                                                name="oldPassword"
                                                                onChange={handleChange}
                                                                type="password"
                                                                required
                                                                value={values.oldPassword}
                                                            />
                                                        </Grid> */}

                                                        <Grid xs={12} md={6}>
                                                            <TextField
                                                                fullWidth
                                                                label="New Password"
                                                                name="password"
                                                                onChange={handleChange}
                                                                required
                                                                value={values.password}
                                                            />
                                                        </Grid>
                                                        {/* <Grid xs={12} md={6}>
                                                            <TextField
                                                                fullWidth
                                                                label="Country"
                                                                name="country"
                                                                onChange={handleChange}
                                                                required
                                                                value={values.country}
                                                            />
                                                        </Grid>
                                                        <Grid xs={12} md={6}>
                                                            <TextField
                                                                fullWidth
                                                                label="Select State"
                                                                name="state"
                                                                onChange={handleChange}
                                                                required
                                                                value={values.state}
                                                            >
                                                                
                                                            </TextField>
                                                        </Grid> */}
                                                    </Grid>
                                                </Box>
                                            </CardContent>
                                            <Divider />
                                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                                <Button variant="contained" onClick={changeVendorPassword}>
                                                    Change Password
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </form>
                                </Grid>
                            </Grid>
                        </div>
                    </Stack>
                </Container>
            </Box>
        </Paper>
    );
}

///

///////
