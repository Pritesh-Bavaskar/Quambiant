import React, { useRef } from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { m, useScroll, useTransform, motionValue } from 'framer-motion';

// import amaranthineImage1 from 'src/assets/media/landing/grid/grid-img1.png';
// import amaranthineImage2 from 'src/assets/media/landing/grid/grid-img2.png';
// import amaranthineImage3 from 'src/assets/media/landing/grid/grid-img3.png';
// import amaranthineImage4 from 'src/assets/media/landing/grid/grid-img4.png';
// import amaranthineImage6 from 'src/assets/media/landing/grid/grid-img6.png';

export default function AmaranthineGrid({ fifthItemScale, fifthItemOpacity, data }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const images = [
    data?.GallaryImage1?.url,
    data?.GallaryImage2?.url,
    data?.GallaryImage3?.url,
    data?.GallaryImage4?.url,
    data?.GallaryImage6?.url, // Note: Skipped index 4 (img5)
  ];

  // Default animations if not provided through props
  const defaultScale = useTransform(scrollYProgress, [0.7, 1], [1, 1.2]);

  // Use provided scale/opacity for fifth item if available, otherwise use defaults
  const titleBlockScale = fifthItemScale || defaultScale;
  const titleBlockOpacity = fifthItemOpacity || 1;

  if (isMobile) {
    return (
      <Box
        ref={ref}
        sx={{
          px: 2,
          width: '100%',
          pt: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: 'md', justifyContent: 'center' }}>
          <Grid item xs={6}>
            <ImageBox src={images[0]} alt="img1" />
          </Grid>
          <Grid item xs={6}>
            <ImageBox src={images[1]} alt="img2" />
          </Grid>

          <Grid item xs={12}>
            <m.div
              style={{
                opacity: titleBlockOpacity,
                scale: titleBlockScale,
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#0A2640',
                  color: 'white',
                  aspectRatio: '35 / 26',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  py: 6,
                  px: 2,
                }}
              >
                <Typography fontFamily={`'Playfair Display', serif`} fontSize={38} fontWeight={400}>
                  {data?.GallaryTextSection5}
                </Typography>
                <Typography mt={1} fontSize={12} fontWeight={500}>
                  {data?.GallarySubTextSection5}
                </Typography>
              </Box>
            </m.div>
          </Grid>

          <Grid item xs={6}>
            <ImageBox src={images[2]} alt="img3" />
          </Grid>
          <Grid item xs={6}>
            <ImageBox src={images[3]} alt="img4" />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        px: 4,
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{
          maxWidth: 'xl',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <ImageBox src={images[0]} alt="Image 1" scrollYProgress={scrollYProgress} />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ImageBox src={images[1]} alt="Image 2" scrollYProgress={scrollYProgress} />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ImageBox src={images[2]} alt="Image 3" scrollYProgress={scrollYProgress} />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ImageBox src={images[3]} alt="Image 4" scrollYProgress={scrollYProgress} />
        </Grid>

        {/* ✅ STATIC TITLE BLOCK WITH SPECIAL PARALLAX EFFECT */}
        <Grid item xs={12} sm={6} md={4} zIndex={1000}>
          <m.div
            style={{
              width: '100%',
              height: '100%',
              scale: titleBlockScale,
              transformOrigin: 'center 75%',
              opacity: titleBlockOpacity,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#0A2640',
                width: '100%',
                color: 'white',
                aspectRatio: '43 / 30',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                py: 6,
                px: 2,
              }}
            >
              <Typography fontFamily={`'Playfair Display', serif`} fontSize={38} fontWeight={400}>
                AMARANTHINE
              </Typography>
              <Typography mt={1} fontSize={12} fontWeight={500}>
                2/3 BHK LUXURY APARTMENTS
              </Typography>
            </Box>
          </m.div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ImageBox src={images[4]} alt="Image 6" scrollYProgress={scrollYProgress} />
        </Grid>
      </Grid>
    </Box>
  );
}

function ImageBox({ src, alt, scrollYProgress }) {
  const ref = useRef(null);
  const validScrollYProgress = scrollYProgress || motionValue(0);
  const scale = useTransform(validScrollYProgress, [0, 1], [1.4, 1]);

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: { xs: '17 / 19', md: '43 / 30' },
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'relative',
        flexGrow: 1,
      }}
    >
      <m.div
        ref={ref}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          scale,
          transformOrigin: 'center center',
        }}
      >
        <img
          src={`${process.env.REACT_APP_HOST_API}${src}`}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </m.div>
    </Box>
  );
}

AmaranthineGrid.propTypes = {
  fifthItemScale: PropTypes.object,
  fifthItemOpacity: PropTypes.object,
  data: PropTypes.object,
};

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  scrollYProgress: PropTypes.object,
};
