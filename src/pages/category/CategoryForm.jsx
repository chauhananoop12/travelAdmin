import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Grid,
    Typography,
    Paper,
    Box
} from '@mui/material';
import FormProvider from 'components/FormComponent/FormProvider';
import { LoadingButton } from '@mui/lab';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RIGTextField from 'components/FormComponent/TextField';
import { useForm } from 'react-hook-form';
import { getCategoryById, postCategory, updateCategory } from 'api/category';

const CategoryForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState([]);

    let isEdit = false;
    if (params.id) {
        isEdit = true;
    }

    const getCategoryId = async (id) => {
        const resp = await getCategoryById(id);
        setData(resp.data);
    }

    useEffect(() => {
        if (isEdit) {
            getCategoryId(params.id)
        }
    }, [])

    const RoomSchema = Yup.object().shape({
        _id: Yup.string(),
        name: Yup.string().required('Name is required'),
    });

    const defaultValues = {
        name: data.name || '',
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

    useEffect(() => {
        if (isEdit && data) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, data]);

    const onSubmit = async (data) => {
        if (isEdit) {
            const resp = await updateCategory(params.id, data);
            if (resp.code === 202) {
                navigate('/categoryList', { replace: true });
            }
        }
        else {
            const resp = await postCategory(data);
            if (resp.code === 201) {
                navigate('/categoryList', { replace: true });
            }
        }
    }

    return (
        <Paper sx={{ p: 4, marginTop: 6 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
                {isEdit ? 'Edit Amenities' : 'Add Amenities'}
            </Typography>
            <Box
                sx={{
                    width: '50%',
                    mt: 3
                    // margin: '0 auto'
                }}
            >
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <RIGTextField
                                fullWidth
                                sx={{
                                    marginBottom: 2,
                                }}
                                name="name"
                                label="Name"
                            ></RIGTextField>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                                {isEdit ? 'Update' : 'Save'}
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </FormProvider>
            </Box>
        </Paper>
    );
};

export default CategoryForm;

