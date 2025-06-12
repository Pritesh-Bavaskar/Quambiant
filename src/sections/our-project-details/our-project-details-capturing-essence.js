import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// components
import Image from 'src/components/image';
import Carousel, { useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));



// ----------------------------------------------------------------------

const Images = [
  '/assets/images/home/spotlight.png',
  '/assets/images/home/darkmode.webp',
  '/assets/images/home/homestories2.png',
  '/assets/images/home/homestories.png',
];

const ThumbnailContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(4),
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 9,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    right: 0,
    top: 0,
    transform: 'none',
    mt: 2,
  },
}));

const Thumbnail = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  width: 80,
  height: 60,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',
  opacity: active ? 1 : 0.6,
  transition: theme.transitions.create(['opacity', 'transform'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('md')]: {
    width: 60,
    height: 45,
  },
}));

const ThumbnailOverlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: active ? 'transparent' : 'rgba(0, 0, 0, 0.3)',
  transition: theme.transitions.create('background-color'),
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginTop: theme.spacing(4),
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function OurProjectDetailsCapturingEssence({ images = [], ...other }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const carousel = useCarousel({
    autoplay: true,
    beforeChange: (current, next) => setCurrentIndex(next),
  });

  const handleThumbnailClick = useCallback(
    (index) => {
      carousel.onTogo(index);
      setCurrentIndex(index);
    },
    [carousel]
  );

  return (
    <Box {...other}>
      <Container maxWidth={false} disableGutters sx={{ width: '100%', px: 0 }}>
        <StyledContent>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Capturing the Essence of Luxury Living
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto', mb: 8 }}>
            Explore stunning visuals of Horizon Heights, where design meets elegance and every
            detail speaks of sophistication
          </Typography>

          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'relative', width: '100%' }}>
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {Images.map((img, index) => (
                  <Image
                    key={index}
                    alt={`project-${index}`}
                    src={img}
                    sx={{
                      width: '100%',
                      height: { xs: 'auto', md: 600 },
                      objectFit: 'cover',
                      aspectRatio: '16/9',
                    }}
                  />
                ))}
              </Carousel>

              <ThumbnailContainer>
                {Images.map((img, index) => (
                  <Thumbnail
                    key={index}
                    active={currentIndex === index}
                    onClick={() => handleThumbnailClick(index)}
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Image
                      src={img}
                      alt={`thumbnail-${index}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <ThumbnailOverlay active={currentIndex === index} />
                  </Thumbnail>
                ))}
              </ThumbnailContainer>
              
              <StyledTabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="project media tabs"
                variant="fullWidth"
                sx={{
                  '& .MuiTab-root': {
                    color: 'text.primary',
                    opacity: 0.7,
                    '&.Mui-selected': {
                      color: 'primary.main',
                      opacity: 1,
                    },
                  },
                }}
              >
                <Tab label="Interior" />
                <Tab label="Exterior" />
                <Tab label="Video" />
              </StyledTabs>
            </Box>
          </Box>
        </StyledContent>
      </Container>
    </Box>
  );
}

OurProjectDetailsCapturingEssence.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};
