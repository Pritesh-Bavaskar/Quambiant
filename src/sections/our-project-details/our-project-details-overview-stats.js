import { Box, Grid, Typography } from '@mui/material';
import OurProjectDetailsStatsCarousel from './our-project-details-stats-carousal';

const OurProjectDetailsOverviewStats = () => {
  console.log('here');
  return (
    <>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/assets/images/our-project-details/vector-mobile.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          backgroundColor: '#faf6f2',
          px: { xs: 2, md: 8 },
          py: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            left: 0,
            width: { xs: '100%', md: '40%' },
            height: { xs: 200, md: '80%' },
            backgroundImage: 'url(/assets/images/our-project-details/vector.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: { xs: 'contain', md: 'contain' },
            backgroundPosition: 'top left',
            zIndex: 0,
            pointerEvents: 'none', // Makes sure it doesn’t block text interaction
          }}
        />
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '600px' }}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={7}>
            <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
              <Typography
                variant="h3"
                sx={{
                  mb: 5,
                  fontSize: { xs: '22px', md: '32px' },
                  lineHeight: { xs: '1.7rem', md: '3rem' },
                }}
              >
                Nestled in the heart of the city, Horizon Heights redefines modern living with its
                elegant design, breathtaking views, and thoughtfully crafted spaces.
              </Typography>

              <Grid container spacing={3}>
                {/* Apartment Type */}
                <Grid item xs={6}>
                  <Typography
                    variant="body3"
                    sx={{ fontWeight: 500, fontSize: '20px', color: '#5C6170' }}
                  >
                    APARTMENT TYPE
                  </Typography>
                  <Typography variant="h1" sx={{ fontWeight: 500, color: '#DDAB76' }}>
                    2BHK, 3BHK
                  </Typography>
                </Grid>

                {/* Total Area */}
                <Grid item xs={6}>
                  <Typography
                    variant="body3"
                    sx={{ fontWeight: 500, fontSize: '20px', color: '#5C6170' }}
                  >
                    TOTAL AREA
                  </Typography>
                  <Typography variant="h1" sx={{ fontWeight: 500, color: '#DDAB76' }}>
                    500,000+ sq. ft
                  </Typography>
                </Grid>

                {/* Total Floors */}
                <Grid item xs={6}>
                  <Typography
                    variant="body3"
                    sx={{ fontWeight: 500, fontSize: '20px', color: '#5C6170' }}
                  >
                    TOTAL FLOORS
                  </Typography>
                  <Typography variant="h1" sx={{ fontWeight: 500, color: '#DDAB76' }}>
                    40+
                  </Typography>
                </Grid>

                {/* Occupancy Rate */}
                <Grid item xs={6}>
                  <Typography
                    variant="body3"
                    sx={{ fontWeight: 500, fontSize: '20px', color: '#5C6170' }}
                  >
                    OCCUPANCY RATE
                  </Typography>
                  <Typography variant="h1" sx={{ fontWeight: 500, color: '#DDAB76' }}>
                    94%
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={5}>
            <OurProjectDetailsStatsCarousel />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OurProjectDetailsOverviewStats;
