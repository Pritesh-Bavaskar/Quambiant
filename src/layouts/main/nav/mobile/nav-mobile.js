import PropTypes from 'prop-types';
import { useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { usePathname } from 'src/routes/hook';
// components
import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import Scrollbar from 'src/components/scrollbar';
//
import slideImage from 'src/assets/media/landing/bck_img.png';
import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavMobile({ offsetTop, data }) {
  const pathname = usePathname();

  const nav = useBoolean();

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton
        onClick={nav.onTrue}
        sx={{
          ml: 2,
          width: { xs: 32, md: 42 },
          height: { xs: 32, md: 42 },
          color: '#FDF8F3',
          padding: 0,
        }}
      >
        <SvgColor src="/assets/icons/navbar/ic_logo.svg" sx={{ width: 32, height: 32 }} />
      </IconButton>

      <Drawer
        open={nav.value}
        onClose={nav.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: '100%',
            height: '100%',
          },
        }}
      >
        <Scrollbar sx={{ width: '100%', height: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              p: 3,
              pb: 1,
            }}
          >
            <Logo sx={{ width: 100, height: 40, my: 0 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                sx={{
                  py: '7px',
                  px: '24px',
                  color: '#FFF',
                  bgcolor: '#001016',
                  borderRadius: 0,
                  fontSize: { md: '16px', xs: '12px' },
                  '&:hover': {
                    color: '#FFF',
                  },
                  display: { xs: 'none', md: 'inline-flex' },
                }}
              >
                Contact Us
              </Button>
              <IconButton
                onClick={nav.onFalse}
                sx={{
                  width: { xs: 32, md: 42 },
                  height: { xs: 32, md: 42 },
                  color: '#001016',
                  padding: 0,
                  margin: 0,
                }}
              >
                <SvgColor
                  src="/assets/icons/navbar/ic_close_logo.svg"
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              '@media (min-width: 900px)': {
                flexDirection: 'row',
                alignItems: 'stretch',
              },
            }}
          >
            {/* Left Section: Content */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'left',
                '@media (min-width: 900px)': {
                  width: '50%',
                  margin: '0 auto',
                  justifyContent: 'center',
                },
              }}
            >
              <List
                component="nav"
                sx={{
                  flexGrow: 1,
                  pt: { xs: 5, md: 12 },
                  px: { xs: 1, md: 1.5 },
                  '@media (min-width: 900px)': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: 4,
                    '& > *:not(:last-child)': {
                      mb: 3,
                    },
                  },
                }}
                disablePadding
              >
                {data.map((link) => (
                  <NavList key={link.title} item={link} />
                ))}
              </List>

              {/* Social Icons - Desktop Only */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  p: 3,
                  pt: 2,
                  mt: 'auto',
                }}
              >
                <Stack direction="row" spacing={2}>
                  {[
                    { name: 'Facebook', icon: '/assets/icons/brands/ic_facebook.svg', href: '#' },
                    { name: 'Twitter', icon: '/assets/icons/brands/ic_x.svg', href: '#' },
                    { name: 'Instagram', icon: '/assets/icons/brands/ic_insta.svg', href: '#' },
                  ].map((social) => (
                    <IconButton
                      key={social.name}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 40,
                        height: 40,
                        color: 'text.primary',
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                      }}
                    >
                      <SvgColor src={social.icon} sx={{ width: 33, height: 33 }} />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Box>

            {/* Right Section: Image - Desktop Only */}
            <Box
              sx={{
                display: 'none',
                position: 'relative',
                overflow: 'hidden',
                '@media (min-width: 900px)': {
                  display: 'flex',
                  width: '50%',
                  height: '100%',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  '& img': {
                    maxWidth: 464,
                    aspectRatio: '464 / 600',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    position: 'relative',
                    zIndex: 0,
                  },
                },
                pr: 5,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxWidth: 464,
                  marginLeft: 'auto',
                  // Add right padding (40px)
                }}
              >
                <img
                  src={slideImage}
                  alt="Navigation background"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      animation: 'marquee 20s linear infinite',
                      '@keyframes marquee': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: 'translateX(-50%)' },
                      },
                    }}
                  >
                    {/* Repeat the text twice */}
                    {[1, 2].map((i) => (
                      <Box
                        key={i}
                        sx={{
                          flexShrink: 0,
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          fontSize: '200px',
                          fontFamily: 'Playfair Display, serif',
                          fontWeight: 700,
                          color: 'white',
                          textTransform: 'uppercase',
                          letterSpacing: '0.2em',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          lineHeight: 1,
                          px: 5,
                        }}
                      >
                        QUAMBIANT&nbsp;QUAMBIANT&nbsp;QUAMBIANT&nbsp;
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string,
      icon: PropTypes.node,
      children: PropTypes.array,
    })
  ).isRequired,
  offsetTop: PropTypes.bool,
};
