import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const stats = [
  {
    value: '20%',
    description: 'From vision to reality, we shape homes that inspire',
  },
  {
    value: '30%',
    description: 'water savings through rainwater harvesting & efficient plumbing',
  },
  {
    value: '50%',
    description: 'reduction in construction waste using sustainable materials',
  },
];

export default function BuildGreenSection() {
  return (
    <Box
      sx={{
        aspectRatio: { xs: '393 / 950', md: '1440   / 800' },
        position: 'relative',
        width: '100%',
        minHeight: { xs: 800, md: 800 },
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        src="/assets/video/build_green.mp4"
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
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #071317 0%, #071317D1 50%, #07131700 100%)',
          zIndex: 2,
        }}
      />

      {/* Title and Subtitle at the Top */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          pt: { xs: 6, md: 10 },
          pb: { xs: 4, md: 6 },
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
            mb: 2,
            textAlign: 'center',
            textShadow: '0 2px 16px rgba(0,0,0,0.4)',
          }}
        >
          Building a Greener Tomorrow
        </Typography>
        <Typography
          sx={{
            color: '#C7C9D1',
            maxWidth: 900,
            mb: 0,
            textAlign: 'center',
            textShadow: '0 2px 16px rgba(0,0,0,0.4)',
            fontFamily: 'Satoshi Variable',
            fontSize: '20px',
            fontWeight: 500,
          }}
        >
          Sustainable living starts with conscious building—our commitment to eco-friendly design
          ensures a better future for all
        </Typography>
      </Box>
      {/* Stats at the Bottom */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          zIndex: 4,
          pb: { xs: 3, md: 5 },
          px: { xs: 2, md: 6 }, // reduced padding on xs
          pt: { xs: 16, md: 2 },
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, idx) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2,
                aspectRatio: { xs: '320 / 136', md: '420 / 178' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', sm: 420 },
                  aspectRatio: { xs: '320 / 136', md: '420 / 178' },
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
                    fontSize: { xs: '32px', md: '42px' },
                    width: { xs: '99px', md: '130px' },
                    height: { xs: '99px', md: '130px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    background: 'transparent',
                    color: '#fff',
                    ml: { xs: '40px', md: '45px' },
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
                    fontSize: { xs: '16px', md: '20px' },
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
