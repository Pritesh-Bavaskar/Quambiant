import React, { useRef, forwardRef } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, motionValue } from 'framer-motion';
import ImageBox from './ImageBox';

export default function FirstGridLine({ data }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const images = [data?.GallaryImage1?.url, data?.GallaryImage2?.url, data?.GallaryImage3?.url];

  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const spacingAnimation = useTransform(scrollYProgress, [0.4, 0.8], [8, 16]);
  const paddingAnimation = useTransform(scrollYProgress, [0.4, 0.8], [0, 8]);
  const imageOpacity0 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const imageOpacity1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '30vh',
        width: '100%',
      }}
    >
      <m.div
        style={{
          width: '100%',
          maxWidth: 'xl',
          paddingLeft: paddingAnimation,
          paddingRight: paddingAnimation,
          opacity: gridOpacity,
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <m.div style={{ margin: spacingAnimation, opacity: imageOpacity0 }}>
              <ImageBox src={images[0]} alt="Image 1" scrollYProgress={scrollYProgress} />
            </m.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <m.div style={{ margin: spacingAnimation, opacity: imageOpacity1 }}>
              <ImageBox src={images[1]} alt="Image 2" scrollYProgress={scrollYProgress} />
            </m.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <m.div style={{ margin: spacingAnimation, opacity: imageOpacity2 }}>
              <ImageBox src={images[2]} alt="Image 3" scrollYProgress={scrollYProgress} />
            </m.div>
          </Grid>
        </Grid>
      </m.div>
    </Box>
  );
}

FirstGridLine.propTypes = {
  data: PropTypes.object,
};
