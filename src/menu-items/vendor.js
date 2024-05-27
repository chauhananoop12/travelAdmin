// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    PlusCircleOutlined,
    MedicineBoxOutlined,
    ExperimentOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    PlusCircleOutlined,
    MedicineBoxOutlined,
    ExperimentOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const vendor = {
    id: 'vendor',
    title: 'Vendor',
    type: 'group',
    children: [

        {
            id: 'vendor-Hospital',
            title: 'Hospital',
            type: 'item',
            url: '/vendorHospital',
            icon: 'emojione:hospital'
        },
        {
            id: 'vendor-Pathology',
            title: 'Pathology',
            type: 'item',
            url: '/vendorPathology',
            icon: 'medical-icon:i-pathology'
        },
        {
            id: 'vendor-Clinic',
            title: 'Clinic',
            type: 'item',
            url: '/vendorClinic',
            icon: 'fa-solid:clinic-medical'
        },
        {
            id: 'vendor-Ayurveda',
            title: 'Ayurveda',
            type: 'item',
            url: '/vendorAyurveda',
            icon: 'mdi:flower-lotus'
        },
        {
            id: 'vendor-Bank',
            title: 'Blood Bank',
            type: 'item',
            url: '/vendorBloodBank',
            icon: 'maki:blood-bank'
        }

    ]
};

export default vendor;
