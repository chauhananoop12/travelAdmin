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

const packages = {
    id: 'Package',
    title: 'Package',
    type: 'group',
    children: [
        {
            id: 'Package-management',
            title: 'Package',
            type: 'item',
            url: '/packageList',
            icon: 'mdi:photo-library'
        },

    ]
};

export default packages;