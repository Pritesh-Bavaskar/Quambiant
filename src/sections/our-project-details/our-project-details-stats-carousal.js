import { Box, GlobalStyles, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { useCallback, useEffect, useRef, useState } from 'react';
import Iconify from 'src/components/iconify';
import PropTypes from 'prop-types';

const MainImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
}));

const Thumbnail = styled(Box)(({ selected }) => ({
  width: selected ? 80 : 60,
  height: selected ? 80 : 60,
  borderRadius: 0,
  overflow: 'hidden',
  border: '2px solid transparent',
  position: 'relative',
  transform: selected ? 'scale(1.1)' : 'scale(1)',
  transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
  cursor: 'pointer',
  flexShrink: 0,
  ...(selected && {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '3px',
      backgroundColor: '#000',
      animation: 'progressBar 3s linear forwards',
      width: '100%',
      transformOrigin: 'left center',
    },
  }),
}));

const images = [
  { id: 1, url: '/assets/images/home/spotlight.png' },
  { id: 2, url: '/assets/images/home/darkmode.webp' },
  { id: 3, url: '/assets/images/home/homestories2.png' },
  { id: 4, url: '/assets/images/home/homestories.png' },
];

const globalStyles = (
  <GlobalStyles
    styles={{
      '@keyframes progressBar': {
        from: { transform: 'scaleX(0)' },
        to: { transform: 'scaleX(1)' },
      },
    }}
  />
);

const CustomPrevArrow = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      border: '1px solid #FDF8F3',
      borderRadius: '0%',
      color: '#fff', // default icon color is white
      bgcolor: 'transparent',
      mx: 1,
      '&:hover': {
        bgcolor: '#FDF8F3',
        color: '#000', // icon color becomes black on hover
      },
    }}
  >
    <Iconify icon="eva:arrow-ios-back-fill" />
  </IconButton>
);

const CustomNextArrow = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      border: '1px solid #FDF8F3',
      borderRadius: '0%',
      color: '#fff',
      bgcolor: 'transparent',
      mx: 1,
      '&:hover': {
        bgcolor: '#FDF8F3',
        color: '#000',
      },
    }}
  >
    <Iconify icon="eva:arrow-ios-forward-fill" />
  </IconButton>
);

export default function OurProjectDetailsStatsCarousel() {
  const mainSlider = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState(images);
  const [isAnimating, setIsAnimating] = useState(false);

  const settingsMain = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    afterChange: (newIndex) => {
      setIsAnimating(false);
      setCurrentIndex(newIndex);
    },
    draggable: false,
    swipe: false,
    touchMove: false,
  };

  const handleThumbnailClick = (index) => {
    const clicked = thumbnails[index];
    const clickedId = clicked.id;

    // Rotate thumbnails so the clicked one is first
    const rotated = [...thumbnails.slice(index), ...thumbnails.slice(0, index)];
    setThumbnails(rotated);

    // Find the index of the clicked image in the `images` array
    const imageIndex = images.findIndex((img) => img.id === clickedId);
    if (imageIndex !== -1) {
      setCurrentIndex(imageIndex);
      mainSlider.current.slickGoTo(imageIndex);
    }
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;

    const newThumbnails = [...thumbnails];
    const first = newThumbnails.shift();
    if (first) newThumbnails.push(first);
    setThumbnails(newThumbnails);
    mainSlider.current.slickNext();
  }, [isAnimating, thumbnails]);

  const handlePrev = () => {
    if (isAnimating) return;

    const newThumbnails = [...thumbnails];
    const last = newThumbnails.pop();
    if (last) newThumbnails.unshift(last);
    setThumbnails(newThumbnails);
    mainSlider.current.slickPrev();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Clear on unmount
  }, [thumbnails, isAnimating, handleNext]);

  return (
    <>
      {globalStyles}
      <Box sx={{ width: '100%', height: { xs: 400, md: 550 } }}>
        {/* Main Image */}
        <MainImageWrapper sx={{ height: { xs: 400, md: 550 } }}>
          {/* Main Image */}
          <Slider ref={mainSlider} {...settingsMain}>
            {images.map((img) => (
              <Box key={img.id} sx={{ width: '100%', height: { xs: 400, md: 550 } }}>
                <img
                  src={img.url}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100px',
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </Box>
            ))}
          </Slider>
        </MainImageWrapper>

        {/* Arrows + Thumbnails */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 2,
            px: 1,
            position: 'relative',
            bottom: '130px',
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'end', height: '100%', gap: 1 }}>
                <CustomPrevArrow onClick={handlePrev} />
                <CustomNextArrow onClick={handleNext} />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  gap: 2,
                  ml: 2,
                  flexGrow: 1,
                  scrollBehavior: 'smooth',
                  scrollbarWidth: 'none', // Firefox
                  '&::-webkit-scrollbar': {
                    display: 'none', // Chrome, Safari
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  {thumbnails.map((img, index) => (
                    <Thumbnail
                      key={img.id}
                      selected={img.id === images[currentIndex].id}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img
                        src={img.url}
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Thumbnail>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

CustomPrevArrow.propTypes = {
  sx: PropTypes.object,
};

CustomNextArrow.propTypes = {
  sx: PropTypes.object,
};
