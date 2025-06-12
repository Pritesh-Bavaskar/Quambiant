import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
  alpha,
  styled,
} from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';

// Sample data for carousel cards
const philosophyCards = [
  {
    id: 1,
    title: 'Environmental Stewardship',
    description: 'Implementing sustainable building practices and reducing our carbon footprint.',
    image: '/assets/images/csr/environment.jpg',
  },
  {
    id: 2,
    title: 'Community Development',
    description: 'Creating spaces that foster community growth and social well-being.',
    image: '/assets/images/csr/community.jpg',
  },
  {
    id: 3,
    title: 'Ethical Governance',
    description: 'Upholding the highest standards of integrity and transparency.',
    image: '/assets/images/csr/community.jpg',
  },
];

const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  boxShadow: theme.customShadows.z4,
  transition: theme.transitions.create(['transform', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.customShadows.z16,
  },
}));

const CardMedia = styled('div')(({ theme, src }) => ({
  position: 'relative',
  paddingTop: '75%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${src})`,
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
  },
}));

const CardContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  zIndex: 1,
}));

export default function CSRPhilosophy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);

  const carousel = useCarousel({
    autoplay: true,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
      }}
    >
      <Container>
        <Grid container spacing={5} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Our CSR Philosophy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: { xs: 3, md: 5 },
                }}
              >
                At Quambiant, we believe that successful real estate development goes beyond
                building structures — it&apos;s about creating sustainable communities and
                preserving our environment for future generations.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                }}
              >
                Our Corporate Social Responsibility (CSR) initiatives are built on three core
                pillars: environmental stewardship, community development, and ethical governance.
                Through these pillars, we strive to make a positive impact on society while
                delivering value to our stakeholders.
              </Typography>
            </m.div>
            <Box sx={{ position: 'relative' }}>
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {philosophyCards.map((card) => (
                  <Box key={card.id} sx={{ px: 1.5 }}>
                    <Card>
                      <CardMedia src={card.image} />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Box
                component="img"
                src="/assets/images/csr/csr-philosophy.jpg"
                alt="CSR Philosophy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  boxShadow: theme.customShadows.z16,
                }}
              />
            </m.div>
          </Grid>
        </Grid>

        {/* Dots are now handled by the carouselSettings */}
      </Container>
    </Box>
  );
}
