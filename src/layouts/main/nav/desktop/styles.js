// @mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
// theme
import { paper } from 'src/theme/css';
//
import { HEADER } from '../../../config-layout';

// ----------------------------------------------------------------------

export const ListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'offsetTop' && prop !== 'subItem',
})(({ active, open, offsetTop, subItem, theme }) => {
  const dotActive = {
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 6,
    height: 6,
    left: -14,
    opacity: 0.48,
    backgroundColor: 'currentColor',
  };

  return {
    ...theme.typography.subtitle2,
    padding: 0,
    height: '100%',
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      opacity: 0.48,
      backgroundColor: 'transparent',
    },
    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }),
    // offsetTop
    ...(offsetTop && {
      color: theme.palette.text.primary,
    }),
    // Active
    ...(active && {
      color: theme.palette.primary.main,
      '&::before': dotActive,
    }),
    // Active sub item
    ...(active &&
      subItem && {
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        '&::before': {
          ...dotActive,
          color: theme.palette.primary.main,
        },
      }),
    // Open
    ...(open && {
      opacity: 0.48,
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  ...paper({ theme }),
  position: 'fixed',
  left: 0,
  right: 0,
  top: HEADER.H_DESKTOP,
  height: '70%',
  zIndex: theme.zIndex.modal,
  overflow: 'hidden',
  background: '#FDF8F3',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  margin: 0,
  padding: 0,borderRadius: 0,  // Add this line
  '&, & *': {      // This ensures all children also have no border radius
    borderRadius: '0 !important',
  },
  '& > .MuiPaper-root': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    background: 'transparent',
    boxShadow: 'none',
    maxWidth: '100%',
    margin: 0,
    padding: 0,
  },
  '& > *': {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    padding: theme.spacing(4, 12), // Increased horizontal padding
    background: '#FDF8F3',
    boxShadow: 'none',
    borderRadius: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  padding: 0,
  fontSize: 11,
  color: theme.palette.text.primary,
}));
