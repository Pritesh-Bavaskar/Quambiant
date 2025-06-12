import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const initiatives = [
  {
    id: 1,
    date: 'MAY 15, 2020',
    location: 'WATERFRONT DISTRICT',
    title: 'Solar Panel Installation',
    description: 'We installed solar panels for 25 families in the Meadowview Community.',
    image: '/assets/images/csr/solar-panels.jpg',
    link: '#',
  },
  {
    id: 2,
    date: 'JUNE 8, 2020',
    location: 'WATERFRONT DISTRICT',
    title: 'Youth Development Program',
    description:
      'Our mentorship program connected real estate professionals with high school students.',
    image: '/assets/images/csr/youth-program.jpg',
    link: '#',
  },
];

const InitiativeCard = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.palette.common.white,
  borderRadius: 0,
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '40%',
  minHeight: 280,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 200,
  },
}));

const DateBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '16px',
  right: '16px',
  minWidth: '141.3px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  backgroundColor: 'rgba(20, 20, 20, 0.3)',
  backdropFilter: 'blur(34px)',
  color: theme.palette.common.white,
  borderRadius: '0px',
  fontSize: '12px',
  fontWeight: 500,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  [theme.breakpoints.down('md')]: {
    right: '16px',
    top: '16px',
  },
}));

const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const LocationText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Satoshi Variable',
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '100%',
  letterSpacing: '0px',
  paddingBottom: '8px',
  //   textAlign: 'center',
  //   verticalAlign: 'middle',
  textTransform: 'uppercase',
  color: '#935D25',
  marginBottom: theme.spacing(1),
  '&:before': {
    content: "'\\\\e55f'",
    fontFamily: 'Material Icons',
    fontSize: '16px',
    marginRight: '8px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Satoshi Variable',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '100%',
  letterSpacing: '0%',
  verticalAlign: 'middle',
  color: '#001016',
  marginBottom: theme.spacing(1.5),
}));

const Description = styled(Typography)(({ theme }) => ({
  fontFamily: 'Satoshi Variable',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '110%',
  letterSpacing: '0px',
  verticalAlign: 'middle',
  color: '#454954',
  marginBottom: theme.spacing(2),
}));

const CSRInitiatives = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#001016', py: 10 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6, px: { xs: 2, md: 0 } }}>
          <Typography
            sx={{
              mb: 2,
              fontWeight: 500,
              fontSize: { xs: '28px', sm: '32px', md: '42px' },
              lineHeight: '100%',
              textAlign: 'center',
              verticalAlign: { xs: 'bottom', sm: 'middle' },
              letterSpacing: { xs: '0%', md: '0px' },
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              color: '#E6F5FC',
            }}
          >
            Completed CSR Initiatives
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Satoshi Variable',
              fontWeight: 500,
              fontSize: { xs: '14px', md: '18px' },
              lineHeight: '100%',
              letterSpacing: { xs: '0%', md: '0px' },
              textAlign: 'center',
              verticalAlign: { xs: 'bottom', md: 'middle' },
              color: '#E3E4E8',
              maxWidth: 700,
              mx: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            Explore our past community and environmental initiatives and the positive impact
            we&apos;ve created together.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {initiatives.map((initiative) => (
            <Grid item xs={12} md={6} key={initiative.id}>
              <InitiativeCard>
                <ImageContainer>
                  <Box
                    component="img"
                    src={initiative.image}
                    alt={initiative.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                  <DateBadge>{initiative.date}</DateBadge>
                </ImageContainer>
                <Content>
                  <LocationText>{initiative.location}</LocationText>
                  <Title>{initiative.title}</Title>
                  <Description>{initiative.description}</Description>
                  <Link
                    component="a"
                    href={initiative.link}
                    sx={{
                      fontFamily: 'Satoshi Variable',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#002F43',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                      '&:after': {
                        fontFamily: 'Material Icons',
                        fontSize: '18px',
                        marginLeft: '4px',
                      },
                    }}
                  >
                    Learn more
                  </Link>
                </Content>
              </InitiativeCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

CSRInitiatives.propTypes = {};

export default CSRInitiatives;
