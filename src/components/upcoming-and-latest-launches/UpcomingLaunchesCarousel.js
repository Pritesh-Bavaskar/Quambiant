import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Carousel, { useCarousel } from 'src/components/carousel';
import Iconify from 'src/components/iconify';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import upcomingLatestImage from 'src/assets/media/landing/upcoming-latest.png';
import LaunchCard from './LaunchCard'; // from step above

// Transform API data to match component's expected format
const transformProjects = (projects) => {
  if (!projects || !Array.isArray(projects)) return [];

  return projects.map((project) => ({
    id: project.id,
    title: project.Title,
    type: project.SubTitle,
    location: project.Location,
    image: project.Image?.url
      ? `${process.env.REACT_APP_HOST_API}${project.Image.url}`
      : upcomingLatestImage,
    tags: project.Tags?.map((tag) => tag.Label) || [],
    timeline:
      project.ProjectSteps?.map((step) => ({
        title: step.Title,
        date: step.Date,
        status: step.ProjectStatus?.toLowerCase() || 'upcoming',
      })) || [],
  }));
};

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

export default function UpcomingLaunchesCarousel({ upcomingLaunches }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const launches = transformProjects(upcomingLaunches?.Projects || []);

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
          centerPadding: '8px',
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
        <Box sx={{ pl: { xs: 0, md: 2 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h1" sx={{ fontWeight: 500, color: '#18191B', lineHeight: '1.2' }}>
            {upcomingLaunches?.Heading}
          </Typography>
          <Typography
            sx={{
              pt: 2,
              fontFamily: 'Satoshi Variable, sans-serif',
              fontWeight: 500,
              color: '#5C6170',
              fontSize: { xs: 14, md: 20 },
              lineHeight: '1.2',
            }}
          >
            {upcomingLaunches?.SubHeading}
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

        {isMobile &&
          launches.length > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CustomArrow direction="back" onClick={carousel.onPrev} />
              <CustomArrow direction="forward" onClick={carousel.onNext} />
            </Box>
          )}
      </Box>
    </CarouselContainer>
  );
}

UpcomingLaunchesCarousel.propTypes = {
  upcomingLaunches: PropTypes.object,
};
