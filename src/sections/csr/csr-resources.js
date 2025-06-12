import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Button, IconButton, useMediaQuery } from '@mui/material';
import Iconify from 'src/components/iconify';
import Carousel, { useCarousel } from 'src/components/carousel';

// Sample data for resources
const RESOURCES = [
  {
    id: 1,
    size: '4.3 MB',
    title: '2024 Annual CSR Report',
    description:
      'Our comprehensive report on all CSR activities and impact metrics for the past year.',
  },
  {
    id: 2,
    size: '2.1 MB',
    title: 'Sustainable Building Whitepaper',
    description: 'Exploring sustainable construction practices and their long-term benefits.',
  },
  {
    id: 3,
    size: '3.5 MB',
    title: 'Community Impact Report 2024',
    description: 'Measuring the positive impact of our community development initiatives.',
  },
  {
    id: 4,
    size: '1.8 MB',
    title: 'Environmental Sustainability Guide',
    description: 'Best practices and guidelines for environmental conservation in construction.',
  },
];

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick, sx }) => (
  <IconButton
    onClick={onClick}
    sx={{
      border: '1px solid #18191B',
      borderRadius: '0%',
      color: '#18191B',
      bgcolor: 'transparent',
      mx: 1,
      '&:hover': { bgcolor: '#18191B', color: '#fff' },
      ...sx,
    }}
  >
    <Iconify icon="eva:arrow-ios-back-fill" />
  </IconButton>
);

// Custom Next Arrow
const CustomNextArrow = ({ onClick, sx }) => (
  <IconButton
    onClick={onClick}
    sx={{
      border: '1px solid #18191B',
      borderRadius: '0%',
      color: '#18191B',
      bgcolor: 'transparent',
      mx: 1,
      '&:hover': { bgcolor: '#18191B', color: '#fff' },
      ...sx,
    }}
  >
    <Iconify icon="eva:arrow-ios-forward-fill" />
  </IconButton>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

export default function CSRResources() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rtl: Boolean(theme.direction === 'rtl'),
  };

  const carousel = useCarousel(carouselRef, carouselSettings);

  const renderDesktopView = () => (
    <Grid container spacing={3}>
      {RESOURCES.map((resource) => (
        <Grid key={resource.id} item xs={12} sm={6}>
          <ResourceCard resource={resource} />
        </Grid>
      ))}
    </Grid>
  );

  const renderMobileView = () => (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        '& .slick-slider': {
          width: '100%',
          overflow: 'hidden',
        },
        '& .slick-list': {
          overflow: 'visible',
          margin: '0 -8px',
          padding: '8px 0',
        },
        '& .slick-slide': {
          padding: '0 8px',
          '& > div': {
            width: '100%',
          },
        },
        '& .slick-track': {
          display: 'flex',
        },
      }}
    >
      <Carousel
        ref={carouselRef}
        {...carousel.carouselSettings}
        sx={{
          width: '100%',
          '& .slick-slide': {
            px: 1,
          },
        }}
      >
        {RESOURCES.map((resource) => (
          <Box key={resource.id}>
            <ResourceCard resource={resource} />
          </Box>
        ))}
      </Carousel>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
          '& button': {
            width: 40,
            height: 40,
            minWidth: 40,
            p: 0,
            '&:first-of-type': {
              mr: 2,
            },
            '&:last-of-type': {
              ml: 2,
            },
            '& svg': {
              width: 20,
              height: 20,
            },
          },
        }}
      >
        <CustomPrevArrow
          onClick={() => carouselRef.current?.slickPrev()}
          sx={{
            border: '1px solid #18191B',
            color: '#18191B',
            bgcolor: 'transparent',
            width: 40,
            height: 40,
            '&:hover': {
              bgcolor: '#18191B',
              color: '#fff',
            },
          }}
        />
        <CustomNextArrow
          onClick={() => carouselRef.current?.slickNext()}
          sx={{
            border: '1px solid #18191B',
            color: '#18191B',
            bgcolor: 'transparent',
            width: 40,
            height: 40,
            '&:hover': {
              bgcolor: '#18191B',
              color: '#fff',
            },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          'linear-gradient(180deg, rgba(255, 248, 240, 0.8) 0%, rgba(255, 248, 240, 0.8) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '50%',
          height: '100%',
          left: 0,
          top: 0,
          background: 'url("/assets/patterns/pattern-1.svg")',
          backgroundSize: 'cover',
          opacity: 0.1,
          [theme.breakpoints.down('md')]: {
            width: '100%',
            opacity: 0.05,
          },
        },
      }}
    >
      {!isMobile ? (
        <Container sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              minHeight: { md: '70vh' },
              alignItems: { xs: 'flex-start', md: 'center' },
            }}
          >
            <Box
              sx={{
                position: { md: 'sticky' },
                top: { md: '50%' },
                transform: { md: 'translateY(-50%)' },
                py: { md: 12 },
              }}
            >
              <Typography
                sx={{
                  mb: 3,
                  fontFamily: 'Satoshi Variable',
                  fontWeight: 500,
                  fontSize: '42px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                  color: '#001016',
                }}
              >
                CSR Resources
              </Typography>
              <Typography
                sx={{
                  maxWidth: 450,
                  fontFamily: 'Satoshi Variable',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                  color: '#454954',
                }}
              >
                Access our reports, case studies, and whitepapers on sustainability and community
                development.
              </Typography>
            </Box>

            <Box>{renderDesktopView()}</Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} lg={5}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontFamily: 'Satoshi Variable',
                    fontWeight: 500,
                    fontSize: '28px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#18191B',
                    verticalAlign: 'bottom',
                    display: 'inline-block',
                    width: '100%',
                  }}
                >
                  CSR Resources
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Satoshi Variable',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'bottom',
                    color: '#5C6170',
                    display: 'inline-block',
                    width: '100%',
                    mt: 1,
                  }}
                >
                  Access our reports, case studies, and whitepapers on sustainability and community
                  development.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={7}>
              {renderMobileView()}
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  );
}

function ResourceCard({ resource }) {
  return (
    <Box
      sx={{
        height: '269px',
        p: 3,
        bgcolor: '#002F43',
        color: 'common.white',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 63,
          height: 28,
          mb: 1,
          backgroundColor: '#005F86',
          border: '1px solid #002F43',
          borderRadius: '4px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Satoshi Variable',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: '#CCECF9',
            display: 'inline-block',
            width: '100%',
          }}
        >
          {resource.size}
        </Typography>
      </Box>
      <Typography
        sx={{
          mb: 2,
          minHeight: 60,
          fontFamily: 'Satoshi Variable',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '100%',
          letterSpacing: '0px',
          verticalAlign: 'middle',
          color: '#E6F5FC',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {resource.title}
      </Typography>
      <Typography
        sx={{
          mb: 3,
          flexGrow: 1,
          fontFamily: 'Satoshi Variable',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0px',
          verticalAlign: 'middle',
          color: '#8F94A3',
        }}
      >
        {resource.description}
      </Typography>
      <Button
        variant="text"
        endIcon={<Iconify icon="eva:download-fill" />}
        sx={{
          color: 'primary.light',
          alignSelf: 'flex-start',
          p: 0,
          '&:hover': {
            bgcolor: 'transparent',
            color: 'primary.main',
          },
        }}
      >
        Download
      </Button>
    </Box>
  );
}

ResourceCard.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.number,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
