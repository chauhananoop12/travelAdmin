// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    FileDoneOutlined,
    SolutionOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    FileDoneOutlined,
    SolutionOutlined,
    UsergroupAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const user = {
    id: 'user',
    title: 'User',
    type: 'group',
    children: [
        {
            id: 'user-category',
            title: 'User Management',
            type: 'item',
            url: '/user',
            icon: 'fa6-solid:user-gear'
        },
        {
            id: 'user-history',
            title: 'User History',
            type: 'item',
            url: '/userHistory',
            icon: 'solar:user-id-outline'
        },
        {
            id: 'user-lead',
            title: 'User Lead',
            type: 'item',
            url: '/userLead',
            icon: 'mdi:leads'
        }
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

export default user;