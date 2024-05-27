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

const banner = {
    id: 'banner',
    title: 'Banners',
    type: 'group',
    children: [
        {
            id: 'banner-management',
            title: 'Banner',
            type: 'item',
            url: '/bannerList',
            icon: 'mdi:photo-library'
        },
        // {
        //     id: 'surgery',
        //     title: 'Surgery',
        //     type: 'item',
        //     url: '/surgery',
        //     icon: icons.BgColorsOutlined
        // },
        // {
        //     id: 'surgery-attribute',
        //     title: 'Surgery Attribute',
        //     type: 'item',
        //     url: '/surgeryAttribute',
        //     icon: icons.BarcodeOutlined
        // }
    ]
};

export default banner;