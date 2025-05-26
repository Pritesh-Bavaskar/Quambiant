import React from 'react';
import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
//
import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ offsetTop, data, onNavHover }) {
  const [openMenu, setOpenMenu] = React.useState(null);

  const handleMenuToggle = (title, isOpen) => {
    setOpenMenu(isOpen ? title : null);
    onNavHover?.(isOpen);
  };

  return (
    <Stack component="nav" direction="row" spacing={5} sx={{ mr: 2.5, height: 1 }}>
      {data.map((link) => (
        <NavList 
          key={link.title} 
          item={link} 
          offsetTop={offsetTop} 
          onNavHover={onNavHover}
          isAnyMenuOpen={!!openMenu}
          onMenuToggle={handleMenuToggle}
        />
      ))}
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  offsetTop: PropTypes.bool,
  onNavHover: PropTypes.func,
};
