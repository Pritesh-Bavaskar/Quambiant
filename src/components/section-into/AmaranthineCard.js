import PropTypes from 'prop-types';
import { Box, Grid, Typography, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { m as motion, useTransform } from 'framer-motion';
import backgroundImage from 'src/assets/media/landing/card/bck-img.png';
import img1 from 'src/assets/media/landing/card/card-img1.png';
import img2 from 'src/assets/media/landing/card/card-img2.png';
import img3 from 'src/assets/media/landing/card/card-img3.png';
import Carousel, { useCarousel } from 'src/components/carousel';
import IconButton from '@mui/material/IconButton';
import Iconify from 'src/components/iconify';

const cards = [
  {
    image: img1,
    title: 'Prime Location with Seamless Connectivity',
    description:
      'Situated in a well-connected neighborhood with easy access to schools, business hubs, and lifestyle destinations.',
  },
  {
    image: img2,
    title: 'Resort-Style Amenities & Green Living',
    description:
      'Experience luxury living with our resort-style amenities while embracing sustainable green living practices.',
  },
  {
    image: img3,
    title: 'Premium Quality Construction & Design',
    description:
      'Built with the finest materials and thoughtful design to ensure lasting quality and timeless aesthetics.',
  },
];

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

export default function AmaranthineHighlightSection({ scrollYProgress }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        // maxWidth: 350,
        height: 500,
        mx: 'auto',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <CardMedia
        component="img"
        image={card.image}
        alt={card.title}
        sx={{
          width: '100%',
          height: 256,
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 1,
          p: 0,
        }}
      >
        <Typography
          fontFamily="Satoshi Variable, sans-serif"
          fontSize={{ xs: 20, md: 24 }}
          fontWeight={700}
          color="#18191B"
          sx={{ lineHeight: 1.3 }}
        >
          {card.title}
        </Typography>
        <Typography
          fontFamily="Satoshi Variable, sans-serif"
          fontSize={{ xs: 14, md: 16 }}
          fontWeight={500}
          color="#666666"
          mt={2}
          sx={{ lineHeight: 1.6 }}
        >
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
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
      <motion.div style={{ opacity: titleOpacity }}>
        <Typography
          align="center"
          fontFamily={`'Playfair Display', serif`}
          fontSize={{ xs: 38, md: 64 }}
          sx={{
            color: 'white',
            fontWeight: 400,
            mb: { md: 12, xs: 4 },
            textShadow: '0px 2px 10px rgba(0,0,0,0.6)',
            letterSpacing: '0.05em',
          }}
        >
          AMARANTHINE
        </Typography>
      </motion.div>

      {isMobile ? (
        <Box sx={{ width: '100%', position: 'relative' }}>
          <Box
            sx={{
              px: { xs: 0, sm: 4 }, // Added horizontal padding for side gaps
              width: '100%',
              maxWidth: 1200,
              mx: 'auto',
            }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  style={{
                    opacity: titleOpacity,
                    padding: '0 8px', // Additional padding between cards
                  }}
                >
                  {renderCard(card)}
                </motion.div>
              ))}
            </Carousel>
          </Box>
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
        <Grid container spacing={4} justifyContent="center" maxWidth={1300}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div style={{ opacity: opacities[index], y: yTransforms[index] }}>
                {renderCard(card)}
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

AmaranthineHighlightSection.propTypes = {
  scrollYProgress: PropTypes.object.isRequired,
};
