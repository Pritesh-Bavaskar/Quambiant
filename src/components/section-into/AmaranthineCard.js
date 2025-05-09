import PropTypes from 'prop-types';
import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { m as motion, useTransform } from 'framer-motion';
import backgroundImage from 'src/assets/media/landing/card/bck-img.png';
import img1 from 'src/assets/media/landing/card/card-img1.png';
import img2 from 'src/assets/media/landing/card/card-img2.png';
import img3 from 'src/assets/media/landing/card/card-img3.png';

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
      'Situated in a well-connected neighborhood with easy access to schools, business hubs, and lifestyle destinations.',
  },
  {
    image: img3,
    title: 'Prime Location with Seamless Connectivity',
    description:
      'Situated in a well-connected neighborhood with easy access to schools, business hubs, and lifestyle destinations.',
  },
];

export default function AmaranthineHighlightSection({ scrollYProgress }) {
  // Animate title opacity
  const titleOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  // Animate each card individually (declared outside .map for ESLint compliance)
  const card1Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.8, 0.9], [30, 0]);

  const card2Opacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.85, 0.95], [30, 0]);

  const card3Opacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.9, 1.0], [30, 0]);

  const opacities = [card1Opacity, card2Opacity, card3Opacity];
  const yTransforms = [card1Y, card2Y, card3Y];

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
        width: '100%',
        height: '100vh',
        py: 10,
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <motion.div style={{ opacity: titleOpacity }}>
        <Typography
          align="center"
          fontFamily={`'Playfair Display', serif`}
          fontSize={64}
          sx={{
            color: 'white',
            fontWeight: 400,
            mb: 6,
            textShadow: '0px 2px 10px rgba(0,0,0,0.6)',
          }}
        >
          AMARANTHINE
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div style={{ opacity: opacities[index], y: yTransforms[index] }}>
              <Card
                sx={{
                  borderRadius: 0,
                  width: '100%',
                  maxWidth: 410,
                  height: 500,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
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
                    p: 2,
                  }}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    fontFamily="Satoshi Variable, sans-serif"
                    fontSize={24}
                    fontWeight={700}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    fontFamily="Satoshi Variable, sans-serif"
                    fontSize={16}
                    fontWeight={500}
                    color="text.secondary"
                    mt={1}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

AmaranthineHighlightSection.propTypes = {
  scrollYProgress: PropTypes.object.isRequired,
};
