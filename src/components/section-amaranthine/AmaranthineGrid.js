import React, { useRef, useEffect, useState } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, useSpring } from 'framer-motion';
import ImageBox from './ImageBox';
import AmaranthineCard from './AmaranthineCard';

export default function AmaranthineGrid({ data, setSharedScroll }) {
  const images = [
    data?.GallaryImage1?.url,
    data?.GallaryImage2?.url,
    data?.GallaryImage3?.url,
    data?.GallaryImage4?.url,
    data?.GallaryImage6?.url,
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);

  const [screenAspectRatio, setScreenAspectRatio] = useState(1);

  useEffect(() => {
    const updateAspectRatio = () => {
      setScreenAspectRatio(window.innerWidth / window.innerHeight);
    };
    updateAspectRatio();
    window.addEventListener('resize', updateAspectRatio);
    return () => window.removeEventListener('resize', updateAspectRatio);
  }, []);

  // Add this ref for outer container
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  useEffect(() => {
    if (setSharedScroll) {
      setSharedScroll(scrollYProgress);
    }
  }, [scrollYProgress, setSharedScroll]);

  // Scale from 1 to 2 as soon as scroll position reaches 0.7
  const defaultScale = useSpring(useTransform(scrollYProgress, [0.7, 1], [1, 5]), {
    stiffness: 150,
    damping: 20,
  });

  // Smooth spacing animations with spring physics
  const spacingAnimation = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 20]), {
    stiffness: 50,
    damping: 15,
    mass: 0.2,
    restDelta: 0.001,
    restSpeed: 0.01,
  });

  const spacingAnimation2 = useSpring(useTransform(scrollYProgress, [0.4, 0.6], [1, 20]), {
    stiffness: 50,
    damping: 15,
    mass: 0.2,
    restDelta: 0.001,
    restSpeed: 0.01,
  });

  const transition = {
    start: 0.6,
    mid1: 0.6,
    mid2: 0.65,
    mid3: 0.7,
    mid4: 0.75,
    mid5: 0.8,
    mid6: 0.85,
    mid7: 0.9,
    end: 0.95,
    end2: 1,
  };
  // From 1 (35/35 = 1) to screenAspectRatio slowly
  const animatedAspectRatio = useTransform(
    scrollYProgress,
    [transition.mid4, transition.end],
    [1, screenAspectRatio]
  );

  const fifthItemScale = useTransform(
    scrollYProgress,
    [
      transition.start,
      transition.mid1,
      transition.mid2,
      transition.mid3,
      transition.mid4,
      transition.mid5,
      transition.mid6,
      transition.mid7,
      transition.end,
    ],
    [0.7, 1, 1.5, 2, 2.5, 2.75, 3, 3, 3]
  );

  const backgroundColorOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.9],
    [1, 0.7, 0.3, 0]
  );

  const backgroundImageOpacity = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 1, 1, 1, 1]
  );

  const backgroundImage = data?.SpotlightImage?.url
    ? `url(${process.env.REACT_APP_HOST_API}${data.SpotlightImage.url})`
    : '';

  // Add smooth transitions for other animations
  const smoothDefaultScale = useSpring(defaultScale, { stiffness: 100, damping: 30 });
  const paddingAnimation = useTransform(scrollYProgress, [0.2, 0.6], [0, 8]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imageOpacity0 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const imageOpacity1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const imageOpacity3 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const imageOpacity4 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  const titleBlockScale = fifthItemScale || defaultScale;
  const fallbackTitleBlockOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const titleBlockOpacity = fallbackTitleBlockOpacity;

  const highlightSectionProgress = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);

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
        ref={containerRef}
        sx={{
          position: 'relative',
          height: '350vh', // Increased height to allow more scroll space
          width: '100%',
        }}
      >
        {/* Your Sticky Box remains the same */}

        <Box
          ref={ref}
          sx={{
            position: 'sticky',
            top: { xs: '-30vh', lg: '-50vh' },
            '@media (min-width: 1280px) and (max-width: 1440px)': {
              top: '-30vh',
            },
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            willChange: 'transform',
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
                <m.div style={{ margin: spacingAnimation2, opacity: imageOpacity3 }}>
                  <ImageBox src={images[3]} alt="Image 4" scrollYProgress={scrollYProgress} />
                </m.div>
              </Grid>

              {/* Title Grid */}

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  position: 'relative',
                  zIndex: 20,
                }}
              >
                <m.div
                  style={{
                    position: 'relative',
                    zIndex: 20,
                    margin: spacingAnimation2,
                    scale: titleBlockScale,
                    opacity: titleBlockOpacity,
                    transformOrigin: 'center 50%',
                    willChange: 'transform, opacity',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      color: 'white',
                      textAlign: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      py: 6,
                      px: 2,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    component={m.div}
                    style={{
                      aspectRatio: animatedAspectRatio,
                    }}
                  >
                    {/* Keep the existing background layers */}
                    <m.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: backgroundImageOpacity,
                        zIndex: 1,
                      }}
                    />
                    <m.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#0A2640',
                        opacity: backgroundColorOpacity,
                        zIndex: 2,
                      }}
                    />
                    {/* Keep the existing text content */}
                    <Box sx={{ position: 'relative', zIndex: 3 }}>
                      <m.div style={{ opacity: backgroundColorOpacity }}>
                        <Typography
                          fontFamily="Satoshi Variable"
                          fontSize={38}
                          fontWeight={400}
                          color="white"
                        >
                          {data?.GallaryTextSection5}
                        </Typography>
                        <Typography mt={1} fontSize={12} fontWeight={500} color="white">
                          {data?.GallarySubTextSection5}
                        </Typography>
                      </m.div>
                    </Box>
                    {/* <m.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 4,
                        opacity: showHighlightSection,
                      }}
                    >
                      <AmaranthineCard data={data} scrollYProgress={scrollYProgress} />
                    </m.div> */}
                  </Box>
                </m.div>
              </Grid>

              {/* Last image (image[4]) */}
              <Grid item xs={12} sm={6} md={4}>
                <m.div style={{ margin: spacingAnimation2, opacity: imageOpacity4 }}>
                  <ImageBox src={images[4]} alt="Image 6" scrollYProgress={scrollYProgress} />
                </m.div>
              </Grid>
            </Grid>
          </m.div>
        </Box>

        <m.div
          style={{
            position: 'sticky',
            bottom: 0,
            minHeight: '350vh',
            overflow: 'hidden',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            willChange: 'transform',
            opacity: highlightSectionProgress
          }}
        >
          <AmaranthineCard data={data} scrollYProgress={scrollYProgress} />
        </m.div>
      </Box>
  );
}

AmaranthineGrid.propTypes = {
  data: PropTypes.object,
  setSharedScroll: PropTypes.object.isRequired,
};
