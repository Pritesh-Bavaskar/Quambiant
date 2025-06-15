import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, styled } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

const StickyContainer = styled(Box)({
  position: 'relative',
  minHeight: '400vh',
  width: '100%',
  overflow: 'hidden',
});

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4, 0),
  position: 'sticky',
  top: 0,
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  overflow: 'visible',
  maxWidth: 'none',
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: theme.spacing(2),
  width: '100%',
  margin: 0,
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const GridItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  aspectRatio: '1/1',
  backgroundColor: theme.palette.grey[200],
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  display: 'block',
});

const ColorBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage',
})(({ backgroundImage }) => ({
  backgroundColor: '#0F2F50',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: '100%',
  transformOrigin: 'center center',
  willChange: 'width, height, transform',
  zIndex: 2,

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

  '& .content': {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'opacity 0.5s ease',
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

const AmaranthineAnimation = ({ data }) => {
  const images = [
    data?.GallaryImage1?.url,
    data?.GallaryImage2?.url,
    data?.GallaryImage3?.url,
    data?.GallaryImage4?.url,
    data?.GallaryImage6?.url,
  ];

  const containerRef = useRef(null);
  const colorBoxRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!colorBoxRef.current || !containerRef.current) return;

    const box = colorBoxRef.current;
    const rect = box.getBoundingClientRect();

    const targetWidth = window.innerWidth;
    const targetHeight = window.innerHeight;

    const deltaX = (targetWidth - rect.width) / 2;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: 'center center',
        end: '+=100%',
        scrub: true,
        pin: containerRef.current,
        markers: true,
      },
    });
    tl.to(box, {
      width: targetWidth,
      height: targetHeight,
      x: -deltaX,
      y: 0, // ✅ Don't shift upward — this is what causes the image to overflow top
      ease: 'power2.inOut',
    });

    gsap.to(box.querySelector('.bg-image'), {
      opacity: 1,
      scrollTrigger: {
        trigger: box,
        start: 'center center',
        end: '+=100%',
        scrub: true,
      },
    });

    gsap.to(box.querySelector('.content'), {
      opacity: 0,
      scrollTrigger: {
        trigger: box,
        start: 'center center',
        end: '+=100%',
        scrub: true,
      },
    });

    // eslint-disable-next-line consistent-return
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  const backgroundImage = data?.SpotlightImage?.url
    ? `url(${process.env.REACT_APP_HOST_API}${data.SpotlightImage.url})`
    : '';
  console.log(backgroundImage);

  return (
    <StickyContainer>
      <StyledContainer ref={containerRef}>
        <GridContainer>
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[0]}`} alt="Grid Item 1" />
          </GridItem>
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[1]}`} alt="Grid Item 2" />
          </GridItem>
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[2]}`} alt="Grid Item 3" />
          </GridItem>

          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[3]}`} alt="Grid Item 4" />
          </GridItem>
          <ColorBox ref={colorBoxRef} backgroundImage={backgroundImage}>
            <Box className="bg-image" />
            <Box className="content">Your Content Here</Box>
          </ColorBox>

          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[4]}`} alt="Grid Item 5" />
          </GridItem>
        </GridContainer>
      </StyledContainer>
    </StickyContainer>
  );
};

AmaranthineAnimation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AmaranthineAnimation;
