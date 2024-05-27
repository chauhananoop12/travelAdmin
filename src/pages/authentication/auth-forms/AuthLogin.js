import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
// material-ui
import {

    Typography,
    InputAdornment,
    IconButton

} from '@mui/material';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// third party

import { Formik } from 'formik';
import FormProvider from 'components/FormComponent/FormProvider';
import { LoadingButton } from '@mui/lab';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RIGTextField from 'components/FormComponent/TextField';
import { useForm } from 'react-hook-form'
import { login } from 'api/login';


const AuthLogin = () => {
    const navigate = useNavigate()
    // const [file, setFile] = useState([]);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const RoomSchema = Yup.object().shape({
        _id: Yup.string(),
        userName: Yup.string().required('userName is required'),
        password: Yup.string().required('Password is required')

    });

    const defaultValues = {
        userName: '',
        password: ''

    };

    const methods = useForm({
        resolver: yupResolver(RoomSchema),
        defaultValues
    });

    const {
        reset,
        watch,
        setError,
        handleSubmit,
        setValue,
        formState: { isSubmitting, errors }
    } = methods;

    const values = watch();
    let isEdit = false
    // useEffect(() => {
    //     if (isEdit && data) {
    //         reset(defaultValues);
    //     }
    //     if (!isEdit) {
    //         reset(defaultValues);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isEdit, data]);

    const onSubmit = async (data) => {
        const resp = await login(data)
        if (resp.code === 200) {
            console.log(resp)
            localStorage.setItem('token', resp?.data)
            // localStorage.setItem('userInfo', JSON.stringify(resp?.data?.admin))
            alert(resp?.message)
            navigate('/dashboard/default')
        } else {
            alert(resp?.message)
        }
    }





    return (
        <>

            <div>
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <RIGTextField
                        sx={{
                            marginBottom: 2,
                        }}
                        size="small"
                        name="userName"
                        label="User Name"
                    ></RIGTextField>
                    <RIGTextField
                        sx={{
                            marginBottom: 2,
                        }}
                        size="small"
                        name="password"
                        label="Password"
                        placeholder="******"
                        type={showPassword ? 'text' : 'password'}
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
                    ></RIGTextField>




                    <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                        Login
                    </LoadingButton>

                </FormProvider>
            </div >
        </>
    );
};

export default AuthLogin;


