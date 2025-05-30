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
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import readMoreImg from 'src/assets/media/news/read-more.svg';

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
  width: '50%',
  minWidth: 300,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minWidth: 0,
  },
}));

const StyledContentSection = styled(Card)(({ theme }) => ({
  width: '50%',
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
  aspectRatio: '657/570',
  width: '50%',
  minWidth: 0,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'stretch',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    aspectRatio: '353/306',
    margin: '0 auto',
  },
}));

const AspectContentSection = styled(StyledContentSection)(({ theme }) => ({
  aspectRatio: '657/570',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  width: '50%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    aspectRatio: 'auto',
    height: 'auto',
  },
}));

// ----------------------------------------------------------------------

const PostSlider = ({ posts = [] }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!posts || posts.length === 0) {
    return null;
  }

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % posts.length);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => (prevStep - 1 + posts.length) % posts.length);
  };

  const currentPost = posts[activeStep];

  return (
    <StyledSection>
      {isMobile ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AspectImageSection sx={{ width: '100%', mb: 2 }}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative', padding: 2 }}>
              <Image
                alt={currentPost.Heading}
                src={
                  currentPost.Image?.url
                    ? `${process.env.REACT_APP_HOST_API}${currentPost.Image?.url}`
                    : ''
                }
                ratio="16/9"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  right: 16,
                  overflowX: 'auto',
                  display: 'flex',
                  gap: 1,
                  pr: 2,
                  pl: 0.5,
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                  whiteSpace: 'nowrap',
                  cursor: 'grab',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {currentPost.Tags?.map((tag) => (
                  <Chip
                    key={tag?.id}
                    label={tag?.Label}
                    size="small"
                    sx={{
                      backdropFilter: 'blur(6px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid #FFFFFF1A',
                      color: 'white',
                      fontFamily: 'Satoshi Variable',
                      fontSize: '12px',
                      fontWeight: 500,
                      borderRadius: '4px',
                      height: '32px',
                      px: 1.5,
                      py: 0.5,
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      '& .MuiChip-label': {
                        px: 0,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </AspectImageSection>
          <AspectContentSection
            sx={{
              height: { xs: 'auto', md: 'auto' },
              minHeight: { xs: 'auto', md: '570px' },
              mb: 2,
              width: '100%',
            }}
          >
            <CardContent
              sx={{
                height: '100%',
                p: { xs: 2, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{ fontFamily: 'Satoshi Variable', fontWeight: 500, color: '#5C6170', mb: 3 }}
              >
                {currentPost?.ReadTime}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h1" sx={{ fontWeight: 500, color: '#000000' }}>
                  {currentPost?.Heading}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: '#454954', mb: 3, fontWeight: 500, fontSize: '16px' }}
              >
                {currentPost.description}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{
                    fontFamily: 'Satoshi Variable',
                    color: '#001016',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  {currentPost?.ButtonText}
                </Typography>
                <Box component="img" src={readMoreImg} alt="" sx={{ width: 16, height: 16 }} />
              </Stack>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: 'transparent',
                    border: '1px solid',
                    borderColor: '#001016',
                    borderRadius: '2px',
                    color: '#001016',
                    mx: 1,
                    '&:hover': {
                      color: 'primary.contrastText',
                      backgroundColor: '#001016',
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
                    border: '1px solid',
                    borderColor: '#001016',
                    borderRadius: '2px',
                    color: '#001016',
                    mx: 1,
                    '&:hover': {
                      color: 'primary.contrastText',
                      backgroundColor: '#001016',
                    },
                  }}
                >
                  <Iconify icon="eva:arrow-ios-forward-fill" />
                </IconButton>
              </Box>
            </CardContent>
          </AspectContentSection>
        </Box>
      ) : (
        <StyledRoot>
          <AspectImageSection>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                alt={currentPost.title}
                src={currentPost.cover}
                ratio="16/9"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  right: 16,
                  overflowX: 'auto',
                  display: 'flex',
                  gap: 1,
                  pr: 2,
                  pl: 0.5,
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                  whiteSpace: 'nowrap',
                  cursor: 'grab',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {currentPost.categories?.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    size="small"
                    sx={{
                      backdropFilter: 'blur(6px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid #FFFFFF1A',
                      color: 'white',
                      fontFamily: 'Satoshi Variable',
                      fontSize: '14px',
                      fontWeight: 500,
                      borderRadius: '4px',
                      height: '32px',
                      px: 1.5,
                      py: 0.5,
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      '& .MuiChip-label': {
                        px: 0,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </AspectImageSection>
          <AspectContentSection>
            <CardContent
              sx={{
                height: '100%',
                minHeight: '570px',
                position: 'relative',
                p: { xs: 2, md: 4 },
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    color: '#5C6170',
                    mb: 4,
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {currentPost.ReadTime}
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h1" sx={{ fontWeight: 500 }}>
                  {currentPost.Heading}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: '#454954',
                  mb: 4,
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {currentPost?.SubHeading}
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
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#001016',
                    }}
                  >
                    {currentPost.ButtonText}
                  </Typography>
                  <Box component="img" src={readMoreImg} alt="" sx={{ width: 16, height: 16 }} />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: 'transparent',
                      border: '1px solid',
                      borderColor: '#001016',
                      borderRadius: '2px',
                      color: '#001016',
                      '&:hover': {
                        color: 'primary.contrastText',
                        backgroundColor: '#001016',
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
                      border: '1px solid',
                      borderColor: '#001016',
                      borderRadius: '2px',
                      color: '#001016',
                      '&:hover': {
                        color: 'primary.contrastText',
                        backgroundColor: '#001016',
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
};

PostSlider.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default PostSlider;
