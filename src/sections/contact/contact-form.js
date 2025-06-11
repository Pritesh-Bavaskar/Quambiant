// import { m } from 'framer-motion';
// // @mui
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// // components
// import { MotionViewport, varFade } from 'src/components/animate';

// // ----------------------------------------------------------------------

// export default function ContactForm() {
//   return (
//     <Stack component={MotionViewport} spacing={5}>
//       <m.div variants={varFade().inUp}>
//         <Typography variant="h3">
//           Feel free to contact us. <br />
//           We&apos;ll be glad to hear from you, buddy.
//         </Typography>
//       </m.div>

//       <Stack spacing={3}>
//         <m.div variants={varFade().inUp}>
//           <TextField fullWidth label="Name" />
//         </m.div>

//         <m.div variants={varFade().inUp}>
//           <TextField fullWidth label="Email" />
//         </m.div>

//         <m.div variants={varFade().inUp}>
//           <TextField fullWidth label="Subject" />
//         </m.div>

//         <m.div variants={varFade().inUp}>
//           <TextField fullWidth label="Enter your message here." multiline rows={4} />
//         </m.div>
//       </Stack>

//       <m.div variants={varFade().inUp}>
//         <Button size="large" variant="contained">
//           Submit Now
//         </Button>
//       </m.div>
//     </Stack>
//   );
// }

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

export default function ContactForm({ contactUs }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: '#FBF8F3 url(/assets/background/contactus form.png) center / cover no-repeat',
        borderRadius: 0,
        // aspectRatio: { xs: '353 / 681', md: '914 / 489' },
        boxShadow: '0 4px 24px rgba(7, 1, 1, 0.08)',
        p: { xs: 3, sm: 8 },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 2, sm: 2 },
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Satoshi',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '10%',
            textTransform: 'uppercase',
            color: '#5B432A',
          }}
        >
          GET IN TOUCH
        </Typography>
      </Box>
      <Box
        // sx={{
        //   display: 'flex',
        //   gap: { xs: 2, sm: 2 },
        //   flexDirection: { xs: 'column', sm: 'row' },
        //   width: '100%',
        // }}
        sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'flex-start', sm: 'center' }, // Align left on mobile
    justifyContent: { xs: 'flex-start', sm: 'space-between' }, // Align left on mobile
    width: '100%',
    mt: 1,
    mb: 1,
    gap: { xs: 4, sm: 0 },
    textAlign: 'left', // Ensure text aligns left when wrapped
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '0%',
  }}
      >
        <Typography
          sx={{
            fontFamily: 'Satoshi',
            fontWeight: 500,
            fontSize: { xs: '28px', md: '42px' },
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'left',
            verticalAlign: 'bottom',
          }}
          variant="body3"
        >
          Your Next Chapter Begins Here
        </Typography>
      </Box>
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
          label="First Name"
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
          label="Last Name"
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
      </Box>
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
          label="Phone Number"
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
          label="Tell us about your requirement"
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
      </Box>

      {/* Checkbox and Button */}
      {/* <Box
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
      </Box> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' }, // Align to start on mobile
          justifyContent: { xs: 'flex-start', sm: 'space-between' }, // Align left on mobile, spaced on desktop
          width: '100%',
          mt: 1,
          mb: 1,
          gap: { xs: 2, sm: 0 },
          textAlign: 'left',
        }}
      >
        <FormControlLabel
          control={<Checkbox sx={{ p: 0, pr: 1.5, borderRadius: 0 }} />}
          label={
            <Typography
              sx={{
                color: '#232323',
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
                textAlign: 'left', // ensure label text is left-aligned
                lineHeight: 1.4, // improve wrapping
              }}
              variant="body3"
            >
              Send recent offers and news on WhatsApp
            </Typography>
          }
          sx={{
            m: 0,
            color: '#232323',
            alignItems: 'flex-start', // make label align properly on mobile
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: { xs: 'flex-start', sm: 'space-between' },
          width: '100%',
          mt: 1,
          mb: 1,
          gap: { xs: 4, sm: 0 },
          textAlign: 'left',
          fontFamily: 'Satoshi',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
      >
        <Typography
          sx={{ color: '#707070', fontSize: { xs: '14px', md: '16px' }, fontWeight: 500 ,}}
          variant="body3"
        >
          By clicking on submit you agree to the terms and conditions of Quambiant
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'center' },
          justifyContent: { xs: 'center', sm: 'space-between' },
          width: '100%',
          mt: 1,
          mb: 1,
          gap: { xs: 4, sm: 0 },
          textAlign: 'center',
          fontFamily: 'Satoshi',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
      >
        <Button
          sx={{
            background: '#001016',
            color: '#fff',
            fontSize: '18px',
            borderRadius: 0,
            px: 4,
            py: 1.2,
            fontWeight: 500,
            width: { xs: '100%', sm: 'auto' }, // Full width on mobile
            alignSelf: { xs: 'flex-start', sm: 'auto' }, // Align left on mobile
            '&:hover': { background: '#222' },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

ContactForm.propTypes = {
  contactUs: PropTypes.object,
};
