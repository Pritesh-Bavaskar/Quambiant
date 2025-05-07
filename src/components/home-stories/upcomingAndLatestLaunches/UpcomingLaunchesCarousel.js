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
      'Structural Completion – 2026 Q4 (ongoing)',
      'Interiors & Finishing – 2027 Q3',
      'Handover – 2028 Q2',
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
      'Structural Completion – 2026 Q4 (ongoing)',
      'Interiors & Finishing – 2027 Q3',
      'Handover – 2028 Q2',
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
      'Structural Completion – 2026 Q4 (ongoing)',
      'Interiors & Finishing – 2027 Q3',
      'Handover – 2028 Q2',
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
    infinite: true,
    speed: 500,
    arrows: false,
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
        <Box sx={{ pl: 2, textAlign: 'center'}}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Upcoming and Latest Launches
          </Typography>
          <Typography color="text.secondary">
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
              margin: '0 -15px',
            },
            '& .slick-slide': {
              padding: '0 15px',
              boxSizing: 'border-box',
            },
            '& .slick-slide > div': {
              padding: '20px',
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
