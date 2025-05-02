// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';


// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Quambiant',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Contact us', href: paths.contact },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: 'support@Quambiant.cc', href: '#' }],
  },
];

// ----------------------------------------------------------------------

const socialIcons = [
  { name: 'Facebook', icon: '/assets/icons/brands/ic_facebook.svg', href: '#' },
  { name: 'Instagram', icon: '/assets/icons/brands/ic_insta.svg', href: '#' },
  { name: 'Twitter', icon: '/assets/icons/brands/ic_x.svg', href: '#' },
];

const styles = {
  root: {
    bgcolor: '#071317',
    color: '#fff',
    fontFamily: 'Satoshi, sans-serif',
  },
  quambiant: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    fontSize: { xs: '73.34px', md: '200px' },
    textAlign: { xs: 'center', md: 'center' },
    lineHeight: 1,
    mb: { xs: 3, md: 5 },
  },
  otherText: {
    fontFamily: 'Satoshi, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
  },
};

export default function Footer() {
  const mainFooter = (
    <Box
      component="footer"
      sx={{
        ...styles.root,
        position: 'relative',
      }}
    >
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'center' },
        }}
      >
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', mb: { xs: 3, md: 5 } }} />
        <Typography sx={styles.quambiant}>Quambiant</Typography>
        <Divider
          sx={{ bgcolor: 'rgba(255,255,255,0.2)', mt: { xs: 3, md: 5 }, mb: { xs: 3, md: 5 } }}
        />

        {/* Responsive Footer Content */}
        <Box sx={{ width: '100%', mb: 2 }}>
          {/* Mobile Layout */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            {/* Navigation Links in two rows */}
            <Stack spacing={1} alignItems="center" mb={4}>
              <Stack direction="row" spacing={3}>
                <Link
                  component={RouterLink}
                  href={paths.about}
                  color="inherit"
                  sx={styles.otherText}
                >
                  About
                </Link>
                <Link
                  component={RouterLink}
                  href={paths.contact}
                  color="inherit"
                  sx={styles.otherText}
                >
                  Contact
                </Link>
                <Link component={RouterLink} href="#" color="inherit" sx={styles.otherText}>
                  Projects
                </Link>
              </Stack>
              <Stack direction="row" spacing={3}>
                <Link component={RouterLink} href="#" color="inherit" sx={styles.otherText}>
                  Investor Lounge
                </Link>
                <Link component={RouterLink} href="#" color="inherit" sx={styles.otherText}>
                  Careers
                </Link>
              </Stack>
            </Stack>
            {/* Social Media Icons */}
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" mb={4}>
              {socialIcons.map((social) => (
              <IconButton
                sx={{
                  ml: 1,
                  width: 18,
                  height: 18,
                  color: '#FDF8F3',
                  padding: 0,
                }}
              >
                <SvgColor src={social.icon} sx={{ width: 18, height: 18 }} />
              </IconButton>
               ))} 
            </Stack>
            {/* Copyright */}
            <Typography
              sx={{
                ...styles.otherText,
                whiteSpace: 'nowrap',
                textAlign: 'center',
              }}
            >
              Copyright © 2025 Quambiant, Inc.
            </Typography>
          </Box>

          {/* Desktop Layout */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%', display: { xs: 'none', md: 'flex' } }}
          >
            {/* Social Media Icons - Left */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="flex-start"
              sx={{ flex: 1 }}
            >
              {socialIcons.map((social) => (
              <IconButton
                sx={{
                  ml: 1,
                  width: 22,
                  height: 22,
                  color: '#FDF8F3',
                  padding: 0,
                }}
              >
                <SvgColor src={social.icon} sx={{ width: 22, height: 22 }} />
              </IconButton>
               ))} 
            </Stack>

            {/* Navigation Links - Center */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent="center"
              sx={{ flex: 2 }}
            >
              <Link component={RouterLink} href={paths.about} color="inherit" sx={styles.otherText}>
                About
              </Link>
              <Link
                component={RouterLink}
                href={paths.contact}
                color="inherit"
                sx={styles.otherText}
              >
                Contact
              </Link>
              <Link component={RouterLink} href="#" color="inherit" sx={styles.otherText}>
                Projects
              </Link>
              <Link component={RouterLink} href="#" color="inherit" sx={styles.otherText}>
                Investor Lounge
              </Link>
              <Link component={RouterLink} href="#" color="inherit" sx={styles.otherText}>
                Careers
              </Link>
            </Stack>

            {/* Copyright - Right */}
            <Typography
              sx={{
                ...styles.otherText,
                whiteSpace: 'nowrap',
                flex: 1,
                textAlign: 'right',
              }}
            >
              Copyright © 2025 Quambiant, Inc.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );

  return mainFooter;
}
