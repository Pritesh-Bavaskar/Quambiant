import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify';
import Carousel, { useCarousel } from 'src/components/carousel';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

const spotlightData = [
  {
    id: 1,
    title: 'Sustainable Living: The Future Of Modern Homes',
    description:
      'Discover advances in shaping the future of residential living. Observe our eco-friendly practices, from energy-efficient design.',
    type: 'TYPE: 20/5',
    image: '/assets/images/home/spotlight.png',
  },
  {
    id: 2,
    title: 'Sustainable Living: The Future Of Modern Homes',
    description:
      'Observe architecture in shaping the future of residential living. Discover how our eco-friendly practices, from energy-efficient design.',
    type: 'TYPE: 20/5',
    image: '/assets/images/home/spotlight.png',
  },
  {
    id: 3,
    title: 'Sustainable Living: The Future Of Modern Homes',
    description:
      'Discover advances in shaping the future of residential living. Observe our eco-friendly practices, from energy-efficient design.',
    type: 'TYPE: 20/5',
    image: '/assets/images/home/spotlight.png',
  },
  {
    id: 4,
    title: 'Sustainable Living: The Future Of Modern Homes',
    description:
      'Observe architecture in shaping the future of residential living. Discover how our eco-friendly practices, from energy-efficient design.',
    type: 'TYPE: 20/5',
    image: '/assets/images/home/spotlight.png',
  },
];

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  padding: theme.spacing(4, 0),
  backgroundColor: '#FDF8F3',
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

export default function SpotlightCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const carousel = useCarousel({
    slidesToShow: 3,
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

  return (
    <CarouselContainer>
      <Box
        sx={{
          mb: 3,
          px: { xs: 2, md: 4 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontFamily: 'Satoshi, sans-serif',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            In the Spotlight
          </Typography>
          <Typography
            variant="b1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              display: 'flex',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Stay updated with the latest news, expert insights, and media highlights about our
            journey in redefining residential living.
          </Typography>
        </Box>
        {!isMobile && (
          <Box>
            <CustomPrevArrow onClick={carousel.onPrev} />
            <CustomNextArrow onClick={carousel.onNext} />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          px: { xs: 0, md: 2 },
          width: '100%',
          // maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {spotlightData.map((item, i) => (
            <Card
              key={`${item.id}-${i}`}
              sx={{
                minWidth: 0,
                width: '100%',
                backgroundColor: '#FDF8F3',
                boxShadow: 0,
                padding: '10px',
                borderRadius: '2px',
                overflow: 'hidden',
                ...(isMobile && {
                  maxWidth: 370,
                  mx: 'auto',
                  mr: 0,
                  ml: 0,
                }),
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: 180, objectFit: 'cover' }}
              />
              <CardContent sx={{ padding: '0px', paddingTop: '16px' }}>
                {/* <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    mb: 0.5,
                    display: 'block',
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                  }}
                >
                  {item.type}
                </Typography> */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '20px',
                    fontFamily: 'Satoshi, sans-serif',
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 400,
                    fontSize: '14px',
                    fontFamily: 'Satoshi, sans-serif',
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CustomPrevArrow onClick={carousel.onPrev} />
            <CustomNextArrow onClick={carousel.onNext} />
          </Box>
        )}
      </Box>
    </CarouselContainer>
  );
}
