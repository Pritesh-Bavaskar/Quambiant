import { Box, Grid, Typography } from '@mui/material';
import ImageGalleryCarousel from './our-project-details-stats-carousal';

const OurProjectDetailsOverviewStats = () => {
  console.log('here');
  return (
    <Box sx={{ backgroundColor: '#faf6f2', px: 8, py: 4 }}>
      <Grid container spacing={4} alignItems="center" sx={{ minHeight: '600px' }}>
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
            <Typography variant="h3" sx={{ mb: 5 }}>
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
        <Grid item xs={12} md={6}>
          <ImageGalleryCarousel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurProjectDetailsOverviewStats;
