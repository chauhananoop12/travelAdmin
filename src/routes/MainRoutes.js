import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { element } from 'prop-types';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const ChangePassword = Loadable(lazy(() => import('pages/changePassword/ChangePassword')));

const CategoryList = Loadable(lazy(() => import('pages/category/CategoryList')));
const CategoryListForm = Loadable(lazy(() => import('pages/category/CategoryForm')));
const PackageList = Loadable(lazy(() => import('pages/Packages/PacakgeList')));
const PackageForm = Loadable(lazy(() => import('pages/Packages/PackageForm')));
const BusBookings = Loadable(lazy(() => import('pages/Bookings/BusBookings')));
const TrainBooking = Loadable(lazy(() => import('pages/Bookings/TrainBooking')));
const FlightBooking = Loadable(lazy(() => import('pages/Bookings/FlightBooking')));
const CruiseBooking = Loadable(lazy(() => import('pages/Bookings/CruiseBooking')));
const CabBooking = Loadable(lazy(() => import('pages/Bookings/CabBooking')));
const HotelBooking = Loadable(lazy(() => import('pages/Bookings/HotelBooking')));
const PackageBooking = Loadable(lazy(() => import('pages/Bookings/PackageBooking')));
const VisaBooking = Loadable(lazy(() => import('pages/Bookings/VisaBooking')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        { path: '/', element: <DashboardDefault /> }, ///Change here for dashboard
        // { path: 'color', element: <Color /> },
        { path: 'dashboard', children: [{ path: 'default', element: <DashboardDefault /> }] },
        { path: 'sample-page', element: <SamplePage /> },
        { path: 'changePassword', element: <ChangePassword /> },
        { path: 'shadow', element: <Shadow /> },
        { path: 'typography', element: <Typography /> },
        { path: 'icons/ant', element: <AntIcons /> },
        { path: 'categoryList', element: <CategoryList /> },
        { path: 'categoryForm', element: <CategoryListForm /> },
        { path: 'categoryForm/:id', element: <CategoryListForm /> },
        { path: 'packageForm', element: <PackageForm /> },
        { path: 'packageForm/:id', element: <PackageForm /> },
        { path: 'packageList', element: <PackageList /> },
        { path: 'busBooking', element: <BusBookings /> },
        { path: 'trainBooking', element: <TrainBooking /> },
        { path: 'flightBooking', element: <FlightBooking /> },
        { path: 'visaBooking', element: <VisaBooking /> },
        { path: 'hotelBooking', element: <HotelBooking /> },
        { path: 'cruiseBooking', element: <CruiseBooking /> },
        { path: 'cabBooking', element: <CabBooking /> },
        { path: 'packageBooking', element: <PackageBooking /> },






    ]
};

export default MainRoutes;
