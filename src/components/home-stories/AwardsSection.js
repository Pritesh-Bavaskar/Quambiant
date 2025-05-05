import React from 'react';
import { Box, Typography, Card, CardMedia, useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify';
import Carousel, { useCarousel } from 'src/components/carousel';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import awardImage from 'src/assets/media/landing/awards.png';

// Sample awards data
const awardsData = [
  {
    id: 1,
    title: 'Best Residential Development 2022',
    subtitle: 'Recognized for exceptional architectural design and sustainability',
    image: awardImage,
  },
  {
    id: 2,
    title: 'Heritage Conservation Award',
    subtitle: 'Awarded for preserving cultural architectural elements',
    image: awardImage,
  },
  {
    id: 3,
    title: 'Urban Design Excellence',
    subtitle: 'For innovative integration of modern living spaces',
    image: awardImage,
  },
  {
    id: 4,
    title: 'Sustainability Leadership',
    subtitle: 'Recognizing our commitment to eco-friendly development',
    image: awardImage,
  },
];

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  padding: theme.spacing(4, 0),
  backgroundColor: '#FFFFFF',
}));

// Custom Previous Arrow
const CustomPrevArrow = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      border: '1px solid #18191B',
      borderRadius: '0%',
      color: '#18191B',
      bgcolor: 'transparent',
      mx: 1,
      '&:hover': { bgcolor: '#18191B', color: '#fff' },
    }}
  >
    <Iconify icon="eva:arrow-ios-back-fill" />
  </IconButton>
);

// Custom Next Arrow
const CustomNextArrow = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      border: '1px solid #18191B',
      borderRadius: '0%',
      color: '#18191B',
      bgcolor: 'transparent',
      mx: 1,
      '&:hover': { bgcolor: '#18191B', color: '#fff' },
    }}
  >
    <Iconify icon="eva:arrow-ios-forward-fill" />
  </IconButton>
);

CustomPrevArrow.propTypes = {
  sx: PropTypes.object,
};

CustomNextArrow.propTypes = {
  sx: PropTypes.object,
};

export default function AwardsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mobile carousel settings
  const mobileCarousel = useCarousel({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '32px',
        },
      },
    ],
  });

  // Desktop carousel settings with auto-slide
  const desktopCarousel = useCarousel({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    centerMode: false,
    centerPadding: '20px',
  });

  return (
    <CarouselContainer>
      {isMobile ? (
        // Mobile view
        <>
          <Box
            sx={{
              mb: 5,
              px: { xs: 2 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 500,
                mb: 1,
                fontFamily: 'Playfair Display, serif',
                fontSize: '28px',
                textAlign: 'center',
              }}
            >
              Recognizing Excellence in Real Estate
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                fontFamily: 'Satoshi Variable, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                textAlign: 'center',
              }}
            >
              Awards that reflect our passion for crafting timeless and impactful living spaces.
            </Typography>
          </Box>

          <Box
            sx={{
              px: 0,
              width: '100%',
              maxWidth: 1200,
              mx: 'auto',
            }}
          >
            <Carousel ref={mobileCarousel.carouselRef} {...mobileCarousel.carouselSettings}>
              {awardsData.map((award) => (
                <Card
                  key={award.id}
                  sx={{
                    minWidth: 0,
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    color: '#FFFFFF',
                    boxShadow: 'none',
                    padding: '0px',
                    borderRadius: '0px',
                    overflow: 'hidden',
                    position: 'relative',
                    height: 300,
                    // mx: 1,
                    p: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={award.image}
                    alt={award.title}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      opacity: 1,
                    }}
                  />
                </Card>
              ))}
            </Carousel>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <CustomPrevArrow onClick={mobileCarousel.onPrev} />
              <CustomNextArrow onClick={mobileCarousel.onNext} />
            </Box>
          </Box>
        </>
      ) : (
        // Desktop view - 50/50 layout with auto-sliding images
        <Box
          sx={{
            px: 4,
            display: 'flex',
            width: '100%',
            maxWidth: 1200,
            mx: 'auto',
            alignItems: 'center',
          }}
        >
          {/* Left side: Text content - 50% */}
          <Box
            sx={{
              width: '50%',
              pr: 4,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 500,
                mb: 1,
                fontFamily: 'Playfair Display, serif',
                fontSize: '42px',
                textAlign: 'left',
              }}
            >
              Recognizing Excellence in Real Estate
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontFamily: 'Satoshi Variable, sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                textAlign: 'left',
              }}
            >
              Awards that reflect our passion for crafting timeless and impactful living spaces.
            </Typography>
          </Box>

          {/* Right side: Award images carousel - 50% */}
          <Box
            sx={{
              width: '50%',
              pl: 3, // Add padding on the left
            }}
          >
            <Carousel ref={desktopCarousel.carouselRef} {...desktopCarousel.carouselSettings}>
              {awardsData.map((award) => (
                <Card
                  key={award.id}
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#FFFFFF',
                    boxShadow: 'none',
                    padding: '0px',
                    borderRadius: '0px',
                    overflow: 'hidden',
                    position: 'relative',
                    height: 350,
                    p: 2,
                    // mx: 2, // Add horizontal margin for spacing between slides
                  }}
                >
                  <CardMedia
                    component="img"
                    image={award.image}
                    alt={award.title}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      opacity: 1,
                    }}
                  />
                </Card>
              ))}
            </Carousel>
          </Box>
        </Box>
      )}
    </CarouselContainer>
  );
}