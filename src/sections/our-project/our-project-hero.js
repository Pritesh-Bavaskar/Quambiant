import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// components
import { varFade } from 'src/components/animate';
import { LandingCard } from 'src/components/landing-card/LandingCard';

// ----------------------------------------------------------------------

export default function OurProjectHero() {
  return (
    <Box
      sx={{
        height: { xs: '100vh', md: 500 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/images/our-project/hero.png)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
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
          title="Our Property Portfolio"
          subtitle="Discover our carefully curated collection of premium real estate developments designed with meticulous attention to detail and uncompromising quality."
          buttonText="Explore Our Projects"
        />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
