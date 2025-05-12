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
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
import Label from 'src/components/label';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { SettingsButton, HeaderShadow, LoginButton } from '../_common';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar position="absolute">
      <m.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: 'easeOut',
          delay: 4 // Delay to match the IntroSection animation completion
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_DESKTOP,
            },
            transition: theme.transitions.create(['height'], {
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
                <Logo />
              </Badge>
            </m.div>

            {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

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
                    color: 'black',
                    bgcolor: 'neutral.lighter',
                    borderRadius: 0,
                    fontSize: { md: '16px', xs: '12px' },
                    '&:hover': {
                      color: 'neutral.lighter',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </m.div>

              {mdUp && (
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <IconButton
                    sx={{
                      ml: { xs: 1, md: -1 },
                      mr: { md: 2 },
                    }}
                  >
                    <img src={phone_btn} alt="Phone" style={{ width: 40, height: 40 }} />
                  </IconButton>
                </m.div>
              )}

              {mdUp && (
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <IconButton
                    sx={{
                      ml: { xs: 1, md: 0 },
                      mr: { md: 2 },
                    }}
                  >
                    <img src={whatsapp_btn} alt="WhatsApp" style={{ width: 40, height: 40 }} />
                  </IconButton>
                </m.div>
              )}

              {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
            </Stack>
          </Container>
        </Toolbar>
      </m.div>
    </AppBar>
  );
}
