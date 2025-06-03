import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  InputAdornment,
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

const StyledInput = styled((props) => (
  <TextField
    fullWidth
    variant="standard"
    placeholder="Your email address"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end" sx={{ '&.MuiInputAdornment-root': { borderLeft: 'none' } }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              height: 54,
              borderRadius: 0,
              borderColor: '#C7C9D1',
              color: '#C7C9D1',
              backgroundColor: 'transparent',
              padding: '7px 24px',
              fontWeight: '500',
              fontFamily: 'Satoshi Variable',
              fontSize: '14px',
              '&:hover': {
                borderColor: '#C7C9D1',
                backgroundColor: 'rgba(199, 201, 209, 0.04)',
              },
              boxShadow: 'none',
              minWidth: 120,
              whiteSpace: 'nowrap',
            }}
          >
            Subscribe
          </Button>
        </InputAdornment>
      ),
    }}
    sx={{
      fontFamily: 'Satoshi Variable',
      fontWeight: '500',
      fontSize: '16px',
      '& .MuiInput-root': {
        '&::before': {
          borderBottomColor: 'rgba(255, 255, 255, 0.42)',
        },
        '&:hover:not(.Mui-disabled)::before': {
          borderBottomColor: 'rgba(255, 255, 255, 0.87)',
        },
        '&::after': {
          borderBottomColor: 'white',
        },
      },
      '& .MuiInput-input': {
        color: 'white',
        py: '16.5px',
        paddingBottom: '24px',
        '&::placeholder': {
          color: 'rgba(255, 255, 255, 0.7)',
          opacity: 1,
        },
      },
    }}
    {...props}
  />
))(() => ({}));

// ----------------------------------------------------------------------

PostSubscribe.propTypes = {
  sx: PropTypes.object,
};

export default function PostSubscribe({ sx, ...other }) {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <StyledRoot sx={sx} {...other}>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          spacing={3}
          alignItems="center"
          direction="column"
          sx={{
            textAlign: 'center',
            py: { xs: 4, md: 6 },
            width: '100%',
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 678, mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                color: '#FDF8F3',
                mb: 1,
                fontWeight: '500',
                fontSize: {
                  xs: '24px',
                  sm: '32px',
                  md: '42px',
                },
                lineHeight: {
                  xs: '1.6rem',
                  sm: '1.8rem',
                  md: '2rem',
                },
                pb: 2,
              }}
            >
              Stay Updated with Quambiant News
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Satoshi Variable',
                color: '#8F94A3',
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              Subscribe to our newsletter to receive the latest news and updates about our real
              estate developments.
            </Typography>
          </Box>

          <Box sx={{ width: '100%', maxWidth: 668, mx: 'auto' }}>
            <StyledInput value={email} onChange={handleChangeEmail} sx={{ width: '100%' }} />
          </Box>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
