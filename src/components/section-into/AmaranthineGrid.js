import React, { useRef, useState, useCallback } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform } from 'framer-motion';
import amaranthineImage1 from 'src/assets/media/landing/grid/grid-img1.png';
import amaranthineImage2 from 'src/assets/media/landing/grid/grid-img2.png';
import amaranthineImage3 from 'src/assets/media/landing/grid/grid-img3.png';
import amaranthineImage4 from 'src/assets/media/landing/grid/grid-img4.png';
import amaranthineImage5 from 'src/assets/media/landing/grid/grid-img5.png';
import amaranthineImage6 from 'src/assets/media/landing/grid/grid-img6.png';

export default function AmaranthineGrid({ onFifthImageProgress = () => {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const images = [
    amaranthineImage1,
    amaranthineImage2,
    amaranthineImage3,
    amaranthineImage4,
    amaranthineImage5,
    amaranthineImage6,
  ];

  // Track the 5th image's animation progress while scrolling through the grid
  const fifthImageProgress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Pass progress to parent component
  const handleProgressChange = useCallback(
    (v) => {
      onFifthImageProgress(v);
    },
    [onFifthImageProgress]
  );

  React.useEffect(() => {
    const unsubscribe = fifthImageProgress.on('change', handleProgressChange);
    return () => unsubscribe();
  }, [fifthImageProgress, handleProgressChange]);

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
  const baseScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const zoomScale = useTransform(fifthImageProgress, [0, 1], [1, 1.3]);

  const scale = React.useMemo(
    () => (isFifthImage ? zoomScale : baseScale),
    [isFifthImage, zoomScale, baseScale]
  );

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '43 / 30', // or use padding-bottom trick if needed
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
