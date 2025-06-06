import React, { useRef, forwardRef } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, motionValue } from 'framer-motion';
import ImageBox from './ImageBox'

export default function AmaranthineGrid({ fifthItemScale, fifthItemOpacity, data }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const images = [
    data?.GallaryImage1?.url,
    data?.GallaryImage2?.url,
    data?.GallaryImage3?.url,
    data?.GallaryImage4?.url,
    data?.GallaryImage6?.url,
  ];

  const defaultScale = useTransform(scrollYProgress, [0.7, 1], [1, 1.2]);
  const spacingAnimation = useTransform(scrollYProgress, [0.4, 0.8], [8, 24]);
  const paddingAnimation = useTransform(scrollYProgress, [0.4, 0.8], [0, 8]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imageOpacity0 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const imageOpacity1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const imageOpacity3 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const imageOpacity4 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]); // used later

  const titleBlockScale = fifthItemScale || defaultScale;
  const fallbackTitleBlockOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const titleBlockOpacity = fallbackTitleBlockOpacity;

  if (isMobile) {
    return (
      <Box
        ref={ref}
        sx={{
          px: 2,
          width: '100%',
          pt: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: 'md', justifyContent: 'center' }}>
          <Grid item xs={6}>
            <ImageBox src={images[0]} alt="img1" />
          </Grid>
          <Grid item xs={6}>
            <ImageBox src={images[1]} alt="img2" />
          </Grid>

          <Grid item xs={12}>
            <m.div
              style={{
                opacity: titleBlockOpacity,
                scale: titleBlockScale,
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#0A2640',
                  color: 'white',
                  aspectRatio: { xs: '35 / 26', sm: '35 / 20', md: '35 / 26' },
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

  // Desktop view only
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
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

          <Grid item xs={12} sm={6} md={4}>
            <m.div style={{ margin: spacingAnimation, opacity: imageOpacity3 }}>
              <ImageBox src={images[3]} alt="Image 4" scrollYProgress={scrollYProgress} />
            </m.div>
          </Grid>

          {/* Title Block */}
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

          {/* Last image (image[4]) */}
          <Grid item xs={12} sm={6} md={4}>
            <m.div style={{ margin: spacingAnimation, opacity: imageOpacity4 }}>
              <ImageBox src={images[4]} alt="Image 6" scrollYProgress={scrollYProgress} />
            </m.div>
          </Grid>
        </Grid>
      </m.div>
    </Box>
  );
}

AmaranthineGrid.propTypes = {
  fifthItemScale: PropTypes.object,
  fifthItemOpacity: PropTypes.object,
  data: PropTypes.object,
};
