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

const category = {
    id: 'Amenities',
    title: 'Amenities',
    type: 'group',
    children: [
        {
            id: 'Amenities-management',
            title: 'Amenities',
            type: 'item',
            url: '/categoryList',
            icon: 'mdi:photo-library'
        },

    ]
};

export default category;