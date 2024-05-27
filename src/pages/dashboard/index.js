import { Grid, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import PendingIcon from '@mui/icons-material/Pending';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ScienceIcon from '@mui/icons-material/Science';
import DoneIcon from '@mui/icons-material/Done';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PersonIcon from '@mui/icons-material/Person';
import './dashboard.css';
// import { getAllData } from 'api/dashboardApi';
import { red, green, purple, blue, grey, pink, deepPurple } from '@mui/material/colors';

const DashboardDefault = () => {
    const [dashboardData, setDashboardData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getAllData();
            setDashboardData(data);
            console.log(data);
        })();
    }, []);

    return (
        <Grid container className="card_sec" rowSpacing={3.0} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    Vendor
                </Typography>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: pink[100] }}>
                    <Box className="icon1" sx={{ background: pink[700] }}>
                        <LocalHospitalIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalOnBoardedHospitals}</h3>
                    <Typography sx={{ pt: 2 }}>Total Onboard Hospitals</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: green[100] }}>
                    <Box className="icon1" sx={{ background: green[700] }}>
                        <LocalPharmacyIcon />
                    </Box>
                    <h3>{dashboardData?.data?.onBoardedClinics}</h3>
                    <Typography sx={{ pt: 2 }}>Onboard Clinics</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: blue[100] }}>
                    <Box className="icon1" sx={{ background: blue[700] }}>
                        <ScienceIcon />
                    </Box>
                    <h3>{dashboardData?.data?.onBoardedLabs}</h3>
                    <Typography sx={{ pt: 2 }}>Onboard Labs</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: purple[100] }}>
                    <Box className="icon1" sx={{ background: purple[700] }}>
                        <LocalHospitalIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalAyurvedicHospital}</h3>
                    <Typography sx={{ pt: 2 }}>Total Ayurvedic Hospitals</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: red[100] }}>
                    <Box className="icon1" sx={{ background: red[700] }}>
                        <BloodtypeIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalBloodBank}</h3>
                    <Typography sx={{ pt: 2 }}>Total BloodBank</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    Surgeries
                </Typography>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: deepPurple[100] }}>
                    <Box className="icon1" sx={{ background: deepPurple[700] }}>
                        <MedicalInformationIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalSurgeryBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Surgeries</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: green[100] }}>
                    <Box className="icon1" sx={{ background: green[700] }}>
                        <DoneIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalSurgeriesDone}</h3>
                    <Typography sx={{ pt: 2 }}>Total Surgeries Done</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: blue[100] }}>
                    <Box className="icon1" sx={{ background: blue[700] }}>
                        <BookmarkAddedIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalBookedSurgeries}</h3>
                    <Typography sx={{ pt: 2 }}>Total Booked Surgeries</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: grey[200] }}>
                    <Box className="icon1" sx={{ background: grey[700] }}>
                        <AutorenewIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalNoResponseSurgeryBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>NoResponse Surgeries</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: purple[100] }}>
                    <Box className="icon1" sx={{ background: purple[700] }}>
                        <PendingIcon />
                    </Box>
                    <h3>{dashboardData?.data?.surgeriesPending}</h3>
                    <Typography sx={{ pt: 2 }}>Surgeries Pending</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec4 pinkColorLight" sx={{ p: 2 }}>
                    <Box className="icon4 pinkColor">
                        <PendingIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalInProgressSurgeryBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>InProgress Surgeries</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: red[100] }}>
                    <Box className="icon1" sx={{ background: red[700] }}>
                        <DoDisturbIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCancelledSurgeries}</h3>
                    <Typography sx={{ pt: 2 }}>Total Cancelled Surgeries</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    Lab
                </Typography>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: deepPurple[100] }}>
                    <Box className="icon1" sx={{ background: deepPurple[700] }}>
                        <MedicalInformationIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalBookLabTests}</h3>
                    <Typography sx={{ pt: 2 }}>Total Lab Tests</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: blue[100] }}>
                    <Box className="icon1" sx={{ background: blue[700] }}>
                        <BookmarkAddedIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalBookedLabBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Booked Lab Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: green[100] }}>
                    <Box className="icon1" sx={{ background: green[700] }}>
                        <DoneIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCompletedLabBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Completed Lab Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: grey[200] }}>
                    <Box className="icon1" sx={{ background: grey[700] }}>
                        <AutorenewIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalNoResponseLabBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>NoResponse Lab Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: purple[100] }}>
                    <Box className="icon1" sx={{ background: purple[700] }}>
                        <PendingIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalPendingLabTests}</h3>
                    <Typography sx={{ pt: 2 }}>Pending Lab Tests</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: red[100] }}>
                    <Box className="icon1" sx={{ background: red[700] }}>
                        <DoDisturbIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCancelledLabTests}</h3>
                    <Typography sx={{ pt: 2 }}>Total Cancelled Lab Tests</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    Clinic
                </Typography>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: deepPurple[100] }}>
                    <Box className="icon1" sx={{ background: deepPurple[700] }}>
                        <MedicalInformationIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalClinicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Clinic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: blue[100] }}>
                    <Box className="icon1" sx={{ background: blue[700] }}>
                        <BookmarkAddedIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalBookedClinicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Booked Clinic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: green[100] }}>
                    <Box className="icon1" sx={{ background: green[700] }}>
                        <DoneIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCompletedClinicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Completed Clinic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: grey[200] }}>
                    <Box className="icon1" sx={{ background: grey[700] }}>
                        <AutorenewIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalNoResponseClinicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>NoResponse Clinic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: purple[100] }}>
                    <Box className="icon1" sx={{ background: purple[700] }}>
                        <PendingIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalPendingClinicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Pending Clinic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: red[100] }}>
                    <Box className="icon1" sx={{ background: red[700] }}>
                        <DoDisturbIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCancelledClinicConsultancy}</h3>
                    <Typography sx={{ pt: 2 }}>Total Cancelled Clinic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    Ayurveda
                </Typography>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: deepPurple[100] }}>
                    <Box className="icon1" sx={{ background: deepPurple[700] }}>
                        <MedicalInformationIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalAyurvedicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Ayurvedic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: blue[100] }}>
                    <Box className="icon1" sx={{ background: blue[700] }}>
                        <BookmarkAddedIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalBookedAyurvedicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Booked Ayurvedic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: green[100] }}>
                    <Box className="icon1" sx={{ background: green[700] }}>
                        <DoneIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCompletedAyurvedicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Completed Ayurvedic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: grey[200] }}>
                    <Box className="icon1" sx={{ background: grey[700] }}>
                        <AutorenewIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalNoResponseAyurvedicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>NoResponse Ayurvedic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: purple[100] }}>
                    <Box className="icon1" sx={{ background: purple[700] }}>
                        <PendingIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalPendingAyurvedicConsultancyBookingCount}</h3>
                    <Typography sx={{ pt: 2 }}>Pending Ayurvedic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '16.6%' }}>
                <Box className="cardSec" sx={{ p: 2, background: red[100] }}>
                    <Box className="icon1" sx={{ background: red[700] }}>
                        <DoDisturbIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCancelledAyurvedicConsultancy}</h3>
                    <Typography sx={{ pt: 2 }}>Total Cancelled Ayurvedic Bookings</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    Packages
                </Typography>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: deepPurple[100] }}>
                    <Box className="icon1" sx={{ background: deepPurple[700] }}>
                        <MedicalInformationIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalPackageBookings}</h3>
                    <Typography sx={{ pt: 2 }}>Total Package Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: blue[100] }}>
                    <Box className="icon1" sx={{ background: blue[700] }}>
                        <BookmarkAddedIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalBookedPackageBookings}</h3>
                    <Typography sx={{ pt: 2 }}>Total Booked Package Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: green[100] }}>
                    <Box className="icon1" sx={{ background: green[700] }}>
                        <DoneIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCompletedPackageBookings}</h3>
                    <Typography sx={{ pt: 2 }}>Completed Package Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: purple[100] }}>
                    <Box className="icon1" sx={{ background: purple[700] }}>
                        <PendingIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalPendingPackageBookings}</h3>
                    <Typography sx={{ pt: 2 }}>Pending Package Bookings</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: red[100] }}>
                    <Box className="icon1" sx={{ background: red[700] }}>
                        <DoDisturbIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCancelledPackageBookings}</h3>
                    <Typography sx={{ pt: 2 }}>Cancelled Package Bookings</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    Vendor Leads
                </Typography>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: deepPurple[100] }}>
                    <Box className="icon1" sx={{ background: deepPurple[700] }}>
                        <PersonIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalVendorLeadsCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Vendor Leads</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                      <Box className="cardSec" sx={{ p: 2, background: blue[100] }}>
                    <Box className="icon1" sx={{ background: blue[700] }}>
                        <BookmarkAddedIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalFollowUpVendorLead}</h3>
                    <Typography sx={{ pt: 2 }}>Total Follow Ups Vendor Lead</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: green[100] }}>
                    <Box className="icon1" sx={{ background: green[700] }}>
                        <DoneIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalCompletedVendorLeadCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Completed Vendor Lead</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: purple[100] }}>
                    <Box className="icon1" sx={{ background: purple[700] }}>
                        <ScienceIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalPendingVendorLeadCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Pending Vendor Lead</Typography>
                </Box>
            </Grid>
            <Grid item sx={{ width: '20%' }}>
                <Box className="cardSec" sx={{ p: 2, background: red[100] }}>
                    <Box className="icon1" sx={{ background: red[700] }}>
                        <DoDisturbIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalRejectedVendorLeadCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total Rejected Vendor Lead</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography
                    variant="h5"
                    sx={{
                        background: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '10px',
                        mb: 2
                    }}
                >
                    User Leads
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box className="cardSec4" sx={{ p: 2 }}>
                    <Box className="icon4 purpleColor">
                        <PendingIcon />
                    </Box>
                    <h3>{dashboardData?.data?.totalUserLeadsCount}</h3>
                    <Typography sx={{ pt: 2 }}>Total User Leads</Typography>
                </Box>
            </Grid>

            <Grid item md={12}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box className="cardSec2" sx={{ p: 2 }}>
                            <Box className="icon2">
                                <LocalHospitalIcon />
                            </Box>
                            <h3>{dashboardData?.data?.totalNumberOfPatientsServed}</h3>
                            <Typography sx={{ pt: 2 }}>Total no. of. Patients Served (etc.)</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
