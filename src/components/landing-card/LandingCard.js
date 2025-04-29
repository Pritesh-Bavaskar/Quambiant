import { Box, Typography, Button } from '@mui/material';

export function LandingCard() {
  return (
    // <Box
    //   sx={{
    //     width: { xs: '90%', md: '60%' },
    //     height: { xs: 'auto', md: 'auto' },
    //     p: { xs: 3, md: 5 },
    //     background: 'rgba(0, 0, 0, 0.4)',
    //     color: 'white',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     gap: 2,
    //     backdropFilter: 'blur(18px)',
    //     // border: '2px solid white',
    //   }}
    // >
    //   <Typography
    //     variant="h1"
    //     sx={{
    //       fontFamily: `'Playfair Display', serif`,
    //       fontWeight: 'bold',
    //       lineHeight: '1.25',
    //     }}
    //   >
    //     Elevating Residential Spaces With Timeless Quambiance
    //   </Typography>

    //   <Typography variant="body1" sx={{ color: '#CCCCCC' }}>
    //     From vision to reality, we shape homes that inspire
    //   </Typography>

    //   <Button
    //     variant="contained"
    //     sx={{
    //       py: '7px',
    //       px: '24px',
    //       color: 'black',
    //       bgcolor: 'neutral.lighter',
    //       borderRadius: 0,
    //       width: 'fit-content',
    //       mt: 1,
    //       fontSize: '16px',
    //         '&:hover': {
    //             color: 'neutral.lighter',
    //         },
    //     }}
    //   >
    //     Explore Our Projects
    //   </Button>
    // </Box>
    <Box
      sx={{
        width: { xs: '100%', sm: '90%', md: '60%' },
        maxWidth: '600px',
        p: { xs: 2, sm: 3, md: 5 },
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
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '28px', sm: '32px', md: '42px' },
          fontWeight: 600,
          fontFamily: `'Playfair Display', serif`,
          lineHeight: 1.3,
        }}
      >
        Elevating Residential Spaces With Timeless Quambiance
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          color: 'grey.300',
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
