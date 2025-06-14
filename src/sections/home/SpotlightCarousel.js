import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify';
import Carousel, { useCarousel } from 'src/components/carousel';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

// const spotlightData = [
//   {
//     id: 1,
//     title: 'Sustainable Living: The Future Of Modern Homes',
//     description:
//       'Discover advances in shaping the future of residential living. Observe our eco-friendly practices, from energy-efficient design.',
//     date: '17 FEB, 2016',
//     image: '/assets/images/home/spotlight.png',
//   },
//   {
//     id: 2,
//     title: 'Sustainable Living: The Future Of Modern Homes',
//     description:
//       'Observe architecture in shaping the future of residential living. Discover how our eco-friendly practices, from energy-efficient design.',
//     date: '17 FEB, 2016',
//     image: '/assets/images/home/spotlight.png',
//   },
//   {
//     id: 3,
//     title: 'Sustainable Living: The Future Of Modern Homes',
//     description:
//       'Discover advances in shaping the future of residential living. Observe our eco-friendly practices, from energy-efficient design.',
//     date: '17 FEB, 2016',
//     image: '/assets/images/home/spotlight.png',
//   },
//   {
//     id: 4,
//     title: 'Sustainable Living: The Future Of Modern Homes',
//     description:
//       'Observe architecture in shaping the future of residential living. Discover how our eco-friendly practices, from energy-efficient design.',
//     date: '17 FEB, 2016',
//     image: '/assets/images/home/spotlight.png',
//   },
// ];

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

export default function SpotlightCarousel({ spotlight }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const spotlightData = spotlight?.Card;
  // [
  //   {
  //     id: 1,
  //     title: 'Sustainable Living: The Future Of Modern Homes',
  //     description:
  //       'Discover advances in shaping the future of residential living. Observe our eco-friendly practices, from energy-efficient design.',
  //     date: '17 FEB, 2016',
  //     image: '/assets/images/home/spotlight.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Sustainable Living: The Future Of Modern Homes',
  //     description:
  //       'Observe architecture in shaping the future of residential living. Discover how our eco-friendly practices, from energy-efficient design.',
  //     date: '17 FEB, 2016',
  //     image: '/assets/images/home/spotlight.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'Sustainable Living: The Future Of Modern Homes',
  //     description:
  //       'Discover advances in shaping the future of residential living. Observe our eco-friendly practices, from energy-efficient design.',
  //     date: '17 FEB, 2016',
  //     image: '/assets/images/home/spotlight.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'Sustainable Living: The Future Of Modern Homes',
  //     description:
  //       'Observe architecture in shaping the future of residential living. Discover how our eco-friendly practices, from energy-efficient design.',
  //     date: '17 FEB, 2016',
  //     image: '/assets/images/home/spotlight.png',
  //   },
  // ];

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

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
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '32px',
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
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
          px: { xs: 2, md: 7 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box maxWidth={914}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 500,
              mb: '10px',
              lineHeight: '1.2',
              color: '#18191B',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {spotlight?.Heading}
          </Typography>
          <Typography
            sx={{
              color: '#5C6170',
              fontSize: { md: '20px', xs: '14px' },
              fontWeight: 500,
              lineHeight: '1.4',
              display: 'flex',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {spotlight?.SubHeading}
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
          px: { xs: 0, md: 6 },
          width: '100%',
          // maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {spotlightData?.map((item, i) => (
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
                image={`${process.env.REACT_APP_HOST_API}${item.Image?.url}`}
                alt={item.Title}
                sx={{ height: 180, objectFit: 'cover' }}
              />
              <CardContent sx={{ padding: '0px', paddingTop: '16px' }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#DDAB76',
                    mb: 0.5,
                    display: 'block',
                    fontFamily: 'Satoshi Variable',
                    fontWeight: 700,
                    fontSize: { md: '14px', xs: '12px' },
                  }}
                >
                  {formatDate(item.Date)}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { md: '20px', xs: '18px' },
                    fontFamily: 'Satoshi Variable',
                    mb: 1,
                  }}
                >
                  {item.Title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: '#333333',
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                    lineHeight: '1.4',
                  }}
                >
                  {item.SubTitle}
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

SpotlightCarousel.propTypes = {
  spotlight: PropTypes.array,
};
