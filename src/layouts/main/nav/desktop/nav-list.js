import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Portal from '@mui/material/Portal';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { usePathname } from 'src/routes/hook';
import { useActiveLink } from 'src/routes/hook/use-active-link';
//
import { NavItem, NavItemDashboard } from './nav-item';
import { StyledSubheader, StyledMenu } from './styles';

// ----------------------------------------------------------------------

export default function NavList({ item, offsetTop, onNavHover, isAnyMenuOpen, onMenuToggle }) {
  const pathname = usePathname();

  const nav = useBoolean();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { path, children } = item;

  // Close menu on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        nav.onFalse();
        onNavHover?.(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = useActiveLink(path, false);

  const externalLink = path.includes('http');

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
      onMenuToggle?.(item.title, true);
    }
  };

  const handleCloseMenu = () => {
    if (nav.value) {
      nav.onFalse();
      onMenuToggle?.(item.title, false);
    }
  };

  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active || nav.value}
        open={nav.value}
        externalLink={externalLink}
        isAnyMenuOpen={isAnyMenuOpen}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        aria-expanded={nav.value}
      />

      {!!children && nav.value && !isScrolled && (
        // <Portal>
        <Fade in={nav.value}>
          <StyledMenu
            onMouseEnter={handleOpenMenu}
            onMouseLeave={handleCloseMenu}
            sx={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {children.map((list, index) => {
              // Check if this is the first item in the children array
              if (index === 0) {
                // For the first item, pass the mainTitle and mainSubtitle
                return (
                  <NavSubList
                    key="projects"
                    items={list.items}
                    onClose={handleCloseMenu}
                    mainTitle={list.mainTitle}
                    mainSubtitle={list.mainSubtitle}
                  />
                );
              }

              // For other items, just render them without the title/subtitle
              return (
                <NavSubList
                  key={list.subheader || `item-${index}`}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === 'Dashboard'}
                  onClose={handleCloseMenu}
                />
              );
            })}
          </StyledMenu>
        </Fade>
        // </Portal>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
  onNavHover: PropTypes.func,
  isAnyMenuOpen: PropTypes.bool,
  onMenuToggle: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavSubList({ items, isDashboard, subheader, onClose, mainTitle, mainSubtitle }) {
  const pathname = usePathname();
  const theme = useTheme();

  // Ensure we have items before rendering
  if (!items || !Array.isArray(items)) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        margin: 0,
        padding: theme.spacing(4, 2),
        [theme.breakpoints.up('lg')]: {
          padding: theme.spacing(4, 6),
          flexDirection: 'row',
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          [theme.breakpoints.up('lg')]: {
            maxWidth: '70%',
            paddingRight: 4,
          },
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'left', width: '100%' }}>
          <Typography
            sx={{
              mt: 2,
              mb: 4,
              color: '#000000',
              fontWeight: '500',
              fontFamily: 'Satoshi Variable',
              fontSize: '42px',
            }}
          >
            {mainTitle}
          </Typography>
          <Typography
            sx={{
              color: '#666666',
              mb: 1,
              fontFamily: 'Satoshi Variable',
              fontSize: '18px',
              fontWeight: '500',
            }}
          >
            {mainSubtitle}
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={3}
          alignItems="stretch"
          sx={{
            width: '100%',
            maxWidth: '100%',
            margin: 0,
            flexWrap: 'nowrap',
            gap: 3,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none', // For Firefox
            '&::-webkit-scrollbar': {
              display: 'none', // For Chrome, Safari, and Opera
            },
            '& > *': {
              flex: '0 0 auto',
              width: 280,
              minWidth: 240, // Minimum width before scrolling
              [theme.breakpoints.down('md')]: {
                width: 260,
                minWidth: 220,
              },
            },
          }}
        >
          {subheader ? <StyledSubheader disableSticky>{subheader}</StyledSubheader> : null}
          {items.map((item) =>
            isDashboard ? (
              <NavItemDashboard key={item.title} item={item} onClick={onClose} />
            ) : (
              <NavItem
                subItem
                key={item.title}
                item={item}
                active={pathname === `${item.path}/`}
                onClick={onClose}
              />
            )
          )}
        </Stack>
      </Box>

      {/* Spotlight Image */}
      <Box
        sx={{
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            display: 'block',
            width: '30%',
            height: '100%',
            borderRadius: 0,
            overflow: 'hidden',
            position: 'relative',
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 0,
            },
          },
        }}
      >
        <img src="/assets/images/header/amaranthine.png" alt="Project Spotlight" />
      </Box>
    </Box>
  );
}

NavSubList.propTypes = {
  isDashboard: PropTypes.bool,
  items: PropTypes.array,
  onClose: PropTypes.func,
  subheader: PropTypes.string,
  mainTitle: PropTypes.string,
  mainSubtitle: PropTypes.string,
};
