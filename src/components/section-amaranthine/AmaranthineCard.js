import PropTypes from 'prop-types';
import { Box, Grid, Typography, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { m, useTransform } from 'framer-motion';
import backgroundImage from 'src/assets/media/landing/card/bck-img.png';
import img1 from 'src/assets/media/landing/card/card-img1.png';
import img2 from 'src/assets/media/landing/card/card-img2.png';
import img3 from 'src/assets/media/landing/card/card-img3.png';
import Carousel, { useCarousel } from 'src/components/carousel';
import IconButton from '@mui/material/IconButton';
import Iconify from 'src/components/iconify';

// Custom Arrows with improved styling
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
    <Iconify icon={icon} width={20} />
  </IconButton>
);

CustomArrow.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.object,
};

export default function AmaranthineHighlightSection({ scrollYProgress, data }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const cards = (data?.StoryCard || []).map((card) => ({
    image: card?.Image?.url ? `${process.env.REACT_APP_HOST_API}${card.Image.url}` : img1, // Fallback to img1 if no image
    title: card?.Title || '',
    description: card?.SubTitle || '',
  }));

  // Carousel settings for mobile
  const carousel = useCarousel({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: '32px', // Increased padding for side gaps
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          centerPadding: '16px',
        },
      },
    ],
  });

  // Animation values
  const titleOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const card1Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.8, 0.9], [30, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.85, 0.95], [30, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.9, 1.0], [30, 0]);

  const opacities = [card1Opacity, card2Opacity, card3Opacity];
  const yTransforms = [card1Y, card2Y, card3Y];

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
        minHeight: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Box sx={{ flex: '0 0 auto' }}>
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
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          p: 0,
          '&:last-child': {
            pb: 0,
          },
        }}
      >
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            fontFamily="Satoshi Variable, sans-serif"
            fontSize={{ xs: 20, md: 24 }}
            fontWeight={700}
            color="#18191B"
            sx={{
              lineHeight: 1.3,
              wordBreak: 'break-word',
              m: 0,
              p: 0,
              mt: 2,
            }}
          >
            {card.title}
          </Typography>
          <Typography
            fontFamily="Satoshi Variable, sans-serif"
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
            }}
          >
            {card.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${process.env.REACT_APP_HOST_API}${data?.SpotlightImage?.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
        py: 10,
        px: { xs: 0, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <m.div style={{ opacity: titleOpacity }}>
        <Typography
          align="center"
          fontFamily={`'Playfair Display', serif`}
          fontSize={{ xs: 38, md: 64 }}
          sx={{
            color: 'white',
            fontWeight: 400,
            mb: { md: 8, xs: 4 },
            textShadow: '0px 2px 10px rgba(0,0,0,0.6)',
            letterSpacing: '0.05em',
          }}
        >
          {data?.StoryCardSliderHeading}
        </Typography>
      </m.div>

      {isMobile ? (
        // Mobile View (Carousel)
        <Box sx={{ width: '100%', position: 'relative' }}>
          <m.div
            style={{ opacity: titleOpacity }}
            sx={{
              px: { xs: 0, sm: 4 }, // Added horizontal padding for side gaps
              width: '100%',
              maxWidth: 1200,
              mx: 'auto',
            }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {cards.map((card, index) => (
                <m.div
                  key={index}
                  style={{
                    opacity: titleOpacity,
                    padding: '0 8px',
                  }}
                >
                  <Box sx={{ height: '100%', minHeight: 500, display: 'flex' }}>
                    {renderCard(card)}
                  </Box>
                </m.div>
              ))}
            </Carousel>
          </m.div>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CustomArrow icon="eva:arrow-ios-back-fill" onClick={carousel.onPrev} sx={{ mr: 2 }} />
            <CustomArrow
              icon="eva:arrow-ios-forward-fill"
              onClick={carousel.onNext}
              sx={{ ml: 2 }}
            />
          </Box>
        </Box>
      ) : (
        // Tablet and Desktop View (Grid)
        <Grid
          container
          spacing={isTablet ? 2 : 4}
          sx={{
            mt: 4,
            display: 'flex',
            flexWrap: 'wrap',
            px: isTablet ? 2 : 0,
            maxWidth: isTablet ? 800 : 1300,
            mx: 'auto',
          }}
          justifyContent="center"
        >
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: isTablet ? '8px 8px 8px 0' : '16px 16px 16px 0',
                '&.MuiGrid-item': {
                  padding: 0,
                  paddingRight: '20px',
                  paddingTop: '20px',
                },
              }}
            >
              <m.div
                style={{
                  opacity: opacities[index],
                  y: yTransforms[index],
                  width: '100%',
                }}
              >
                {renderCard(card)}
              </m.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

AmaranthineHighlightSection.propTypes = {
  scrollYProgress: PropTypes.object.isRequired,
  data: PropTypes.object,
};
