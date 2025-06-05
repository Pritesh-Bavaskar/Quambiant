import Iconify from 'src/components/iconify';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material';
import connectLocation from 'src/assets/media/landing/connect-location.svg';
import connectMail from 'src/assets/media/landing/connect-mail.svg';
import connectPhone from 'src/assets/media/landing/connect-phone.svg';

export default function ContactInvestmentForm() {
  return (
    <Box
      sx={{
        backgroundColor: '#FDF8F3',
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 500,
          mb: 1,
          textAlign: 'center',
          fontSize: { xs: 28, md: 42 },
          fontFamily: 'Satoshi Variable',
          color: '#18191B',
        }}
      >
        Connect With Us
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          mb: 6,
          color: '#5C6170',
          fontFamily: 'Satoshi Variable',
          fontWeight: 500,
          fontSize: { xs: 14, md: 20 },
        }}
      >
        Have questions about our investment opportunities? Our team is ready to assist you.
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4} maxWidth="lg" sx={{ width: '100%', pt: 2 }}>
        {/* Left Side: Form */}
        <Grid item xs={12} md={7} sx={{ textAlign: 'left' }}>
          <Typography
            sx={{
              mb: 3,
              display: { xs: 'none', md: 'block' },
              fontFamily: 'Satoshi Variable',
              fontWeight: 500,
              fontSize: 32,
              color: '#18191B',
            }}
          >
            Send a Message
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="standard"
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '&:after': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '& input': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="standard"
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '&:after': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '& input': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email ID"
                variant="standard"
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '&:after': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '& input': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="standard"
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '&:after': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '& input': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Tell us about your requirement"
                multiline
                rows={4}
                fullWidth
                variant="standard"
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '&:after': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '& textarea': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Attachment (optional)
              </Typography>
              <TextField
                type="file"
                fullWidth
                variant="standard"
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '&:after': {
                      borderBottomColor: '#D9CBBA',
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '16px' },
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Iconify icon="eva:cloud-upload-fill" width={20} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="standard"
                sx={{
                  backgroundColor: '#001016',
                  borderRadius: 0,
                  py: 1.5,
                  px: { xs: 4, md: 6 },
                  width: { xs: '100%', md: 'auto' },
                  fontWeight: 500,
                  color: '#fff',
                  '&:hover': { backgroundColor: '#222' },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side: Info */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            px: { xs: 0, md: 2 },
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              p: { xs: 2, md: 3 },
              boxShadow: { xs: 'none', md: '0 1px 20px rgba(0,0,0,0.08)' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-start', md: 'flex-start' },
              gap: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Satoshi Variable',
                fontWeight: 500,
                fontSize: '20px',
                color: '#000',
                mb: 1,
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* <Iconify icon="eva:email-fill" width={20} color="primary" /> */}
              <img src={connectMail} alt="Mail" />
              <Box>
                <Typography
                  sx={{
                    color: '#5C6170',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    color: '#231609',
                    fontWeight: 500,
                    fontSize: '16px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  investors@yourambient.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* <Iconify icon="eva:phone-fill" width={20} color="primary" /> */}
              <img src={connectPhone} alt="Phone" />
              <Box>
                <Typography
                  sx={{
                    color: '#5C6170',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    color: '#231609',
                    fontWeight: 500,
                    fontSize: '16px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  +1(958) 123-4567
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* <Iconify icon="eva:pin-fill" width={20} color="primary" /> */}
              <img src={connectLocation} alt="Location" />
              <Box>
                <Typography
                  sx={{
                    color: '#5C6170',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  Office
                </Typography>
                <Typography
                  sx={{
                    color: '#231609',
                    fontWeight: 500,
                    fontSize: '16px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  123 Investment Ave, Suite 600
                  <br />
                  New York, NY 10001
                </Typography>
              </Box>
            </Box>

            {/* Investor Relations Card */}
            <Box
              sx={{
                backgroundColor: '#5B432A',
                color: '#fff',
                p: 2,
                my: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Satoshi Variable',
                  fontWeight: 500,
                  fontSize: { xs: '18px', md: '20px' },
                  color: '#FDF8F3',
                }}
              >
                Investor Relations
              </Typography>
              {/* <br /> */}
              <Typography
                sx={{
                  fontFamily: 'Satoshi Variable',
                  fontWeight: 500,
                  fontSize: { xs: '16px', md: '14px' },
                  color: '#C7C9D1',
                }}
              >
                Our dedicated investor relations team is available Monday to Friday, 9am to 6pm GMT
                to assist with any inquiries.
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: 0,
                borderColor: '#001016',
                color: '#001016',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              Schedule A Call
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
