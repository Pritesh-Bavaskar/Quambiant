import PropTypes from 'prop-types';
import React, { useRef } from 'react';

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
import Iconify from 'src/components/iconify';

// SVG Icons
const PlayIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.3906 12.846C19.0371 14.189 17.3667 15.138 14.0257 17.0361C10.796 18.8709 9.1812 19.7884 7.87983 19.4196C7.3418 19.2671 6.85159 18.9776 6.45624 18.5787C5.5 17.6139 5.5 15.7426 5.5 12C5.5 8.2574 5.5 6.3861 6.45624 5.42132C6.85159 5.02245 7.3418 4.73288 7.87983 4.58042C9.1812 4.21165 10.796 5.12907 14.0257 6.96393C17.3667 8.86197 19.0371 9.811 19.3906 11.154C19.5365 11.7084 19.5365 12.2916 19.3906 12.846Z"
      fill="#FDF8F3"
    />
  </svg>
);

const PauseIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.5 6C9.5 5.44772 9.05228 5 8.5 5C7.94772 5 7.5 5.44772 7.5 6V18C7.5 18.5523 7.94772 19 8.5 19C9.05228 19 9.5 18.5523 9.5 18V6Z"
      fill="#FDF8F3"
    />
    <path
      d="M17.5 6C17.5 5.44772 17.0523 5 16.5 5C15.9477 5 15.5 5.44772 15.5 6V18C15.5 18.5523 15.9477 19 16.5 19C17.0523 19 17.5 18.5523 17.5 18V6Z"
      fill="#FDF8F3"
    />
  </svg>
);

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
  maxWidth: '89%',
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
    width: '90%',
    aspectRatio: 'auto',
  },
}));

const AspectContentSection = styled(StyledContentSection)(({ theme }) => ({
  backgroundColor: '#E5F5FC',
  width: '60%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    aspectRatio: 'auto',
  },
}));

// ----------------------------------------------------------------------

// const storiesData = [
//   {
//     id: '1',
//     title: 'From the first visit to the final handover, everything was seamless',
//     description:
//       "We were looking for a home that felt modern yet warm, and Quambiant delivered beyond our expectations. The craftsmanship, the materials, and the attention to detail are unmatched. We couldn't be happier.",
//     name: 'Ashwin Pradeep',
//     location: 'Bengaluru',
//     coverUrl: '/assets/images/home/homestories.png',
//   },
//   {
//     id: '2',
//     title: 'Innovation Hub',
//     description:
//       'Explore our state-of-the-art facilities where creativity meets technology. See how we push boundaries and create solutions for tomorrow.',
//     name: 'Sarah Chen',
//     location: 'Mumbai',
//     coverUrl: '/assets/images/home/homestories2.png',
//   },
//   {
//     id: '3',
//     title: 'Team Spirit',
//     description:
//       'Meet the passionate individuals behind our success. Learn about our collaborative culture and the values that drive us forward.',
//     name: 'Rajesh Kumar',
//     location: 'Delhi',
//     coverUrl: '/assets/images/home/homestories.png',
//   },
// ];

// ----------------------------------------------------------------------

export default function HomeStories({ homeStories }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Transform homeStories to match the required format
  const transformedStories = React.useMemo(() => {
    if (!homeStories || homeStories.length === 0) {
      return []; // Return empty array if no stories provided
    }
    return homeStories?.HomeStoriesSlider?.map((story) => ({
      id: story.id.toString(),
      title: story.Heading,
      description: story.SubHeading,
      name: story.Name,
      location: story.State,
      coverUrl: story.Media?.url ? `${process.env.REACT_APP_HOST_API}${story.Media.url}` : '',
      posterUrl: story.ThumbnaiImage?.url
        ? `${process.env.REACT_APP_HOST_API}${story.ThumbnaiImage.url}`
        : '',
    }));
  }, [homeStories]);

  // If no stories to display, return null or a placeholder
  if (!transformedStories || transformedStories.length === 0) {
    return null; // or return a placeholder/loading state if preferred
  }

  const handleNext = () => {
    if (transformedStories.length > 0) {
      setActiveStep((prevStep) => (prevStep + 1) % transformedStories.length);
    }
  };

  const handlePrev = () => {
    if (transformedStories.length > 0) {
      setActiveStep(
        (prevStep) => (prevStep - 1 + transformedStories.length) % transformedStories.length
      );
    }
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
        <Typography variant="h1">{homeStories?.Heading}</Typography>
        <Typography
          sx={{
            mt: 1,
            fontWeight: 500,
            maxWidth: { xs: '90%', md: 900 },
            mx: 'auto',
            fontSize: { xs: 14, md: 20 },
          }}
        >
          {homeStories?.SubHeading}
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
                p: { xs: '20px', md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h1" sx={{ fontWeight: 500, mb: 2, color: '#18191B' }}>
                {transformedStories[activeStep].title}
              </Typography>
              <Typography variant="body3" sx={{ color: '#5C6170', mb: 4, fontWeight: '500' }}>
                {transformedStories[activeStep].description}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Satoshi Variable',
                  fontSize: 18,
                  fontStyle: 'italic',
                  color: '#18191B',
                  fontWeight: 500,
                  mb: 0,
                }}
              >
                {transformedStories[activeStep].name} – {transformedStories[activeStep].location}
              </Typography>
            </CardContent>
          </AspectContentSection>
          <AspectImageSection sx={{ width: '100%', mb: 2 }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                mt: 0.5,
                cursor: 'pointer',
                '&:hover .play-button': {
                  opacity: 1,
                },
              }}
              onClick={togglePlayPause}
            >
              <video
                ref={videoRef}
                src={transformedStories[activeStep].coverUrl}
                poster={transformedStories[activeStep].posterUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loop
                playsInline
              >
                <track src="" kind="captions" srcLang="en" label="No captions available" default />
              </video>
              <Box
                className="play-button"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isPlaying ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                  backdropFilter: 'blur(18px)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <IconButton
                  sx={{ color: 'white', width: 50, height: 50, ml: isPlaying ? 0 : '4px' }}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </IconButton>
              </Box>
            </Box>
          </AspectImageSection>
          {transformedStories.length > 1 && (
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
          )}
        </Box>
      ) : (
        <StyledRoot>
          <AspectImageSection>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
                '&:hover .play-button': {
                  opacity: 1,
                },
              }}
              onClick={togglePlayPause}
            >
              <video
                ref={videoRef}
                src={transformedStories[activeStep].coverUrl}
                poster={transformedStories[activeStep].posterUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loop
                playsInline
              >
                <track src="" kind="captions" srcLang="en" label="No captions available" default />
              </video>
              <Box
                className="play-button"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isPlaying ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  },
                }}
              >
                <IconButton
                  sx={{ color: 'white', width: 30, height: 30, ml: isPlaying ? 0 : '4px' }}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </IconButton>
              </Box>
            </Box>
          </AspectImageSection>
          <AspectContentSection>
            <CardContent
              sx={{
                height: '100%',
                position: 'relative',
                p: { xs: 2, sm: 3, md: 4 },
                maxWidth: 900, // limit content width on larger screens
                mx: 'auto', // center horizontally
              }}
            >
              {/* Title */}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 500,
                  mb: 4,
                  color: '#18191B',
                  lineHeight: {
                    xs: '2.4rem',
                    sm: '2.6rem',
                    md: '3rem',
                    lg: '3.4rem',
                  },
                  fontSize: {
                    xs: '24px',
                    sm: '28px',
                    md: '42px',
                  },
                }}
              >
                {transformedStories[activeStep].title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                  },
                  lineHeight: {
                    xs: '1.6rem',
                    sm: '1.8rem',
                    md: '2rem',
                  },
                  fontWeight: 500,
                  maxHeight: { xs: 150, sm: 180, md: 200 }, // adjust as needed
                  overflowY: 'auto',
                  pr: 1, // add space so text doesn't cut off behind hidden scrollbar

                  // Hide scrollbar across browsers
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                  scrollbarWidth: 'none', // Firefox
                  msOverflowStyle: 'none', // IE/Edge
                }}
              >
                {transformedStories[activeStep].description}
              </Typography>

              {/* Footer with name/location and nav buttons */}
              <Box
                sx={{
                  position: 'absolute',
                  right: 24,
                  bottom: { xs: 16, sm: 24, md: 0 },
                  left: 24,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap', // allows stacking if space is tight
                  gap: 2,
                  zIndex: 2,
                }}
              >
                {/* Name & Location */}
                <Typography
                  sx={{
                    fontFamily: 'Satoshi Variable',
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 22,
                    },
                    fontStyle: 'italic',
                    color: '#18191B',
                    fontWeight: 500,
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {transformedStories[activeStep].name} – {transformedStories[activeStep].location}
                </Typography>
                {transformedStories.length > 1 && (
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
                )}
              </Box>
            </CardContent>
          </AspectContentSection>
        </StyledRoot>
      )}
    </StyledSection>
  );
}

HomeStories.propTypes = {
  homeStories: PropTypes.object,
};
