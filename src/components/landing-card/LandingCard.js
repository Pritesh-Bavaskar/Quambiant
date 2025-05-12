import { Box, Typography, Button } from '@mui/material';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

export function LandingCard({ title, subtitle, buttonText, buttonClick }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: 4, // Delay to match the IntroSection animation completion
      }}
    >
      <Box
        component={m.div}
        initial={{ backdropFilter: 'blur(18px)' }}
        animate={{ backdropFilter: 'blur(18px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        sx={{
          width: { xs: '100%', sm: '100%', md: '100%' },
          maxWidth: '600px',
          p: { xs: 2, sm: 3, md: 3 },
          background: 'rgba(0, 0, 0, 0.1)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          backdropFilter: 'blur(18px)',
          boxShadow: { xs: 'none', sm: '0 8px 32px rgba(0,0,0,0.2)' },
        }}
      >
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="h1" sx={{ lineHeight: { xs: '32px', md: '48px' } }}>
            {title}
          </Typography>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: '500 !important',
              fontSize: { xs: '14px', md: '18px' },
              color: '#CCCCCC',
            }}
          >
            {subtitle}
          </Typography>
        </m.div>
        {buttonText && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              variant="contained"
              sx={{
                py: '7px',
                px: '20px',
                color: 'black',
                bgcolor: 'neutral.lighter',
                borderRadius: 0,
                width: 'fit-content',
                mt: 1,
                fontSize: '16px',
              }}
              onClick={buttonClick}
            >
              {buttonText}
            </Button>
          </m.div>
        )}
      </Box>
    </m.div>
  );
}

LandingCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func,
};
