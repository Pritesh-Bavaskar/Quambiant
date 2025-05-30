import React from 'react';
import whatsapp_btn from 'src/assets/media/landing/whatsapp.svg';
import phone_btn from 'src/assets/media/landing/call.svg';
import { m } from 'framer-motion';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import Badge, { badgeClasses } from '@mui/material/Badge';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { useGetHomepageWithFilter } from 'src/api/home';
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
import { useLocation } from 'react-router-dom';
// components
import Logo from 'src/components/logo';
import Label from 'src/components/label';
//
import { HEADER } from '../config-layout';
import { navConfigMobile, navConfigDesktop } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { SettingsButton, HeaderShadow, LoginButton } from '../_common';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();
  const location = useLocation();
  const [isNavHovered, setIsNavHovered] = React.useState(false);

  const { filteredHomepage } = useGetHomepageWithFilter(`populate[ContactUs][populate]=*`);

  const handleNavHover = React.useCallback((hovered) => {
    // console.log('Navigation hover state:', hovered);
    setIsNavHovered(hovered);
  }, []);

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const delay = location.pathname === '/' ? 4 : 0;

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: isNavHovered ? '#FDF8F3' : 'transparent',
        color: isNavHovered ? 'text.primary' : 'common.white',
        transition: 'all 0.3s ease',
        boxShadow: isNavHovered ? theme.customShadows.z8 : 'none',
      }}
    >
      <m.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_DESKTOP,
            },
            transition: theme.transitions.create(['height', 'background-color'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(offsetTop && {
              height: {
                md: HEADER.H_DESKTOP_OFFSET,
              },
            }),
          }}
        >
          <Container
            sx={{
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: '100% !important',
              px: {
                xs: 2,
                sm: 3,
                md: 5,
                lg: 8,
              },
            }}
          >
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                sx={{
                  [`& .${badgeClasses.badge}`]: {
                    top: 8,
                    right: -16,
                  },
                  width: { xs: '0px', md: '15%' },
                }}
              >
                <Logo colorWhite={!isNavHovered} />
              </Badge>
            </m.div>

            {mdUp && (
              <NavDesktop
                offsetTop={offsetTop}
                data={navConfigDesktop}
                onNavHover={handleNavHover}
              />
            )}

            <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    py: '7px',
                    px: '24px',
                    color: isNavHovered ? 'common.white' : 'text.primary',
                    bgcolor: isNavHovered ? '#001016' : 'neutral.lighter',
                    borderRadius: 0,
                    fontSize: { md: '16px', xs: '12px' },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: isNavHovered ? 'primary.dark' : 'neutral.darker',
                      color: 'common.white',
                    },
                  }}
                >
                  Contact Us
                </Button>
                <NavMobile
                  offsetTop={offsetTop}
                  data={navConfigMobile}
                  sx={{ color: isNavHovered ? '#001016' : '#FDF8F3' }}
                />
              </m.div>

              {mdUp && (
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{
                    visibility: isNavHovered ? 'hidden' : 'visible',
                    width: 40,
                    height: 40,
                  }}
                >
                  <IconButton
                    sx={{
                      ml: { xs: 1, md: -1 },
                      mr: { md: 2 },
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      width: 40,
                      height: 40,
                      minWidth: 'auto',
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'white',
                        borderRadius: 0,
                        '& img': {
                          filter: 'invert(0.9) sepia(0) saturate(0) hue-rotate(0deg)',
                        },
                      },
                    }}
                  >
                    <img
                      src={phone_btn}
                      alt="Phone"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  </IconButton>
                </m.div>
              )}

              {mdUp && (
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{
                    visibility: isNavHovered ? 'hidden' : 'visible',
                    width: 50,
                    height: 40,
                  }}
                >
                  <IconButton
                    component="a"
                    href={`https://api.whatsapp.com/send?phone=${filteredHomepage?.data?.ContactUs?.WhatsAppNumber}&text=Hi,%20I%20want%20to%20know%20more%20about%20Quambiant%20Amaranthine`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      ml: { xs: 1, md: -1 },
                      mr: { md: 2 },
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      width: 40,
                      height: 40,
                      minWidth: 'auto',
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'white',
                        borderRadius: 0,
                        '& img': {
                          filter: 'invert(0.9) sepia(0) saturate(0) hue-rotate(0deg)',
                        },
                      },
                    }}
                  >
                    <img
                      src={whatsapp_btn}
                      alt="WhatsApp"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  </IconButton>
                </m.div>
              )}
            </Stack>
          </Container>
        </Toolbar>
      </m.div>
    </AppBar>
  );
}
