import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typography, Card, CardContent, CardMedia, Grid, Box, styled } from '@mui/material';

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
  gap: theme.spacing(4), // Increased from 2 to 4 for more space between items
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
  aspectRatio: '1 / 1',
  // height: '100%', // constrained by parent unless fullscreen
  transformOrigin: 'center center',
  willChange: 'width, height, transform',
  zIndex: 2,

  '&.fullscreen': {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    transform: 'translate(0, 0)',
    zIndex: 100,
    overflowY: 'auto', // ✅ important
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // you can switch this to 'start' if needed
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
}));

const renderCard = (card) => (
  <Card
    sx={{
      borderRadius: 0,
      width: '97%',
      mx: 'auto',
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    }}
  >
    <Box sx={{ flex: '0 0 auto' }}>
      <CardMedia
        component="img"
        image={card.image}
        alt={card.title}
        sx={{ width: '100%', height: 240, objectFit: 'cover' }}
      />
    </Box>
    <CardContent sx={{ flex: '1 1 auto', p: 0, '&:last-child': { pb: 0 } }}>
      <Typography
        fontFamily="Satoshi Variable"
        fontSize={{ xs: 20, md: 24 }}
        fontWeight={700}
        color="#18191B"
        sx={{ mt: 2 }}
      >
        {card.title}
      </Typography>
      <Typography
        fontFamily="Satoshi Variable"
        fontSize={{ xs: 14, md: 16 }}
        fontWeight={500}
        color="#666666"
        sx={{ mt: 2 }}
      >
        {card.description}
      </Typography>
    </CardContent>
  </Card>
);

const AmaranthineAnimation = ({ data }) => {
  const images = [
    data?.GallaryImage1?.url,
    data?.GallaryImage2?.url,
    data?.GallaryImage3?.url,
    data?.GallaryImage4?.url,
    data?.GallaryImage6?.url,
  ];

  const cards = (data?.StoryCard || []).map((card) => ({
    image: card?.Image?.url ? `${process.env.REACT_APP_HOST_API}${card.Image.url}` : '',
    title: card?.Title || '',
    description: card?.SubTitle || '',
  }));

  const containerRef = useRef(null);
  const colorBoxRef = useRef(null);
  const animationRef = useRef(null);
  const firstRowRefs = useRef([]);
  const secondRowRefs = useRef([]);
  const cardsContainerRef = useRef(null);
  const colorBoxContentRef = useRef(null);

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const heading = cardsContainerRef.current.querySelector('.amaranthine-heading');
    const cardEls = cardsContainerRef.current.querySelectorAll('.amaranthine-card');

    // SAFETY: Only include heading if it exists
    const targets = [...cardEls];
    if (heading) targets.unshift(heading);

    gsap.set(targets, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    if (heading) {
      tl.to(heading, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

    cardEls.forEach((card, i) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        `+=${i === 0 ? 0.2 : 0.15}`
      );
    });
  }, []);


  useEffect(() => {
    if (!colorBoxRef.current || !containerRef.current) return () => {};

    const box = colorBoxRef.current;
    const container = containerRef.current;
    const rect = box.getBoundingClientRect();

    const targetWidth = window.innerWidth;
    const targetHeight = window.innerHeight + 10;

    const deltaX = (targetWidth - rect.width) / 2;
    const deltaY = (targetHeight - rect.height) / 2.5;

    // First, set up the ScrollTrigger for the sticky container
    ScrollTrigger.create({
      trigger: container,
      start: 'bottom bottom',
      end: '+=200%',
      pin: true,
      pinSpacing: false,
      markers: true,
      id: 'container-pin',
    });

    // Then create the animation timeline for the color box
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true,
        markers: true,
        id: 'box-animation',
      },
    });

    tl.to(box, {
      width: targetWidth,
      height: targetHeight + 10,
      x: -deltaX,
      y: -deltaY,
      ease: 'power2.inOut',
    });

    gsap.to(box.querySelector('.bg-image'), {
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true,
      },
    });

    gsap.to(box.querySelector('.content'), {
      opacity: 0,
      scrollTrigger: {
        trigger: container,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true,
      },
    });

    // After ColorBox scale is complete
    tl.to(
      colorBoxContentRef.current.querySelector('.amaranthine-heading'),
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '+=0.3'
    );

    const cardsEls = colorBoxContentRef.current.querySelectorAll('.amaranthine-card');

    cardsEls.forEach((card, i) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        `+=${i === 0 ? 0.2 : 0.1}`
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const backgroundImage = data?.SpotlightImage?.url
    ? `url(${process.env.REACT_APP_HOST_API}${data.SpotlightImage.url})`
    : '';

  // Add ref to each first row GridItem
  const addToFirstRowRefs = (el) => {
    if (el && !firstRowRefs.current.includes(el)) {
      firstRowRefs.current.push(el);
    }
  };

  // Add ref to each second row GridItem and ColorBox
  const addToSecondRowRefs = (el) => {
    if (el && !secondRowRefs.current.includes(el)) {
      secondRowRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (firstRowRefs.current.length === 3) {
      const [firstImage, secondImage, thirdImage] = firstRowRefs.current;

      // Set initial states for first row
      gsap.set([firstImage, thirdImage], { scale: 1.1, opacity: 0 });
      gsap.set(secondImage, { opacity: 0, scale: 1.075 });

      // Create a master timeline for the first row animation
      const firstRowTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      });

      // Animate first and third images: scale and fade in
      firstRowTl.to(
        [firstImage, thirdImage],
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
        0
      );

      // Then fade in the second image when first and third are halfway through
      firstRowTl.to(
        secondImage,
        {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.in',
        },
        0.2
      );

      // Finally, scale the second image slightly
      firstRowTl.to(
        secondImage,
        {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        },
        0.3
      );
    }
  }, []);

  useEffect(() => {
    if (secondRowRefs.current.length === 3) {
      const [fourthImage, colorBox, fifthImage] = secondRowRefs.current;

      // Set initial states for second row
      gsap.set([fourthImage, fifthImage], { scale: 1.1, opacity: 0 });
      gsap.set(colorBox, { opacity: 0, scale: 1.075 });

      // Create a timeline for the second row animation
      const secondRowTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center 80%',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // Animate fourth and fifth images
      secondRowTl.to(
        [fourthImage, fifthImage],
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
        0
      );

      // Then fade in the colorBox
      secondRowTl.to(
        colorBox,
        {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.in',
        },
        0.2
      );

      // Finally, scale the colorBox slightly
      secondRowTl.to(
        colorBox,
        {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => {
            // This will trigger after the second row animation completes
            // The colorBox's main scaling animation will start after this
          },
        },
        0.3
      );
    }
  }, []);

  return (
    <StickyContainer>
      <StyledContainer ref={containerRef}>
        <GridContainer>
          <GridItem ref={addToFirstRowRefs}>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[0]}`} alt="Grid Item 1" />
          </GridItem>
          <GridItem ref={addToFirstRowRefs}>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[1]}`} alt="Grid Item 2" />
          </GridItem>
          <GridItem ref={addToFirstRowRefs}>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[2]}`} alt="Grid Item 3" />
          </GridItem>

          <GridItem ref={addToSecondRowRefs}>
            <StyledImage src={`${process.env.REACT_APP_HOST_API}${images[3]}`} alt="Grid Item 4" />
          </GridItem>
          <ColorBox
            ref={(el) => {
              colorBoxRef.current = el;
              addToSecondRowRefs(el);
            }}
            backgroundImage={backgroundImage}
          >
            <Box className="bg-image" />
            <Box
              className="colorbox-content"
              ref={colorBoxContentRef}
              sx={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '2rem 1rem',
                textAlign: 'center',
                overflowY: 'auto',
                maxHeight: '100vh',
              }}
            >
              <Typography
                variant="h2"
                className="amaranthine-heading"
                sx={{
                  color: 'white',
                  fontWeight: 400,
                  fontSize: { xs: 32, md: 64 },
                  mb: 4,
                  opacity: 0,
                  transform: 'translateY(30px)',
                }}
              >
                {data?.StoryCardSliderHeading}
              </Typography>

              <Grid
                container
                spacing={3}
                justifyContent="center"
                className="amaranthine-cards"
                style={{ position: 'relative', zIndex: 10, minHeight: '200px' }}
              >
                {cards.map((card, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      className="amaranthine-card"
                      sx={{
                        opacity: 0,
                        transform: 'translateY(30px)',
                      }}
                    >
                      {renderCard(card)}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </ColorBox>

          <GridItem ref={addToSecondRowRefs}>
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
