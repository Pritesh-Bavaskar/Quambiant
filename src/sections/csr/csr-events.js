import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Card, CardContent, CardMedia, Box, Grid, Button } from '@mui/material';

// ----------------------------------------------------------------------

const EVENTS = [
  {
    id: 1,
    title: 'Community Tree Planting',
    date: 'MAY 15, 2025',
    location: 'WATERFRONT DISTRICT',
    description: 'Join us as we plant 500 native trees to restore the ecosystem at Riverside Park.',
    image: '/assets/images/csr/tree-planting.jpg',
  },
  {
    id: 2,
    title: 'Green Building Workshop',
    date: 'JUNE 6, 2025',
    location: 'WATERFRONT DISTRICT',
    description: 'Learn about sustainable building practices and eco-friendly materials in this free workshop.',
    image: '/assets/images/csr/green-workshop.jpg',
  },
  {
    id: 3,
    title: 'Beach Cleanup Initiative',
    date: 'JULY 22, 2025',
    location: 'WATERFRONT DISTRICT',
    description: 'Help us clean up our beautiful beaches and protect marine life from pollution.',
    image: '/assets/images/csr/beach-cleanup.jpg',
  },
];

// ----------------------------------------------------------------------

export default function CsrEvents() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 8 },
          }}
        >
          <Typography
            sx={{
              mb: 2,
              fontFamily: 'Playfair Display',
              fontWeight: 500,
              fontSize: { xs: '28px', md: '36px', lg: '42px' },
              lineHeight: '100%',
              letterSpacing: { xs: '0%', md: '0px' },
              textAlign: 'center',
              display: 'flex',
              alignItems: { xs: 'flex-end', md: 'middle' },
              justifyContent: 'center',
              height: { xs: 'auto', md: '42px' },
              pb: 2,
            }}
          >
            Upcoming CSR Events
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              fontFamily: 'Satoshi Variable',
              fontWeight: 500,
              fontSize: { xs: '14px', md: '16px', lg: '18px' },
              lineHeight: '100%',
              letterSpacing: { xs: '0%', md: '0px' },
              textAlign: 'center',
              display: 'flex',
              alignItems: { xs: 'flex-end', md: 'middle' },
              justifyContent: 'center',
              height: { xs: 'auto', md: '18px' },
            }}
          >
            Join us in making a difference. Here are our upcoming community and environmental
            initiatives that you can participate in.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {EVENTS.map((event) => (
            <Grid key={event.id} item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 0,
                  transition: theme.transitions.create(['transform', 'box-shadow'], {
                    duration: theme.transitions.duration.shorter,
                  }),
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.customShadows.z24,
                  },
                }}
              >
                <Box sx={{ position: 'relative', pt: '60%' }}>
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 13,
                      right: 16,
                      width: 'auto',
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      px: 2,
                      gap: 1,
                      background: 'rgba(20, 20, 20, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(34px)',
                      borderRadius: '4px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Satoshi Variable',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '0px',
                        textAlign: 'center',
                        color: 'common.white',
                      }}
                    >
                      {event.date}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Box
                      component="span"
                      sx={{
                        width: 16,
                        height: 16,
                        mr: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#935D25',
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </Box>
                    <Typography
                      sx={{
                        color: '#935D25',
                        fontFamily: 'Satoshi Variable',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '100%',
                        letterSpacing: '0px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'middle',
                        textTransform: 'uppercase',
                      }}
                    >
                      {event.location}
                    </Typography>
                  </Box>

                  <Typography 
                    sx={{ 
                      mb: 1.5, 
                      flexGrow: 1, 
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      verticalAlign: 'middle',
                      color: '#001016'
                    }}
                  >
                    {event.title}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2.5,
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      verticalAlign: 'middle',
                      color: '#454954'
                    }}
                  >
                    {event.description}
                  </Typography>

                  <Button
                    variant="text"
                    color="primary"
                    sx={{
                      alignSelf: 'flex-start',
                      px: 0,
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#002F43',
                      textTransform: 'none',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

CsrEvents.propTypes = {};
