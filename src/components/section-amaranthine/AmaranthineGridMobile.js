import React, { useRef, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { m, useTransform, useSpring, useScroll } from 'framer-motion';
import PropTypes from 'prop-types';
import ImageBox from './ImageBox';
import AmaranthineCard from './AmaranthineCard';

const AmaranthineGridMobile = ({
  data,
  scrollYProgress: parentScrollYProgress,
  containerRef: parentContainerRef,
}) => {
  const ref = useRef(null);
  const localContainerRef = useRef(null);

  // Always create a local scrollYProgress
  const localScrollYProgress = useScroll({
    target: localContainerRef,
    offset: ['start end', 'end center'],
  }).scrollYProgress;

  // Use parent's scrollYProgress if provided, otherwise use local one
  const scrollYProgress = parentScrollYProgress || localScrollYProgress;

  // Use parent's containerRef if provided, otherwise use local one
  const containerRef = parentContainerRef || localContainerRef;
  const images = [
    data?.GallaryImage1?.url,
    data?.GallaryImage2?.url,
    data?.GallaryImage3?.url,
    data?.GallaryImage4?.url,
  ];

  const backgroundImage = data?.SpotlightImage?.url
    ? `url(${process.env.REACT_APP_HOST_API}${data.SpotlightImage.url})`
    : '';

  // Scroll progress is now handled in the component parameters

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

  const [screenAspectRatioMobile, setScreenAspectRatioMobile] = useState(1);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkIfTablet = () => {
      const tablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      setIsTablet(tablet);
    };

    const updateAspectRatio = () => {
      setScreenAspectRatioMobile(window.innerWidth / window.innerHeight);
    };

    checkIfTablet();
    updateAspectRatio();

    window.addEventListener('resize', () => {
      checkIfTablet();
      updateAspectRatio();
    });

    return () => {
      window.removeEventListener('resize', () => {
        checkIfTablet();
        updateAspectRatio();
      });
    };
  }, []);

  const backgroundImageOpacity = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 1, 1, 1, 1]
  );

  const spacingAnimationMobile = useSpring(useTransform(scrollYProgress, [0, 0.1], [0, 8]), {
    stiffness: 50,
    damping: 15,
    mass: 0.2,
    restDelta: 0.001,
    restSpeed: 0.01,
  });

  const spacingAnimationMobile2 = useSpring(useTransform(scrollYProgress, [0.1, 0.2], [0, 8]), {
    stiffness: 50,
    damping: 15,
    mass: 0.2,
    restDelta: 0.001,
    restSpeed: 0.01,
  });

  const spacingAnimationMobile3 = useSpring(useTransform(scrollYProgress, [0.2, 0.4], [0, 8]), {
    stiffness: 50,
    damping: 15,
    mass: 0.2,
    restDelta: 0.001,
    restSpeed: 0.01,
  });

  const defaultScaleMobile = useSpring(useTransform(scrollYProgress, [0, 0.1], [1, 5]), {
    stiffness: 150,
    damping: 20,
  });

  const setDefaultAspectRatio = isTablet ? 2 : 1.2;

  const animatedAspectRatioMobile = useTransform(
    scrollYProgress,
    [transition.mid4, transition.end],
    [setDefaultAspectRatio, screenAspectRatioMobile]
  );

  const fifthItemScaleMobile = useTransform(
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
    [0.7, 1, 1.01, 1.02, 1.03, 1.04, 1.04, 1.04, 1.04]
  );

  const titleBlockScaleMobile = fifthItemScaleMobile || defaultScaleMobile;

  const imageOpacityMobile0 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const fallbackTitleBlockOpacityMobile = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const titleBlockOpacityMobile = fallbackTitleBlockOpacityMobile;
  const imageOpacityMobile1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const backgroundColorOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.9],
    [1, 0.7, 0.3, 0]
  );
  const highlightSectionProgress = useTransform(scrollYProgress, [0.95, 0.96], [0, 1]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        height: '250vh',
        width: '100%',
      }}
    >
      <Box
        ref={ref}
        sx={{
          position: 'sticky',
          top: 0,
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
            opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
          }}
        >
          <Grid
            container
            sx={{
              maxWidth: 'md',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <Grid item xs={6}>
              <m.div
                style={{
                  margin: spacingAnimationMobile,
                  opacity: imageOpacityMobile0,
                  position: 'relative',
                }}
              >
                <ImageBox src={images[0]} alt="img1" />
              </m.div>
            </Grid>
            <Grid item xs={6}>
              <m.div
                style={{
                  margin: spacingAnimationMobile,
                  opacity: imageOpacityMobile0,
                  position: 'relative',
                }}
              >
                <ImageBox src={images[1]} alt="img2" />
              </m.div>
            </Grid>

            <Grid item xs={12}>
              <m.div
                style={{
                  position: 'relative',
                  opacity: titleBlockOpacityMobile,
                  scale: titleBlockScaleMobile,
                  margin: spacingAnimationMobile2,
                  zIndex: 1,
                  transformOrigin: 'center center',
                  transformBox: 'fill-box',
                  willChange: 'transform',
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
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  component={m.div}
                  style={{
                    aspectRatio: animatedAspectRatioMobile,
                  }}
                >
                  <m.div
                    style={{
                      position: 'absolute',
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
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#0A2640',
                      opacity: backgroundColorOpacity,
                      zIndex: 2,
                    }}
                  />
                  <Box
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      zIndex: 3,
                      py: 6,
                      px: 2,
                    }}
                  >
                    <m.div style={{ opacity: backgroundColorOpacity }}>
                      <Typography fontFamily="Satoshi Variable" fontSize={38} fontWeight={400}>
                        {data?.GallaryTextSection5}
                      </Typography>
                      <Typography mt={1} fontSize={12} fontWeight={500}>
                        {data?.GallarySubTextSection5}
                      </Typography>
                    </m.div>
                  </Box>
                </Box>
              </m.div>
            </Grid>

            <Grid item xs={6}>
              <m.div
                style={{
                  margin: spacingAnimationMobile3,
                  opacity: imageOpacityMobile1,
                  position: 'relative',
                }}
              >
                <ImageBox src={images[2]} alt="img3" />
              </m.div>
            </Grid>
            <Grid item xs={6}>
              <m.div
                style={{
                  margin: spacingAnimationMobile3,
                  opacity: imageOpacityMobile1,
                  position: 'relative',
                }}
              >
                <ImageBox src={images[3]} alt="img4" />
              </m.div>
            </Grid>
          </Grid>
        </m.div>
      </Box>

      <m.div
        style={{
          position: 'sticky',
          bottom: 0,
          minHeight: '250vh',
          overflow: 'hidden',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          willChange: 'transform',
          opacity: highlightSectionProgress,
        }}
      >
        <AmaranthineCard data={data} scrollYProgress={scrollYProgress} />
      </m.div>
    </Box>
  );
};

AmaranthineGridMobile.propTypes = {
  data: PropTypes.object.isRequired,
  scrollYProgress: PropTypes.object,
  containerRef: PropTypes.object,
};

export default AmaranthineGridMobile;
