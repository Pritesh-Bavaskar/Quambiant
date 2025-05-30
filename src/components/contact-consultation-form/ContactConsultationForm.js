import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import bgImage from 'src/assets/media/landing/contact_form_bck.png';
import contactPhone from 'src/assets/media/landing/contact_phone.svg';
import contactWhatsapp from 'src/assets/media/landing/contact_whatsapp.svg';

export default function ContactConsultationForm({ contactUs }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        background: `#071317 url(${bgImage}) center/contain no-repeat`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        justifyContent: 'center',
        py: 8,
        px: { xs: 2, md: 8 },
        mx: 'auto',
        [theme.breakpoints.down('md')]: {
          minHeight: '100vh',
          maxWidth: '100%',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#FDF8F3',
          mb: 10,
          fontWeight: 500,
          textAlign: 'center',
          fontSize: {
            xs: '24px',
            sm: '28px',
            md: '42px',
          },
          lineHeight: {
            xs: '2.4rem',
            sm: '2.6rem',
            md: '3rem',
            lg: '3.4rem',
          },
        }}
      >
        {contactUs?.Heading || 'Let our experts help you find the perfect home'}
      </Typography>

      <Box
        sx={{
          background:
            '#FBF8F3 url(/assets/background/pattern-contact.png) center / cover no-repeat',
          borderRadius: 0,
          // aspectRatio: { xs: '353 / 681', md: '914 / 489' },
          boxShadow: '0 4px 24px rgba(7, 1, 1, 0.08)',
          p: { xs: 3, sm: 8 },
          width: '100%',
          maxWidth: 914,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 2, sm: 3 },
        }}
      >
        {/* Name and Phone Number */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 2 },
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
          }}
        >
          <TextField
            label="Name (required)"
            variant="standard"
            fullWidth
            required
            InputProps={{
              disableUnderline: false,
              sx: {
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
              },
            }}
          />
          <TextField
            label="Phone Number (required)"
            variant="standard"
            fullWidth
            required
            size="small"
            InputProps={{
              disableUnderline: false,
              sx: {
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
              },
            }}
          />
        </Box>

        {/* Email and Location */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 2 },
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
          }}
        >
          <TextField
            label="Email ID"
            variant="standard"
            fullWidth
            size="small"
            InputProps={{
              disableUnderline: false,
              sx: {
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
              },
            }}
          />
          <FormControl fullWidth size="small" variant="standard">
            <InputLabel sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 500 }}>
              Preferred Location
            </InputLabel>
            <Select
              displayEmpty
              disableUnderline={false}
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
                '&:before': {
                  borderBottom: '1px solid #ccc',
                },
                '&:hover:not(.Mui-disabled):before': {
                  borderBottom: '1px solid #999',
                },
                '&.Mui-focused:after': {
                  borderBottom: '2px solid #18191B',
                },
                '& .MuiSelect-select': {
                  backgroundColor: 'transparent !important',
                  color: 'rgba(0, 0, 0, 0.6)',
                  '&[aria-expanded="true"]': {
                    color: 'inherit',
                  },
                },
                '& .MuiMenuItem-root': {
                  '&.Mui-selected': {
                    backgroundColor: 'transparent',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                },
              }}
              renderValue={(selected) => {
                if (!selected) {
                  return '';
                }
                return selected;
              }}
            >
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Checkbox and Button */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' }, // Center checkbox and button on mobile
            justifyContent: { xs: 'center', sm: 'space-between' }, // Center on mobile, spaced on desktop
            width: '100%',
            mt: 1,
            mb: 1,
            gap: { xs: 4, sm: 0 },
            textAlign: 'center',
          }}
        >
          <FormControlLabel
            control={<Checkbox sx={{ p: 0, pr: 1.5, borderRadius: 0 }} />}
            label={
              <Typography
                sx={{ color: '#232323', fontSize: { xs: '14px', md: '16px' }, fontWeight: 500 }}
                variant="body3"
              >
                Send recent offers and news on whatsapp
              </Typography>
            }
            sx={{
              m: 0,
              color: '#232323',
              textAlign: { xs: 'left', sm: 'left' },
            }}
          />
          <Button
            // variant="contained"
            sx={{
              background: '#001016',
              color: '#fff',
              fontSize: '18px',
              borderRadius: 0,
              px: 4,
              py: 1.2,
              fontWeight: 500,
              maxWidth: { xs: '100%', sm: 220 },
              alignSelf: { xs: 'center', sm: 'auto' }, // Center on mobile
              '&:hover': { background: '#222' },
            }}
          >
            Get Consultation
          </Button>
        </Box>

        {/* Divider with text */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            mt: 0,
          }}
        >
          <Box sx={{ flex: 1, height: '0.75px', backgroundColor: '#D9CBBA' }} />
          <Typography
            sx={{
              mx: 2,
              color: '#232323',
              whiteSpace: 'nowrap',
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 500,
            }}
          >
            Reach out to us directly on
          </Typography>
          <Box sx={{ flex: 1, height: '0.75px', backgroundColor: '#D9CBBA' }} />
        </Box>

        {/* Phone buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },

            gap: { xs: 1.5, sm: 2 },
            justifyContent: 'center',
            mt: 1,
            width: '100%',
          }}
        >
          <Button
            variant="outlined"
            href="tel:+917792344646"
            startIcon={
              <img src={contactPhone} alt="phone Icon" style={{ width: 20, height: 20 }} />
            }
            sx={{
              background: 'transparent',
              aspectRatio: { xs: '322 / 50.25', md: '224.25 / 50.25' },
              borderColor: '#5B432A',
              color: '#5B432A',
              borderRadius: 0,
              px: 2.5,
              fontWeight: '500 !important',
              fontSize: { xs: '15px', md: '16px' },
              width: '100%',
              maxWidth: { xs: 'none', sm: 220 },
              '&:hover': { background: '#f5f5f5', borderColor: '#bbb' },
            }}
          >
            {`+${contactUs?.ContactNumber || '917792344646'}`}
          </Button>
          <Button
            variant="outlined"
            href={`https://api.whatsapp.com/send?phone=${
              contactUs?.WhatsAppNumber || '917792344646'
            }&text=Hi,%20I%20want%20to%20know%20more%20about%20Quambiant%20Amaranthine`}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <img src={contactWhatsapp} alt="whatsapp Icon" style={{ width: 20, height: 20 }} />
            }
            sx={{
              background: 'transparent',
              borderColor: '#5B432A',
              aspectRatio: { xs: '322 / 50.25', md: '224.25 / 50.25' },
              color: '#5B432A',
              borderRadius: 0,
              px: 2.5,
              fontWeight: '500 !important',
              fontSize: { xs: '15px', md: '16px' },
              width: '100%',
              maxWidth: { xs: 'none', sm: 220 },
              '&:hover': { background: '#f5f5f5', borderColor: '#bbb' },
            }}
          >
            {`+${contactUs?.WhatsAppNumber || '917792344646'}`}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

ContactConsultationForm.propTypes = {
  contactUs: PropTypes.object,
};
