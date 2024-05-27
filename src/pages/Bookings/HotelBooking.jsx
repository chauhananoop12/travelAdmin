import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
} from '@mui/x-data-grid';
import { getPackages } from 'api/packages';
import { busBooking, hotelBooking } from 'api/booking';


function CustomToolbar() {
    return (
        //@ts-ignore
        <GridToolbarContainer>
            <GridToolbarFilterButton translate={undefined} />
            <GridToolbarExport touchRippleRef={undefined} translate={undefined} />
        </GridToolbarContainer>
    );
}
const EnhancedTableToolbar = (props) => {
    const navigate = useNavigate();

    return (
        //Tool Bar Starts here to add button functions like bulk action download etc//
        //@ts-ignore
        <Toolbar
            sx={{
                p: '0 !important',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                alignItems: 'center'
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h4"
                id="tableTitle"
                component="div"
            >
                Hotel Booking List
            </Typography>
            {/* <Button
                variant="outlined"
                color="primary"
                sx={{ width: '15%' }}
                onClick={() => {
                    navigate('/packageForm');
                }}
                endIcon={< AddIcon />}
            >
                Add New
            </Button> */}
        </Toolbar>
    );
};

export default function HotelBooking() {
    const navigate = useNavigate();
    const [row, setRow] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const allCategories = async () => {
        const resp = await hotelBooking()
        console.log(resp)
        setCategoryList(resp?.data)
    }
    useEffect(() => {
        allCategories()
    }, [])

    const renderFeeStatus = (params) => {
        const label = { inputProps: { 'aria-label': 'Switch demo' } };
        return (
            // @ts-ignore
            !params.row.isDisabled ? (
                <Chip color="success" size="small" icon={<CheckCircleOutlineIcon />} />
            ) : (
                <Chip color="error" size="small" icon={<WarningAmberIcon />} />
            )
        );
    };


    const actionButton = (params) => {
        return (
            <div>
                <IconButton
                    aria-label="edit"
                    onClick={() => {
                        console.log(params.row._id);
                        navigate(`/categoryForm/${params.row._id}`);
                    }}
                >
                    <EditIcon color="primary" />
                </IconButton>
            </div>
        );
    };

    const image = (params) => {
        console.log(params.row?.images[0])
        return (
            <div>
                <img src={params.row?.images[0]} alt="im" style={{ width: "50px", height: "40px", objectFit: "contain" }} />
            </div>
        );
    }

    const dataList = {
        columns: [
            { field: 'id', hide: true },
            { field: 'index', headerName: 'S.No', width: 100, editable: false },


            {
                field: 'checkIn',
                headerName: 'checkIn',
                width: 200,
                editable: false
            },
            {
                field: 'checkOut',
                headerName: 'checkOut',
                width: 200,
                editable: false
            },
            {
                field: 'childCount',
                headerName: 'Chlid Count',
                width: 200,
                editable: false
            },
            {
                field: 'adultCount',
                headerName: 'Adult Count',
                width: 200,
                editable: false
            }, {
                field: 'guestCount',
                headerName: 'guestCount',
                width: 200,
                editable: false
            },
            {
                field: 'roomCount',
                headerName: 'roomCount',
                width: 200,
                editable: false
            },
            {
                field: 'userName',
                headerName: 'User Name',
                width: 300,
                editable: false
            },
            {
                field: 'userMobile',
                headerName: 'User Mobile',
                width: 300,
                editable: false
            },


        ],
        rows: categoryList.map((role, index) => {
            return {
                ...role,
                id: role._id,
                index: index + 1,
                checkIn: new Date(role?.checkIn).toLocaleDateString(),
                checkOut: new Date(role?.checkOut).toLocaleDateString(),
                userName: role?.userDetails?.name,
                userMobile: role?.userDetails?.mobile,



            };
        }),
        initialState: { columns: { columnVisibilityModel: { id: false } } }
    };

    return (
        <div className="App">
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ height: '80vh', width: '100%', p: 2, marginTop: 6 }}>
                    <EnhancedTableToolbar numSelected={0} />
                    <DataGrid
                        sx={{
                            height: '80%',
                            width: '100%'
                        }}
                        {...dataList}
                        components={{
                            Toolbar: CustomToolbar
                        }}
                    />
                </Paper>
            </Box>
        </div>
    );
}