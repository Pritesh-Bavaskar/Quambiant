import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { LandingCard } from 'src/components/landing-card/LandingCard';
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

export default function CSRHero({ hero }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/assets/images/csr/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content */}
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
          title="Building Communities,
Preserving Our Planet"
          subtitle="Our commitment to corporate social responsibility drives
everything we do at Quambiant."
          //   buttonText="Learn More"
          //   buttonClick={() => navigate('/csr#about')}
          delayNo={0.2}
          sx={{
            maxWidth: { xs: '100%', md: '600px' },
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
          }}
        />
      </Box>
    </Box>
  );
}

CSRHero.propTypes = {
  hero: PropTypes.object,
};
