import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import Iconify from 'src/components/iconify';

const MainImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  borderRadius: theme.spacing(1),
}));

const Thumbnail = styled(Box)(({ selected }) => ({
  width: 80,
  height: 60,
  borderRadius: 8,
  overflow: 'hidden',
  border: selected ? '2px solid #000' : '2px solid transparent',
  cursor: 'pointer',
  flexShrink: 0,
}));

const images = [
  { id: 1, url: '/assets/images/home/spotlight.png' },
  { id: 2, url: '/assets/images/home/spotlight.png' },
  { id: 3, url: '/assets/images/home/spotlight.png' },
  { id: 4, url: '/assets/images/home/spotlight.png' },
  { id: 5, url: '/assets/images/home/spotlight.png' },
  { id: 6, url: '/assets/images/home/spotlight.png' },
  { id: 7, url: '/assets/images/home/spotlight.png' },
  { id: 8, url: '/assets/images/home/spotlight.png' },
  { id: 9, url: '/assets/images/home/spotlight.png' },
];

export default function ImageGalleryCarousel() {
  const mainSlider = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settingsMain = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    mainSlider.current.slickGoTo(index);
  };

  const handlePrev = () => {
    mainSlider.current.slickPrev();
  };

  const handleNext = () => {
    mainSlider.current.slickNext();
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Main Image */}
      <MainImageWrapper sx={{ height: 400 }}>
        <Slider ref={mainSlider} {...settingsMain}>
          {images.map((img) => (
            <Box key={img.id} sx={{ width: '100%', height: 400 }}>
              <img
                src={img.url}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 8,
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
        }}
      >
        {/* Arrows */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              backgroundColor: 'white',
              boxShadow: 2,
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Iconify icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: 'white',
              boxShadow: 2,
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Iconify icon="eva:arrow-ios-forward-fill" />
          </IconButton>
        </Box>

        {/* Thumbnails */}
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            ml: 2,
            flexGrow: 1,
          }}
        >
          {images.map((img, index) => (
            <Thumbnail
              key={img.id}
              selected={index === currentIndex}
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
    </Box>
  );
}
