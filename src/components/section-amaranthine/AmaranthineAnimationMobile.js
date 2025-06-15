import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  styled,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useTheme,
} from '@mui/material';
import { Icon } from '@iconify/react';
import Carousel, { useCarousel } from 'src/components/carousel';

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
  // width: '353px',
  // height: '260px',
  aspectRatio: '353/260',
  zIndex: 2,
  padding: '1.5rem',
  textAlign: 'center',
  '& .title': {
    fontSize: '1.8rem',
    fontWeight: 400,
    fontFamily: 'Satoshi Variable',
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

  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const colorBoxRef = useRef(null);
  const headingRef = useRef(null);
  const carouselRef = useRef(null);

  const carousel = useCarousel({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: '18px',
  });

  const CustomArrow = ({ icon, onClick, sx }) => (
    <IconButton
      onClick={onClick}
      sx={{
        border: '1px solid white',
        borderRadius: '0%',
        color: 'white',
        bgcolor: 'transparent',
        mx: 1,
        '&:hover': { bgcolor: '#071317', color: '#E2EBF6', border: '1px solid #071317' },
        width: 40,
        height: 40,
        ...sx,
      }}
    >
      <Icon icon={icon} width={20} />
    </IconButton>
  );

  CustomArrow.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    sx: PropTypes.object,
  };

  const cards = (data?.StoryCard || []).map((card) => ({
    image: card?.Image?.url ? `${process.env.REACT_APP_HOST_API}${card.Image.url}` : '',
    title: card?.Title || '',
    description: card?.SubTitle || '',
  }));

  const renderCard = (card) => (
    <Card
      sx={{
        borderRadius: 0,
        width: '97%',
        height: '450px',
        minHeight: '100%',
        mx: 'auto',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden', // Ensure content doesn't overflow
      }}
    >
      <Box sx={{ flex: '0 0 auto', height: '240px' }}>
        <CardMedia
          component="img"
          image={card.image}
          alt={card.title}
          sx={{
            width: '100%',
            height: 240,
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent
        sx={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          overflow: 'auto',
          p: 0,
          '&:last-child': {
            pb: 0,
          },
        }}
      >
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            fontFamily="Satoshi Variable"
            fontSize={{ xs: 20, md: 24 }}
            fontWeight={700}
            color="#18191B"
            sx={{
              lineHeight: 1.3,
              wordBreak: 'break-word',
              m: 0,
              p: 0,
              mt: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {card.title}
          </Typography>
          <Typography
            fontFamily="Satoshi Variable"
            fontSize={{ xs: 14, md: 16 }}
            fontWeight={500}
            color="#666666"
            sx={{
              lineHeight: 1.6,
              whiteSpace: 'pre-line',
              wordBreak: 'break-word',
              m: 0,
              p: 0,
              mt: 2,
              overflow: 'auto',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              flex: '1 1 auto',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',  /* IE and Edge */
              scrollbarWidth: 'none',  /* Firefox */
            }}
          >
            {card.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

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

    // Hide heading and carousel initially
    gsap.set([headingRef.current, carouselRef.current], { opacity: 0 });

    // Animation for the color box
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'bottom bottom',
        end: '+=100%',
        scrub: true,
        markers: true,
        id: 'mobile-box-animation',
        onUpdate: (self) => {
          // Handle heading and carousel opacity based on scroll progress
          if (headingRef.current) {
            const headingProgress = Math.max(0, (self.progress - 0.7) * 3.33); // Start at 70% progress
            gsap.set(headingRef.current, {
              opacity: Math.min(1, headingProgress),
              zIndex: 10, // Ensure heading stays above cards
            });

            // Only show carousel after heading is mostly visible (80% opacity)
            if (carouselRef.current) {
              const carouselProgress = Math.max(0, (self.progress - 0.8) * 5);
              gsap.set(carouselRef.current, {
                opacity: Math.min(1, carouselProgress),
                zIndex: 5, // Lower z-index than heading
              });
            }
          }
        },
        onEnterBack: () => {
          // Reset opacity when scrolling back up
          if (headingRef.current) gsap.set(headingRef.current, { opacity: 0 });
          if (carouselRef.current) gsap.set(carouselRef.current, { opacity: 0 });
        },
      },
    });

    // Set initial scale to fit 353x260 box
    gsap.set(box, {
      width: '353px',
      height: '260px',
      transformOrigin: 'center center',
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

    // Initial content fade out
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
            <Typography
              className="title"
              sx={{
                color: '#FFFFFF',
                fontSize: '38px',
                fontWeight: 400,
                fontFamily: 'Satoshi Variable',
              }}
            >
              AMARANTHINE
            </Typography>
            <Typography
              className="subtitle"
              sx={{
                color: '#E6E6E6',
                fontSize: '12px',
                fontWeight: 500,
                fontFamily: 'Satoshi Variable',
              }}
            >
              3/4 BHK LUXURY APARTMENTS
            </Typography>
          </Box>
          <Box
            ref={headingRef}
            sx={{
              position: 'absolute',
              top: '10%',
              left: 0,
              right: 0,
              textAlign: 'center',
              opacity: 0,
              zIndex: 10,
              padding: '0 16px',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontWeight: 400,
                fontSize: '2rem',
                mb: 1,
                fontFamily: 'Satoshi Variable',
              }}
            >
              {data?.StoryCardSliderHeading || 'AMARANTHINE'}
            </Typography>
          </Box>

          {cards.length > 0 && (
            <Box
              ref={carouselRef}
              sx={{
                position: 'absolute',
                top: '20%',
                left: 0,
                right: 0,
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                zIndex: 5,
                opacity: 0,
              }}
            >
              <Box sx={{ width: '100%', position: 'relative' }}>
                <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '0 8px',
                        height: '100%',
                        minHeight: 500,
                        display: 'flex',
                      }}
                    >
                      <Box sx={{ width: '100%', height: '100%' }}>{renderCard(card)}</Box>
                    </div>
                  ))}
                </Carousel>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <CustomArrow
                    icon="eva:arrow-ios-back-fill"
                    onClick={carousel.onPrev}
                    sx={{ mr: 2 }}
                  />
                  <CustomArrow
                    icon="eva:arrow-ios-forward-fill"
                    onClick={carousel.onNext}
                    sx={{ ml: 2 }}
                  />
                </Box>
              </Box>
            </Box>
          )}
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
