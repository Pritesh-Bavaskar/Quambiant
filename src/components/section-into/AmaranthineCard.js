import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
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
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ color: 'white', fontWeight: 700, mb: 6, textShadow: '0px 2px 10px rgba(0,0,0,0.6)' }}
      >
        AMARANTHINE
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 0,
                // boxShadow: 6,
              }}
            >
              <CardMedia 
                component="img" 
                height="200" 
                image={card.image} 
                alt={card.title} 
                sx={{ 
                  p: 1, 
                  objectFit: 'cover' 
                }} 
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
