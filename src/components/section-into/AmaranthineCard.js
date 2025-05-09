import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { m as motion } from 'framer-motion';
import { varSlide } from 'src/components/animate/variants/slide';
import { MotionViewport } from 'src/components/animate';
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

export default function AmaranthineHighlightSection() {
  return (
    <MotionViewport>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh', // ✅ Important: make it full viewport height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, md: 4 },
        }}
      >
        <motion.div variants={varSlide().inUp}>
          <Typography
            align="center"
            fontFamily={`'Playfair Display', serif`}
            fontSize={64}
            sx={{
              color: 'white',
              fontWeight: 400,
              mb: 6,
              textShadow: '0px 2px 10px rgba(0,0,0,0.6)',
              opacity: 1,
            }}
          >
            AMARANTHINE
          </Typography>
        </motion.div>

        <Grid container spacing={4} pt={6} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={varSlide().inUp}>
                <Card
                  sx={{
                    borderRadius: 0,
                    width: '410px',
                    height: '500px',
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
                      height: '256px',
                      objectFit: 'cover',
                      p: 2,
                    }}
                  />
                  <CardContent
                    sx={{
                      width: '100%',
                      // flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
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
    </MotionViewport>
  );
}
