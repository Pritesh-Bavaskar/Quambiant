import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Grid, Paper } from '@mui/material';

export default function BuildGreenSection({ greenBuildingStats }) {
  const stats = [
    {
      value: greenBuildingStats?.StatOneValue,
      description: greenBuildingStats?.StatOneDescription,
    },
    {
      value: greenBuildingStats?.StatTwoValue,
      description: greenBuildingStats?.StatTwoDescription,
    },
    {
      value: greenBuildingStats?.StatThreeValue,
      description: greenBuildingStats?.StatThreeDescription,
    },
  ];
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 800, lg: 800 },
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        src={`${process.env.REACT_APP_HOST_API}${greenBuildingStats?.BackgroundVideo?.url}`}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #071317 0%, #071317D1 20%, #07131700 100%)',
          zIndex: 2,
        }}
      />

      {/* Title and Subtitle */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          pt: { xs: 6, lg: 10 },
          pb: { xs: 4, lg: 6 },
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: '#FDF8F3',
            fontWeight: 500,
            lineHeight: 1.2,
            mb: 2,
            textAlign: 'center',
            textShadow: '0 2px 16px rgba(0,0,0,0.4)',
          }}
        >
          {greenBuildingStats?.Heading}
        </Typography>
        <Typography
          sx={{
            color: '#C7C9D1',
            maxWidth: 900,
            mb: 0,
            textAlign: 'center',
            textShadow: '0 2px 16px rgba(0,0,0,0.4)',
            fontFamily: 'Satoshi Variable',
            fontSize: { xs: '14px', md: '20px' },
            lineHeight: 1.2,
            fontWeight: 500,
          }}
        >
          {greenBuildingStats?.SubHeading}
        </Typography>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          zIndex: 4,
          pb: { xs: 3, lg: 5 },
          px: { xs: 2, lg: 6 },
          pt: { xs: 16, lg: 2 },
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={idx === 2 ? 12 : 6} // For iPad: first 2 = half width, last one full
              md={4} // Desktop: all 3 = 1/3
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2,
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', sm: 320, md: 420 },
                  aspectRatio: { xs: '320 / 136', lg: '420 / 178' },
                  backgroundImage: 'url(/assets/images/home/Subtract.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                {/* Stat Value */}
                <Box
                  sx={{
                    fontFamily: 'Satoshi Variable',
                    fontWeight: 700,
                    fontSize: { xs: '32px', lg: '42px' },
                    width: { xs: '99px', lg: '130px' },
                    height: { xs: '99px', lg: '130px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    background: 'transparent',
                    color: '#fff',
                    ml: { xs: '40px', lg: '45px' },
                  }}
                >
                  {stat.value}
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.92)',
                    fontWeight: 500,
                    fontSize: { xs: '16px', lg: '20px' },
                    marginLeft: '20px',
                    padding: '10px',
                  }}
                >
                  {stat.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

BuildGreenSection.propTypes = {
  greenBuildingStats: PropTypes.object,
};
