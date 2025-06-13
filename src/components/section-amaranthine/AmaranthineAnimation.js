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
  overflow: 'visible',
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
  maxWidth: '100%',
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
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: 0,
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  aspectRatio: '1',
  willChange: 'transform, width, height', // Optimize for performance
  '> div': {
    position: 'relative',
    zIndex: 2,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0F2F50',
    transition: 'all 0.5s ease',
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: backgroundImage || 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0,
    transition: 'opacity 0.5s ease 0.2s',
  },
  '&.expanded::before': {
    opacity: 0,
  },
  '&.expanded::after': {
    opacity: 1,
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
  const backgroundImage = data?.SpotlightImage?.url
    ? `url(${process.env.REACT_APP_HOST_API}${data.SpotlightImage.url})`
    : '';

  useEffect(() => {
    if (!containerRef.current || !colorBoxRef.current) return () => {};

    const triggerOffset = window.innerHeight / 6;
    const screenAspectRatio = window.innerWidth / window.innerHeight;
    const initialWidth = colorBoxRef.current.offsetWidth;
    const initialHeight = colorBoxRef.current.offsetHeight;

    animationRef.current = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: colorBoxRef.current,
          start: `top ${triggerOffset}px`,
          end: '+=300%',
          scrub: 1, // Smoother scrubbing
          pin: containerRef.current,
          markers: true,
          onEnter: () => colorBoxRef.current.classList.add('expanded'),
          onLeaveBack: () => colorBoxRef.current.classList.remove('expanded'),
        },
      });

      // Phase 1: Initial scaling (0-20%)
      tl.to(colorBoxRef.current, {
        scale: 1, // 20% of final scale (assuming final scale is 5)
        duration: 0.2,
        ease: 'power1.inOut',
        onStart: () => colorBoxRef.current.classList.add('expanded'),
      });

      // Phase 2: Aspect ratio transition (20-100%)
      tl.to(
        colorBoxRef.current,
        {
          width: '100vw',
          height: '100vh',
          aspectRatio: screenAspectRatio,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        '<0.2'
      ); // Overlap slightly with previous animation

      // Phase 3: Final scaling
      tl.to(
        colorBoxRef.current,
        {
          scale: 1,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        '<0.8'
      ); // Start during the aspect ratio transition
    }, containerRef);

    return () => {
      animationRef.current?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <StickyContainer>
      <StyledContainer ref={containerRef}>
        <GridContainer>
          {/* First Row */}
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[0]}`} alt="Grid Item 1" />
          </GridItem>
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[1]}`} alt="Grid Item 2" />
          </GridItem>
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[2]}`} alt="Grid Item 3" />
          </GridItem>

          {/* Second Row */}
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[3]}`} alt="Grid Item 4" />
          </GridItem>
          <ColorBox ref={colorBoxRef} backgroundImage={backgroundImage}>
            <Box>Your Content Here</Box>
          </ColorBox>
          <GridItem>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[4]}`} alt="Grid Item 5" />
          </GridItem>
        </GridContainer>
      </StyledContainer>
    </StickyContainer>
  );
};

export default AmaranthineAnimation;

AmaranthineAnimation.propTypes = {
  data: PropTypes.object.isRequired,
};
