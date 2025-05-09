import React, { useRef, useEffect } from 'react';
import { Grid, Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, motionValue } from 'framer-motion'; // Ensure motionValue is imported
import amaranthineImage1 from 'src/assets/media/landing/grid/grid-img1.png';
import amaranthineImage2 from 'src/assets/media/landing/grid/grid-img2.png';
import amaranthineImage3 from 'src/assets/media/landing/grid/grid-img3.png';
import amaranthineImage4 from 'src/assets/media/landing/grid/grid-img4.png';
import amaranthineImage5 from 'src/assets/media/landing/grid/grid-img5.png';
import amaranthineImage6 from 'src/assets/media/landing/grid/grid-img6.png';

export default function AmaranthineGrid({ onFifthImageProgress = () => {} }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const ref = useRef(null);

  // Scroll tracking for desktop
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Only create the transform if scrollYProgress exists
  const fifthImageProgress = useTransform(
    scrollYProgress || 0, // Fallback to 0 if scrollYProgress is undefined
    [0.3, 0.5],
    [0, 1]
  );

  useEffect(() => {
    if (!isMobile && fifthImageProgress) {
      const unsubscribe = fifthImageProgress.onChange(onFifthImageProgress);
      return () => {
        unsubscribe(); // Ensure cleanup
      };
    }
    return undefined; // Ensure that the useEffect always returns something
  }, [fifthImageProgress, onFifthImageProgress, isMobile]);

  const images = [
    amaranthineImage1,
    amaranthineImage2,
    amaranthineImage3,
    amaranthineImage4,
    amaranthineImage5,
    amaranthineImage6,
  ];

  if (isMobile) {
    // Mobile view layout
    return (
      <Box ref={ref} sx={{ px: 2, width: '100%', pt: 30 }}>
        <Grid container spacing={2}>
          {/* Top 2 images */}
          <Grid item xs={6}>
            <ImageBox src={images[0]} alt="img1" />
          </Grid>
          <Grid item xs={6}>
            <ImageBox src={images[1]} alt="img2" />
          </Grid>

          {/* Center title block */}
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: '#0A2640',
                color: 'white',
                aspectRatio: '35 / 26',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                py: 6,
                px: 2,
              }}
            >
              <Typography fontFamily={`'Playfair Display', serif`} fontSize={24} fontWeight={600}>
                AMARANTHINE
              </Typography>
              <Typography mt={1} fontSize={14}>
                2/3 BHK LUXURY APARTMENTS
              </Typography>
            </Box>
          </Grid>

          {/* Bottom 2 images */}
          <Grid item xs={6}>
            <ImageBox src={images[2]} alt="img3" />
          </Grid>
          <Grid item xs={6}>
            <ImageBox src={images[3]} alt="img4" />
          </Grid>
        </Grid>
      </Box>
    );
  }

  // Desktop View (Unchanged)
  return (
    <Grid
      ref={ref}
      container
      rowSpacing={2}
      columnSpacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        height: 'fit-content',
        px: 4,
        pt: 30,
      }}
    >
      {images.map((img, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <ImageBox
            src={img}
            alt={`Image ${index + 1}`}
            scrollYProgress={scrollYProgress}
            isFifthImage={index === 4}
            fifthImageProgress={fifthImageProgress}
          />
        </Grid>
      ))}
    </Grid>
  );
}

function ImageBox({ src, alt, scrollYProgress, isFifthImage = false, fifthImageProgress }) {
  const ref = useRef(null);

  // Ensure default motion values if the progress values are undefined or null
  const validScrollYProgress = scrollYProgress || motionValue(0); // Default to motionValue(0)
  const validFifthImageProgress = fifthImageProgress || motionValue(0); // Default to motionValue(0)

  // Default scale if no progress
  const defaultScale = useTransform(validScrollYProgress, [0, 1], [1.4, 1]);

  // For the fifth image, use a different scale based on the `fifthImageProgress`
  const fifthImageScale = useTransform(validFifthImageProgress, [0, 1], [1, 1.3]);

  // Use the scale transform depending on whether it's the 5th image
  const scale = isFifthImage ? fifthImageScale : defaultScale;

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: { xs: '17 / 19', md: '43 / 30' },
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: isFifthImage ? 10 : 1,
        flexGrow: 1,
      }}
    >
      <m.div
        ref={ref}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          scale,
          transformOrigin: 'center center',
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </m.div>
    </Box>
  );
}

AmaranthineGrid.propTypes = {
  onFifthImageProgress: PropTypes.func,
};

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  scrollYProgress: PropTypes.object,
  isFifthImage: PropTypes.bool,
  fifthImageProgress: PropTypes.object,
};
