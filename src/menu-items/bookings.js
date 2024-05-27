// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    AliyunOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    AliyunOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const bookings = {
    id: 'Bookings',
    title: 'Bookings',
    type: 'group',
    children: [
        {
            id: 'BusBooking-management',
            title: 'Bus-Booking',
            type: 'item',
            url: '/busBooking',
            icon: 'mdi:photo-library'
        },
        {
            id: 'CabBooking-management',
            title: 'Cab-Booking',
            type: 'item',
            url: '/cabBooking',
            icon: 'mdi:photo-library'
        },
        {
            id: 'CruiseBooking-management',
            title: 'Cruise-Booking',
            type: 'item',
            url: '/cruiseBooking',
            icon: 'mdi:photo-library'
        },

        {
            id: 'FlightBooking-management',
            title: 'Flight-Booking',
            type: 'item',
            url: '/flightBooking',
            icon: 'mdi:photo-library'
        },

        {
            id: 'HotelBooking-management',
            title: 'Hotel-Booking',
            type: 'item',
            url: '/hotelBooking',
            icon: 'mdi:photo-library'
        },
        {
            id: 'PackageBooking-management',
            title: 'Package-Booking',
            type: 'item',
            url: '/packageBooking',
            icon: 'mdi:photo-library'
        },
        {
            id: 'TrainBooking-management',
            title: 'Train-Booking',
            type: 'item',
            url: '/trainBooking',
            icon: 'mdi:photo-library'
        },
        {
            id: 'VisaBooking-management',
            title: 'Visa-Booking',
            type: 'item',
            url: '/visaBooking',
            icon: 'mdi:photo-library'
        },

    ]
};

export default bookings;