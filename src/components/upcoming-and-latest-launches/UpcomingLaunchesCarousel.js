import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Carousel, { useCarousel } from 'src/components/carousel';
import Iconify from 'src/components/iconify';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import upcomingLatestImage from 'src/assets/media/landing/upcoming-latest.png';
import LaunchCard from './LaunchCard'; // from step above

const launches = [
  {
    id: 1,
    title: 'Quambiant 123',
    type: '3/4 BHK Luxury Apartments',
    location: 'Hyderabad, IN',
    image: upcomingLatestImage,
    tags: ['Clubhouse & Wellness', 'Sustainable Living'],
    timeline: [
      {
        title: 'Structural Completion',
        date: '2026 Q4',
        status: 'ongoing',
      },
      {
        title: 'Interiors & Finishing',
        date: '2027 Q3',
        status: 'upcoming',
      },
      {
        title: 'Handover',
        date: '2028 Q2',
        status: 'future',
      },
    ],
  },
  {
    id: 2,
    title: 'Quambiant 123',
    type: '3/4 BHK Luxury Apartments',
    location: 'Hyderabad, IN',
    image: upcomingLatestImage,
    tags: ['Clubhouse & Wellness', 'Sustainable Living'],
    timeline: [
      {
        title: 'Structural Completion',
        date: '2026 Q4',
        status: 'ongoing',
      },
      {
        title: 'Interiors & Finishing',
        date: '2027 Q3',
        status: 'upcoming',
      },
      {
        title: 'Handover',
        date: '2028 Q2',
        status: 'future',
      },
    ],
  },
  {
    id: 3,
    title: 'Quambiant 123',
    type: '3/4 BHK Luxury Apartments',
    location: 'Hyderabad, IN',
    image: upcomingLatestImage,
    tags: ['Clubhouse & Wellness', 'Sustainable Living'],
    timeline: [
      {
        title: 'Structural Completion',
        date: '2026 Q4',
        status: 'ongoing',
      },
      {
        title: 'Interiors & Finishing',
        date: '2027 Q3',
        status: 'upcoming',
      },
      {
        title: 'Handover',
        date: '2028 Q2',
        status: 'future',
      },
    ],
  },
];

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  padding: theme.spacing(6, 0),
  backgroundColor: '#FDF8F3',
}));

const CustomArrow = ({ direction, onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      border: '1px solid black',
      borderRadius: 0,
      color: 'black',
      bgcolor: 'white',
      mx: 1,
      '&:hover': {
        bgcolor: 'black',
        color: 'white',
      },
    }}
  >
    <Iconify icon={`eva:arrow-ios-${direction}-fill`} />
  </IconButton>
);

CustomArrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function UpcomingLaunchesCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const carousel = useCarousel({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '16px',
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
        <Box sx={{ pl: 2, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h1" sx={{ fontWeight: 500 }}>
            Upcoming and Latest Launches
          </Typography>
          <Typography
            sx={{
              pt: 1,
              fontFamily: 'Satoshi Variable, sans-serif',
              fontWeight: 500,
              color: '#5C6170',
              fontSize: { xs: 14, md: 20 },
            }}
          >
            Be the first to discover the hottest launches in Hyderabad
          </Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ pr: 2 }}>
            <CustomArrow direction="back" onClick={carousel.onPrev} />
            <CustomArrow direction="forward" onClick={carousel.onNext} />
          </Box>
        )}
      </Box>

      <Box sx={{ px: { xs: 0, md: 4 } }}>
        <Carousel
          ref={carousel.carouselRef}
          {...carousel.carouselSettings}
          sx={{
            '& .slick-list': {
              margin: {
                xs: '0 -15px',
                md: '0 -30px', // Increased negative margin for desktop
              },
            },
            '& .slick-slide': {
              padding: {
                xs: '0 15px',
                md: '0 30px', // Increased padding for desktop
              },
              boxSizing: 'border-box',
            },
            '& .slick-slide > div': {
              padding: {
                xs: '20px',
                md: '30px', // Increased inner padding for desktop
              },
              boxSizing: 'border-box',
            },
          }}
        >
          {launches.map((project) => (
            <LaunchCard key={project.id} project={project} />
          ))}
        </Carousel>

        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CustomArrow direction="back" onClick={carousel.onPrev} />
            <CustomArrow direction="forward" onClick={carousel.onNext} />
          </Box>
        )}
      </Box>
    </CarouselContainer>
  );
}
