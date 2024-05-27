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
import { getPackagesById } from 'api/packages';
import MultipleSelect from 'components/FormComponent/MultipleSelect'

const PackageForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState([]);

    let isEdit = false;
    if (params.id) {
        isEdit = true;
    }

    const getCategoryId = async (id) => {
        const resp = await getPackagesById(id);
        setData(resp.data);
    }

    useEffect(() => {
        if (isEdit) {
            getCategoryId(params.id)
        }
    }, [])

    const RoomSchema = Yup.object().shape({
        _id: Yup.string(),
        city: Yup.string().required('City is required'),
        dayCount: Yup.number().required('Day Counts is required'),
        nightCount: Yup.number().required('Night Counts is required'),
        price: Yup.number().required('Price is required'),
        type: Yup.string().required('Type is required'),
        hotelType: Yup.string().required('Hotel Type is required'),
        modeOfTransport: Yup.string().required('Mode of transport is required'),
        activities: Yup.array().required('activities is required'),
        siteSeeing: Yup.array().required('siteSeeing is required'),
    });

    const defaultValues = {
        city: data.city || '',
        dayCount: data.dayCount || 0,
        nightCount: data.nightCount || 0,
        price: data.price || 0,
        type: data.type || '',
        hotelType: data.hotelType || '',
        modeOfTransport: data.modeOfTransport || '',
        activities: data.activities || [],
        siteSeeing: data.siteSeeing || []

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

    const categories = [{
        lable: '3 Star', value: '3 Star'
    },
    {
        lable: '4 Star', value: '4 Star'
    }, {
        lable: '5 Star', value: '5 Star'
    },
    ]
    const sites = [{
        lable: 'Beach', value: 'beach'
    },
    {
        lable: 'Mountain', value: '4 Star'
    }
    ]

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
                                name="city"
                                label="City"
                            ></RIGTextField>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <RIGTextField
                                fullWidth
                                type={'number'}
                                sx={{
                                    marginBottom: 2,
                                }}
                                name="dayCount"
                                label="Day Count"
                            ></RIGTextField>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <RIGTextField
                                fullWidth
                                type='number'
                                sx={{
                                    marginBottom: 2,
                                }}
                                name="nightCount"
                                label="Night Count"
                            ></RIGTextField>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <RIGTextField
                                fullWidth
                                type='number'
                                sx={{
                                    marginBottom: 2,
                                }}
                                name="price"
                                label="Price"
                            ></RIGTextField>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <MultipleSelect
                                size='small'
                                name="activities"
                                label="Hotel Type"
                                InputLabelProps={{ shrink: true }}
                                options={categories}
                            >
                            </MultipleSelect>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <MultipleSelect
                                size='small'
                                name="siteSeeing"
                                label="Site Seeing"
                                InputLabelProps={{ shrink: true }}
                                options={sites}
                            >
                            </MultipleSelect>
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

export default PackageForm;

