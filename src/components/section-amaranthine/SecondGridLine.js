import React, { useRef, forwardRef } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, motionValue } from 'framer-motion';
import ImageBox from './ImageBox';

export default function SecondGridLine({ fifthItemScale, fifthItemOpacity, data }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const images = [data?.GallaryImage4?.url, data?.GallaryImage6?.url];

  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const spacingAnimation = useTransform(scrollYProgress, [0.4, 0.5], [8, 16]);
  const paddingAnimation = useTransform(scrollYProgress, [0.4, 0.5], [0, 8]);
  const imageOpacity0 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const imageOpacity1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const defaultScale = useTransform(scrollYProgress, [0.7, 1], [1, 1.2]);

  const titleBlockScale = fifthItemScale || defaultScale;
  const fallbackTitleBlockOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const titleBlockOpacity = fallbackTitleBlockOpacity;

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

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              position: 'relative',
              zIndex: 20, // Place on top of AmaranthineCard
            }}
          >
            <m.div
              style={{
                position: 'relative',
                zIndex: 20,
                margin: spacingAnimation,
                scale: titleBlockScale,
                opacity: titleBlockOpacity,
                transformOrigin: 'center 75%',
                willChange: 'transform, opacity',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#0A2640',
                  width: '100%',
                  color: 'white',
                  aspectRatio: '35 / 35',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  py: 6,
                  px: 2,
                }}
              >
                <Typography fontFamily="Satoshi Variable" fontSize={38} fontWeight={400}>
                  {data?.GallaryTextSection5}
                </Typography>
                <Typography mt={1} fontSize={12} fontWeight={500}>
                  {data?.GallarySubTextSection5}
                </Typography>
              </Box>
            </m.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <m.div style={{ margin: spacingAnimation, opacity: imageOpacity1 }}>
              <ImageBox src={images[1]} alt="Image 2" scrollYProgress={scrollYProgress} />
            </m.div>
          </Grid>
        </Grid>
      </m.div>
    </Box>
  );
}

SecondGridLine.propTypes = {
  data: PropTypes.object,
  fifthItemScale: PropTypes.object,
  fifthItemOpacity: PropTypes.object,
};
