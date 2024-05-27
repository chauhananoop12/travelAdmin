import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
// ----------------------------------------------------------------------

Header.propTypes = {
  links: PropTypes.array,
  action: PropTypes.node,
  heading: PropTypes.string.isRequired,
  moreLink: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sx: PropTypes.object,
};

export default function Header({ links, action, heading, moreLink = '' || [], sx, ...other }) {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          padding: '5px 0 5px 10px',
          margin: '0 0 20px 0!important',
          borderLeft: '5px solid #fc7720',
          color: 'rgba(58, 53, 65, 0.87)',
        }}
      >
        School Operations
      </Typography>
    </Box>
  );
}
