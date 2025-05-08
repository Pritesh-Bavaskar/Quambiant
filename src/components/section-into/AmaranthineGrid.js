import { Grid, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import amaranthineImage1 from 'src/assets/media/landing/grid/grid-img1.png';
import amaranthineImage2 from 'src/assets/media/landing/grid/grid-img2.png';
import amaranthineImage3 from 'src/assets/media/landing/grid/grid-img3.png';
import amaranthineImage4 from 'src/assets/media/landing/grid/grid-img4.png';
import amaranthineImage5 from 'src/assets/media/landing/grid/grid-img5.png';
import amaranthineImage6 from 'src/assets/media/landing/grid/grid-img6.png';

export default function AmaranthineGrid() {
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

  return (
    <Grid ref={ref} container spacing={2} justifyContent="center" sx={{ p: 2.5 }}>
      {images.map((img, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <ImageBox src={img} alt={`Image ${index + 1}`} scrollYProgress={scrollYProgress} />
        </Grid>
      ))}
    </Grid>
  );
}

function ImageBox({ src, alt, scrollYProgress }) {
  const ref = useRef(null);
  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        borderRadius: 0,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'relative',
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
          opacity,
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

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  scrollYProgress: PropTypes.object.isRequired,
};

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
