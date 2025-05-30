import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient, bgBlur } from 'src/theme/css';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varFade } from 'src/components/animate';
import bck_img from 'src/assets/media/landing/bck_img.png';
import { LandingCard } from 'src/components/landing-card/LandingCard';
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  marginBottom: 24,
  letterSpacing: 8,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: `${64 / 16}rem`,
  fontFamily: "'Barlow', sans-serif",
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHero({ hero }) {
  const navigate = useNavigate();

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);


  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);


  const backgroundUrl = hero?.backgroundUrl || (hero?.HeroImage?.url ? `${process.env.REACT_APP_HOST_API}${hero.HeroImage.url}` : '');
  const isVideo = hero?.backgroundType === 'video' || 
    (backgroundUrl && (
      backgroundUrl.endsWith('.mp4') || 
      backgroundUrl.endsWith('.webm') || 
      backgroundUrl.endsWith('.ogg') ||
      hero?.HeroImage?.mime?.startsWith('video/')
    ));

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh', // Always use full height
          overflow: 'hidden',
        }}
      >
        {isVideo ? (
          <Box
            component="video"
            autoPlay
            loop
            muted
            playsInline
            // eslint-disable-next-line react/no-unknown-property
            webkit-playsinline="true"
            preload="auto"
            disablePictureInPicture
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
              objectFit: 'cover',
            }}
          >
            <source 
              src={backgroundUrl} 
              type={hero?.HeroImage?.mime || 'video/mp4'}
            />
            Your browser does not support the video tag.
          </Box>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: {
                xs: 'center',
                md: 'center',
              },
              zIndex: 0,
            }}
          />
        )}
        {/* <Box // Overlay
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust opacity as needed
            zIndex: 1,
          }}
        /> */}
        <Box
          sx={{
            position: 'relative', // changed from absolute to relative
            zIndex: 2,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: { xs: 'flex-end', md: 'flex-end' },
            height: '100%',
            px: { xs: 2, md: 8 },
            pb: { xs: 4, md: 8 },
          }}
        >
          <LandingCard
            title={hero?.Heading}
            subtitle={hero?.SubHeading}
            buttonText={hero?.ButtonText}
            delayNo={4}
            buttonClick={() => {
              if (!hero?.ButtonUrl) return;
              
              // Check if it's a full URL (starts with http:// or https://)
              if (/^https?:\/\//.test(hero.ButtonUrl)) {
                window.open(hero.ButtonUrl, '_blank', 'noopener,noreferrer');
              } else {
                // Handle relative paths with the router
                navigate(hero.ButtonUrl);
              }
            }}
          />
        </Box>
      </Box>
    </>
  );
}

HomeHero.propTypes = {
  hero: PropTypes.object,
};
