import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
// project import
import { activeItem } from 'store/reducers/menu';

import NotificationComponent from 'components/NotificationSideBar';
// import NotificationComponentLab from 'components/NotificationSideBarLabs';
// import NotificationComponentClinic from 'components/NotificationSideBarClinic';
// import NotificationComponentAyurveda from 'components/NotificationSideBarAyurveda';
// import NotificationComponentLeads from 'components/NotificationSideBarLeads';
// import NotificationComponentPackages from 'components/NotificationSideBarPackage';
// import NotificationComponentAyurvedaVendor from 'components/NotificationSideBarAyurvedaVendor';
// import NotificationComponentLabsVendor from 'components/NotificationSideBarLabsVendor';
// import NotificationComponentHospital from 'components/NotificationSideBarHospital';
// import NotificationComponentUserLead from 'components/NotificationSideBarUserLead';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const { drawerOpen, openItem } = menu;

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    const itemHandler = (id) => {
        dispatch(activeItem({ openItem: [id] }));
    };

    // const Icon = item.icon;

    const itemIcon = item.icon ? <Icon icon={item.icon} style={{ fontSize: drawerOpen ? '1.25rem' : '1.25rem' }} /> : false;

    const isSelected = openItem.findIndex((id) => id === item.id) > -1;

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch(activeItem({ openItem: [item.id] }));
        }
        // eslint-disable-next-line
    }, []);

    const textColor = 'text.primary';
    const iconSelectedColor = 'primary.main';

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            onClick={() => itemHandler(item.id)}
            selected={isSelected}
            sx={{
                zIndex: 1201,
                pl: drawerOpen ? `${level * 28}px` : 1.5,
                py: !drawerOpen && level === 1 ? 1.25 : 1,
                ...(drawerOpen && {
                    '&:hover': {
                        bgcolor: 'primary.lighter'
                    },
                    '&.Mui-selected': {
                        bgcolor: 'primary.lighter',
                        borderRight: `2px solid ${theme.palette.primary.main}`,
                        color: iconSelectedColor,
                        '&:hover': {
                            color: iconSelectedColor,
                            bgcolor: 'primary.lighter'
                        }
                    }
                }),
                ...(!drawerOpen && {
                    '&:hover': {
                        bgcolor: 'transparent'
                    },
                    '&.Mui-selected': {
                        '&:hover': {
                            bgcolor: 'transparent'
                        },
                        bgcolor: 'transparent'
                    }
                })
            }}
        >
            {itemIcon && (
                <ListItemIcon
                    sx={{
                        minWidth: 28,
                        color: isSelected ? iconSelectedColor : textColor,
                        ...(!drawerOpen && {
                            borderRadius: 1.5,
                            width: 36,
                            height: 36,
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                                bgcolor: 'secondary.lighter'
                            }
                        }),
                        ...(!drawerOpen &&
                            isSelected && {
                            bgcolor: 'primary.lighter',
                            '&:hover': {
                                bgcolor: 'primary.lighter'
                            }
                        })
                    }}
                >
                    {itemIcon} {item.id === 'Surgery-Bookings' && <NotificationComponent />}
                    {/* {item.id === 'Lab-Booking' && <NotificationComponentLab />}
                    {item.id === 'Clinic-Booking' && <NotificationComponentClinic />}
                    {item.id === 'Treatment-Booking' && <NotificationComponentAyurveda />}
                    {item.id === 'Leads-category' && <NotificationComponentLeads />}
                    {item.id === 'Package-booking' && <NotificationComponentPackages />}
                    {item.id === 'Pending-Package-booking' && <NotificationComponentPackages />}
                    {item.id === 'vendor-Ayurveda' && <NotificationComponentAyurvedaVendor />}
                    {item.id === 'vendor-Pathology' && <NotificationComponentLabsVendor />}
                    {item.id === 'vendor-Hospital' && <NotificationComponentHospital />}
                    {item.id === 'Surgery-Bookings-Pending' && <NotificationComponent />}
                    {item.id === 'Lab-Booking-Pending' && <NotificationComponentLab />}
                    {item.id === 'Clinic-Booking-Pending' && <NotificationComponentClinic />}
                    {item.id === 'Treatment-Booking-Pending' && <NotificationComponentAyurveda />}
                    {item.id === 'user-lead' && <NotificationComponentUserLead />} */}


                </ListItemIcon>
            )}
            {(drawerOpen || (!drawerOpen && level !== 1)) && (
                <ListItemText
                    primary={
                        <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                            {item.title}
                        </Typography>
                    }
                />
            )}
            {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )}
        </ListItemButton>
    );
};


NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
