import { Box, Grid, F, Button, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Stack } from '@mui/system';

export default function ContactStrip() {
  return (
    <Box sx={{ background: '#071317', py: 2, px: 2 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left Half (Mail + Call Info) */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            {/* Mail */}
            <Grid item xs={12} sm={6} display="flex" alignItems="center">
              <img src="/assets/images/contact/mail.png" alt="mail" width="60" height="60" />
              <Stack sx={{ ml: 2 }}>
                <Typography
                  sx={{ ml: 1, fontWeight: 500, fontSize: '20px', color: '#FDF8F3',fontFamily: 'Satoshi Variable' }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{ ml: 1, fontWeight: 500, fontSize: '16px', color: '#CCCCCC',fontFamily: 'Satoshi Variable' }}
                >
                  info@quambiant
                </Typography>
              </Stack>
            </Grid>

            {/* Call */}
            <Grid item xs={12} sm={6} display="flex" alignItems="center">
              <img src="/assets/images/contact/call.png" alt="call" width="60" height="60" />
              <Stack sx={{ ml: 2 }}>
                <Typography
                  sx={{ ml: 1, fontWeight: 500, fontSize: '20px', color: '#FDF8F3' ,fontFamily: 'Satoshi Variable',}}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{ ml: 1, fontWeight: 500, fontSize: '16px', color: '#CCCCCC', fontFamily: 'Satoshi Variable' }}
                >
                  9876543210
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Half (Social Buttons) */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} justifyContent={{ xs: 'center', sm: 'flex-end' }}>
            {/* Facebook Button */}
            <Grid item>
              <Button
                sx={{
                  color: '#fff',
                  px: 2,
                  py: 1,
                  textTransform: 'none',
                  borderRadius: '4px',
                //   '&:hover': { background: '#145db2' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <img
                  src="/assets/images/contact/facebook.png"
                  alt="facebook"
                  width="60"
                  height="60"
                />
              </Button>
            </Grid>

            {/* Instagram Button */}
            <Grid item>
              <Button
                sx={{
                  color: '#fff',
                  px: 2,
                  py: 1,
                  textTransform: 'none',
                  borderRadius: '4px',
                //   '&:hover': { background: '#c1235d' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <img
                  src="/assets/images/contact/instagram.png"
                  alt="instagram"
                  width="60"
                  height="60"
                />
              </Button>
            </Grid>

            {/* YouTube Button */}
            <Grid item>
              <Button
                sx={{
                  color: '#fff',
                  px: 2,
                  py: 1,
                  textTransform: 'none',
                  borderRadius: '4px',
                //   '&:hover': { background: '#cc0000' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <img
                  src="/assets/images/contact/youtube.png"
                  alt="youtube"
                  width="60"
                  height="60"
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
