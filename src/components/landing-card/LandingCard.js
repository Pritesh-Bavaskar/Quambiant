import { Box, Typography, Button } from '@mui/material';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

export function LandingCard({
  title,
  subtitle,
  buttonText,
  buttonClick,
  location,
  completionDate,
  delayNo,
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: delayNo,
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
        {completionDate ? (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 12,
                color: 'text.secondary',
                border: '1px solid #E4E4E7',
                px: 1,
                py: 0.5,
                bgcolor: '#FAFAFA',
                width: '55%',
                maxWidth: '100%',
              }}
            >
              <img
                src="/assets/icons/our-project/calendar.png"
                alt="Calendar Icon"
                style={{ display: 'block', height: '16px', width: '16px', marginRight: '10px' }}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontWeight: 500,
                  gap: 1,
                  color: '#18181B',
                  fontFamily: 'Satoshi Variable',
                  fontSize: '12px',
                }}
              >
                {completionDate}
              </Typography>
            </Box>
          </m.div>
        ) : null}

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="h1">{title}</Typography>
        </m.div>

        {subtitle ? (
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
        ) : null}
        {completionDate && location ? (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 12,
                color: 'text.secondary',
                width: '100%',
                maxWidth: '100%',
                justifyContent: 'flex-start',
                gap: 2, // spacing between two sections
              }}
            >
              {/* Location */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img
                  src="/assets/icons/our-project-details/location.png" // <-- Location icon
                  alt="Location Icon"
                  style={{ height: '16px', width: '16px' }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 500,
                    color: '#ABAFBA',
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  {location}
                </Typography>
              </Box>

              {/* Completion Date */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img
                  src="/assets/icons/our-project-details/checkmark.png"
                  alt="Check Icon"
                  style={{ height: '16px', width: '16px' }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 500,
                    color: '#ABAFBA',
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                  }}
                >
                  {completionDate}
                </Typography>
              </Box>
            </Box>
          </m.div>
        ) : null}

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
  completionDate: PropTypes.string,
  location: PropTypes.string,
  delayNo: PropTypes.number,
};
