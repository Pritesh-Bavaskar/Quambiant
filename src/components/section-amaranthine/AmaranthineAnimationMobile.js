import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, styled, Typography } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

const StickyContainer = styled(Box)({
  position: 'relative',
  minHeight: '300vh',
  width: '100%',
  backgroundColor: '#f5f5f5',
  overflow: 'hidden',
});

const StyledContainer = styled(Box)({
  position: 'sticky',
  top: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
  boxSizing: 'border-box',
});

const GridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
  width: '100%',
  maxWidth: '500px',
  position: 'relative',
  margin: '0 auto',
});

const TopRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
  marginBottom: '16px',
});

const BottomRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
  marginTop: '16px',
});

const GridItem = styled(Box)({
  position: 'relative',
  width: '100%',
  paddingBottom: '100%',
  overflow: 'hidden',
  backgroundColor: '#f0f0f0',
});

const StyledImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ColorBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage',
})(({ backgroundImage }) => ({
  backgroundColor: '#0F2F50',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '353px',
  height: '260px',
  zIndex: 2,
  padding: '1.5rem',
  textAlign: 'center',
  '& .title': {
    fontSize: '1.8rem',
    fontWeight: 400,
    fontFamily: '"Playfair Display", serif',
    marginBottom: '0.5rem',
    lineHeight: 1.1,
  },
  '& .subtitle': {
    fontSize: '0.9rem',
    fontWeight: 300,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  '& .divider': {
    width: '40px',
    height: '1px',
    backgroundColor: 'white',
    margin: '0.8rem 0',
  },
  '& .bg-image': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0,
    transition: 'opacity 0.5s ease',
    zIndex: 1,
  },
  '&.fullscreen': {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh',
    aspectRatio: 'unset',
    zIndex: 100,
  },
}));

const AmaranthineAnimationMobile = ({ data }) => {
  const images = [
    data?.GallaryImage1?.url,
    data?.GallaryImage2?.url,
    data?.GallaryImage3?.url,
    data?.GallaryImage4?.url,
  ];

  const containerRef = useRef(null);
  const colorBoxRef = useRef(null);

  useEffect(() => {
    if (!colorBoxRef.current || !containerRef.current) return () => {};

    const box = colorBoxRef.current;
    const container = containerRef.current;

    // Set up ScrollTrigger for the sticky container
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=200%',
      pin: true,
      pinSpacing: false,
      markers: true,
      id: 'mobile-container-pin',
    });

    // Animation for the color box
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true,
        markers: true,
        id: 'mobile-box-animation',
      },
    });

    // Set initial scale to fit 353x260 box
    gsap.set(box, {
      width: '353px',
      height: '260px',
      // x: '-50%',
      // y: '-50%',
      transformOrigin: 'center center'
    });

    tl.to(box, {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      x: 0,
      y: 0,
      ease: 'power2.inOut',
    });

    // Background image fade in
    gsap.to(box.querySelector('.bg-image'), {
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true,
      },
    });

    // Text fade out
    gsap.to(box.querySelector('.content'), {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: container,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const backgroundImage = data?.SpotlightImage?.url
    ? `url(${process.env.REACT_APP_HOST_API}${data.SpotlightImage.url})`
    : '';

  return (
    <StickyContainer>
      <StyledContainer ref={containerRef}>
        <TopRow>
          <GridItem>
            <StyledImage
              src={`${process.env.REACT_APP_HOST_API}${images[0]}`}
              alt="Amaranthine 1"
            />
          </GridItem>
          <GridItem>
            <StyledImage
              src={`${process.env.REACT_APP_HOST_API}${images[1]}`}
              alt="Amaranthine 2"
            />
          </GridItem>
        </TopRow>
        <ColorBox ref={colorBoxRef} backgroundImage={backgroundImage}>
          <Box className="bg-image" />
          <Box className="content">
            <Typography variant="h2" className="title">
              AMARANTHINE
            </Typography>
            <Box className="divider" />
            <Typography variant="subtitle1" className="subtitle">
              3/4 BHK LUXURY APARTMENTS
            </Typography>
          </Box>
        </ColorBox>
        <BottomRow>
          <GridItem>
            <StyledImage
              src={`${process.env.REACT_APP_HOST_API}${images[2]}`}
              alt="Amaranthine 3"
            />
          </GridItem>
          <GridItem>
            <StyledImage
              src={`${process.env.REACT_APP_HOST_API}${images[3]}`}
              alt="Amaranthine 4"
            />
          </GridItem>
        </BottomRow>
      </StyledContainer>
    </StickyContainer>
  );
};

AmaranthineAnimationMobile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AmaranthineAnimationMobile;
