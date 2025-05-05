import PropTypes from 'prop-types';
import React from 'react';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledSection = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.background.default,
  position: 'relative',
  padding: theme.spacing(8, 0, 8, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0, 4, 0),
  },
}));

const StyledRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  alignItems: 'stretch',
  maxWidth: 1100,
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    maxWidth: '100%',
  },
}));

const StyledImageSection = styled(Box)(({ theme }) => ({
  width: '40%',
  minWidth: 260,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minWidth: 0,
  },
}));

const StyledContentSection = styled(Card)(({ theme }) => ({
  width: '60%',
  background: theme.palette.background.paper,
  borderRadius: 2,
  boxShadow: theme.customShadows.z20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  padding: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 0, 2, 0),
  },
}));

const AspectImageSection = styled(StyledImageSection)(({ theme }) => ({
  aspectRatio: '520 / 514',
  width: '40%',
  minWidth: 0,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'stretch',
  [theme.breakpoints.down('md')]: {
    width: '95%',
    aspectRatio: 'auto',
  },
}));

const AspectContentSection = styled(StyledContentSection)(({ theme }) => ({
  aspectRatio: '780 / 514',
  backgroundColor: '#E5F5FC',
  width: '60%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '95%',
    aspectRatio: 'auto',
  },
}));

// ----------------------------------------------------------------------

const storiesData = [
  {
    id: '1',
    title: 'From the first visit to the final handover, everything was seamless',
    description:
      "We were looking for a home that felt modern yet warm, and Quambiant delivered beyond our expectations. The craftsmanship, the materials, and the attention to detail are unmatched. We couldn't be happier.",
    name: 'Ashwin Pradeep',
    location: 'Bengaluru',
    coverUrl: '/assets/images/home/homestories.png',
  },
  {
    id: '2',
    title: 'Innovation Hub',
    description:
      'Explore our state-of-the-art facilities where creativity meets technology. See how we push boundaries and create solutions for tomorrow.',
    name: 'Sarah Chen',
    location: 'Mumbai',
    coverUrl: '/assets/images/home/homestories2.png',
  },
  {
    id: '3',
    title: 'Team Spirit',
    description:
      'Meet the passionate individuals behind our success. Learn about our collaborative culture and the values that drive us forward.',
    name: 'Rajesh Kumar',
    location: 'Delhi',
    coverUrl: '/assets/images/home/homestories.png',
  },
];

// ----------------------------------------------------------------------

export default function HomeStories() {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % storiesData.length);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => (prevStep - 1 + storiesData.length) % storiesData.length);
  };

  return (
    <StyledSection
      sx={{
        backgroundColor: '#10181f',
        backgroundImage: 'url(/assets/background/pattern.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'common.white',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h1">Home Stories</Typography>
        <Typography variant="body1" sx={{ mt: 1, maxWidth: 700, mx: 'auto' }}>
          Every home has a story. Here are the heartfelt experiences of those who now call a
          Quambiant residence their own
        </Typography>
      </Box>
      {isMobile ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AspectContentSection sx={{ height: 360, mb: 2, width: '100%' }}>
            <CardContent
              sx={{
                height: '100%',
                p: { xs: 2, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h1" sx={{ fontWeight: 500, mb: 2, color: '#18191B' }}>
                {storiesData[activeStep].title}
              </Typography>
              <Typography variant="body3" sx={{ color: 'text.secondary', mb: 4 }}>
                {storiesData[activeStep].description}
              </Typography>
              <Typography
                variant="body3"
                sx={{
                  fontStyle: 'italic',
                  color: 'primary.main',
                  fontWeight: 500,
                  mb: 0,
                }}
              >
                {storiesData[activeStep].name} – {storiesData[activeStep].location}
              </Typography>
            </CardContent>
          </AspectContentSection>
          <AspectImageSection sx={{ width: '100%', mb: 2 }}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                alt={storiesData[activeStep].title}
                src={storiesData[activeStep].coverUrl}
                ratio={undefined}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </AspectImageSection>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                width: '42px',
                height: '42px',
                backgroundColor: 'transparent',
                border: '1px solid #fff',
                borderRadius: '2px',
                color: '#fff',
                mx: 1,
                '&:hover': {
                  color: '#001016',
                  backgroundColor: '#fff',
                },
              }}
            >
              <Iconify icon="eva:arrow-ios-back-fill" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                width: '42px',
                height: '42px',
                backgroundColor: 'transparent',
                color: '#fff',
                borderRadius: '2px',
                border: '1px solid #fff',
                mx: 1,
                '&:hover': {
                  color: '#001016',
                  backgroundColor: '#fff',
                },
              }}
            >
              <Iconify icon="eva:arrow-ios-forward-fill" />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <StyledRoot>
          <AspectImageSection>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                alt={storiesData[activeStep].title}
                src={storiesData[activeStep].coverUrl}
                ratio={undefined}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </AspectImageSection>
          <AspectContentSection>
            <CardContent sx={{ height: '100%', position: 'relative', p: { xs: 2, md: 4 } }}>
              <Typography variant="h1" sx={{ fontWeight: 500, mb: 2, color: '#18191B' }}>
                {storiesData[activeStep].title}
              </Typography>
              <Typography variant="body3" sx={{ color: 'text.secondary', mb: 4 }}>
                {storiesData[activeStep].description}
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  right: 24,
                  bottom: 24,
                  left: 24,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="body3"
                  sx={{
                    fontStyle: 'italic',
                    color: 'primary.main',
                    fontWeight: 500,
                    mb: 0,
                  }}
                >
                  {storiesData[activeStep].name} – {storiesData[activeStep].location}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: 'transparent',
                      border: '1px solid #071317',
                      borderRadius: '2px',
                      color: '#18191B',
                      '&:hover': {
                        color: '#fff',
                        backgroundColor: '#18191B',
                      },
                    }}
                  >
                    <Iconify icon="eva:arrow-ios-back-fill" />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    sx={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: 'transparent',
                      color: '#18191B',
                      borderRadius: '2px',
                      border: '1px solid #10181f',
                      '&:hover': {
                        color: '#fff',
                        backgroundColor: '#18191B',
                      },
                    }}
                  >
                    <Iconify icon="eva:arrow-ios-forward-fill" />
                  </IconButton>
                </Stack>
              </Box>
            </CardContent>
          </AspectContentSection>
        </StyledRoot>
      )}
    </StyledSection>
  );
}
