import { Box, Typography, Button } from '@mui/material';

export function LandingCard() {
  return (
   
    <Box
      sx={{
        width: { xs: '100%', sm: '90%', md: '60%' },
        maxWidth: '600px',
        p: { xs: 2, sm: 3, md: 3 },
        background: 'rgba(0, 0, 0, 0.1)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
        backdropFilter: 'blur(18px)',
        boxShadow: { xs: 'none', sm: '0 8px 32px rgba(0,0,0,0.2)' },
      }}
    >
      <Typography variant="h1">Elevating Residential Spaces With Timeless Quambiance</Typography>

      <Typography
        variant="body1"
        sx={{
          fontWeight: '500 !important',
          color: '#CCCCCC',
        }}
      >
        From vision to reality, we shape homes that inspire
      </Typography>

      <Button
        variant="contained"
        sx={{
          py: '7px',
          px: '20px',
          color: 'black',
          bgcolor: 'neutral.lighter',
          borderRadius: 0,
          width: 'fit-content',
          mt: 1,
          fontSize: '16px',
        }}
      >
        Explore Our Projects
      </Button>
    </Box>
  );
}
