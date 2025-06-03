import React, { useRef, forwardRef } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, motionValue } from 'framer-motion';

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
  const spacingAnimation = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const paddingAnimation = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const titleBlockScale = fifthItemScale || defaultScale;
  const titleBlockOpacity = fifthItemOpacity || 1;

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
                <Typography fontFamily={`'Playfair Display', serif`} fontSize={38} fontWeight={400}>
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

  return (
    <>
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
            <m.div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                margin: spacingAnimation,
                columnGap: spacingAnimation,
                rowGap: spacingAnimation,
              }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <m.div style={{ margin: spacingAnimation }}>
                  <ImageBox src={images[0]} alt="Image 1" scrollYProgress={scrollYProgress} />
                </m.div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <m.div style={{ margin: spacingAnimation }}>
                  <ImageBox src={images[1]} alt="Image 2" scrollYProgress={scrollYProgress} />
                </m.div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <m.div style={{ margin: spacingAnimation }}>
                  <ImageBox src={images[2]} alt="Image 3" scrollYProgress={scrollYProgress} />
                </m.div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <m.div style={{ margin: spacingAnimation }}>
                  <ImageBox src={images[3]} alt="Image 4" scrollYProgress={scrollYProgress} />
                </m.div>
              </Grid>

              {/* ✅ STATIC TITLE BLOCK WITH SPECIAL PARALLAX EFFECT */}
              <Grid item xs={12} sm={6} md={4} zIndex={1000}>
                <m.div
                  style={{
                    width: '100%',
                    height: '100%',
                    scale: titleBlockScale,
                    transformOrigin: 'center 75%',
                    opacity: titleBlockOpacity,
                  }}
                >
                  <m.div style={{ margin: spacingAnimation }}>
                    <Box
                      sx={{
                        backgroundColor: '#0A2640',
                        width: '100%',
                        color: 'white',
                        aspectRatio: '43 / 30',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        py: 6,
                        px: 2,
                      }}
                    >
                      <Typography
                        fontFamily={`'Playfair Display', serif`}
                        fontSize={38}
                        fontWeight={400}
                      >
                        {data?.GallaryTextSection5}
                      </Typography>
                      <Typography mt={1} fontSize={12} fontWeight={500}>
                        {data?.GallarySubTextSection5}
                      </Typography>
                    </Box>
                  </m.div>
                </m.div>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <m.div style={{ margin: spacingAnimation }}>
                  <ImageBox src={images[4]} alt="Image 6" scrollYProgress={scrollYProgress} />
                </m.div>
              </Grid>
            </m.div>
          </Grid>
        </m.div>
      </Box>
      {/* Removed the duplicate image box as it was causing issues */}
    </>
  );
}

AmaranthineGrid.propTypes = {
  fifthItemScale: PropTypes.object,
  fifthItemOpacity: PropTypes.object,
  data: PropTypes.object,
};

const ImageBox = forwardRef(({ src, alt, scrollYProgress }, ref) => {
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <m.img
        src={`${process.env.REACT_APP_HOST_API}${src}`}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          scale,
        }}
      />
    </Box>
  );
});

ImageBox.displayName = 'ImageBox';

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  scrollYProgress: PropTypes.object,
};
