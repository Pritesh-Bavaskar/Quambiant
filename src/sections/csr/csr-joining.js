import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Typography,
  Container,
} from '@mui/material';
import bgImage from 'src/assets/media/landing/contact_form_bck.png';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: 440, // Desktop min height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: `#071317 url(${bgImage}) center/cover no-repeat`,
  [theme.breakpoints.down('md')]: {
    minHeight: 480, // Mobile min height
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(7, 19, 23, 0.2)',
  },
}));

// ----------------------------------------------------------------------

export default function CSRJoining({ sx, ...other }) {
  return (
    <StyledRoot
      sx={{
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          sx={{
            position: 'relative',
            zIndex: 9,
            textAlign: 'center',
            color: 'common.white',
            maxWidth: 800,
            mx: 'auto',
            px: { xs: 2, md: 5 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontFamily: 'Satoshi Variable',
              fontWeight: 500,
              fontSize: { xs: '28px', md: '42px' },
              lineHeight: '100%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'bottom',
              color: '#FFFFFF',
            }}
          >
            Join Us in Making a Difference
          </Typography>
          <Typography
            sx={{
              mb: 5,
              maxWidth: 600,
              mx: 'auto',
              fontFamily: 'Satoshi Variable',
              fontWeight: 500,
              fontSize: { xs: '14px', md: '16px' },
              lineHeight: '100%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: { xs: 'bottom', md: 'middle' },
              color: '#8F94A3',
            }}
          >
            Access our reports, case studies, and whitepapers on sustainability and community
            development.
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                width: 177,
                height: 52,
                padding: '7px 24px',
                gap: '10px',
                bgcolor: '#FDF8F3',
                color: '#001016',
                fontFamily: 'Satoshi Variable',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0px',
                '&:hover': {
                  bgcolor: '#F0E6DC',
                },
                textTransform: 'none',
                boxShadow: 'none',
                borderRadius: 0,
              }}
            >
              Partner With Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                width: 197,
                height: 52,
                padding: '7px 24px',
                gap: '10px',
                border: '1px solid #C7C9D1',
                color: '#FDF8F3',
                fontFamily: 'Satoshi Variable',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0px',
                whiteSpace: 'nowrap',
                '&:hover': {
                  borderColor: '#C7C9D1',
                  bgcolor: 'rgba(199, 201, 209, 0.1)',
                },
                textTransform: 'none',
                borderRadius: 0,
              }}
            >
              Contact Our Team
            </Button>
          </Stack>
        </Box>
      </Container>
    </StyledRoot>
  );
}

CSRJoining.propTypes = {
  sx: PropTypes.object,
};
