import React, { useRef, forwardRef } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, motionValue } from 'framer-motion';


export default function ImageBox({ src, alt, scrollYProgress }) {
  const ref = useRef(null);
  // const validScrollYProgress = scrollYProgress || motionValue(0);
  // const scale = useTransform(validScrollYProgress, [0, 1], [1.4, 1]);

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: { xs: '17 / 19', md: '35 / 35' },
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'relative',
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
          // scale,
          transformOrigin: 'center center',
        }}
      >
        <img
          src={`${process.env.REACT_APP_HOST_API}${src}`}
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

ImageBox.displayName = 'ImageBox';

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  scrollYProgress: PropTypes.object,
};
