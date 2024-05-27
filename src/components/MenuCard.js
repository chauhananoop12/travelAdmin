import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Iconify from 'components/Iconify';
import { useTheme, alpha, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { red, green, blue, yellow, orange, grey, purple, pink } from '@mui/material/colors';
import { animate } from 'framer-motion';
import { fontWeight } from '@mui/system';
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};

// ----------------------------------------------------------------------
const MenuCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      menuItems,
      link,
      icon,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();

    const colors = [red, green, blue, yellow, orange, grey, purple, pink];
    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          transition: 'all 0.5s ease',
          borderColor: 'rgba(58, 53, 65, 0.12)',
          cursor: 'pointer',
          ':hover': {
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            borderColor: 'transparent',
            animate: {
              scale: 1.5,
              transition: {
                duration: 0.5
              }
            }

          },
          minHeight: 150,
          height: '100%',
          p: 2,
          ...sx
        }}
      >
        <CardHeader
          sx={{
            p: 0,
          }}
          avatar={
            <Avatar
              aria-label="recipe"
              sx={{
                borderRadius: '5px',
                bgcolor: colors[Math.floor(Math.random() * colors.length)][500],
                boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              }}
            >
              <Iconify
                icon={icon}
                sx={{
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                }}
              />
            </Avatar>
          }
          action={
            <FadeMenu
              menuItems={menuItems}
              onItemClick={(link) => {
                console.log(link);
              }}
            />
          }
        />
        {content &&
          <CardContent
            sx={{
              p: 0,
              paddingBottom: '0!important',
              paddingTop: 2,
            }}
          >
            {children}
          </CardContent>}
        {!content && children}
      </Card>
      // <Card
      //   ref={ref}
      //   {...others}
      //   sx={{
      //     border: border ? '1px solid' : 'none',
      //     borderColor: theme.palette.primary[200] + 25,
      //     ':hover': {
      //       boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
      //     },
      //     ...sx
      //   }}
      // >
      //   {/* card header and action */}
      //   {title && <CardHeader sx={headerSX} title={darkTitle ? <Typography variant="h4">{title}</Typography> : title} action={secondary} />}

      //   {/* content & header divider */}
      //   {title && <Divider />}

      //   {/* card content */}
      //   {content && (
      //     <CardContent sx={contentSX} className={contentClass}>
      //       {children}
      //     </CardContent>
      //   )}
      //   {!content && children}
      // </Card>
    );
  }
);

MenuCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default MenuCard;

function FadeMenu({ menuItems, onItemClick }) {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 140,
      color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0'
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 14,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5)
        },
        '&:active': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
      }
    }
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link) => {
    onItemClick(link);
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton> */}
      <StyledMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems.map((item) => (
          <MenuItem onClick={() => handleClose(item.link)}>{item.title}</MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
