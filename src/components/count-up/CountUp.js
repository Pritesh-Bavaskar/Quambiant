// CountUp.tsx
import { Box, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

// Fallback stats in case statsSection is not provided
const defaultStats = [
  { value: 20, label: 'Years of experience' },
  { value: 10, label: 'Lac Sq. Ft Build up Area' },
  { value: 666, label: 'Luxury Flats' },
  { value: 3, label: 'Upcoming Luxury Projects' },
];

export default function CountUpSection({ statsSection }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Use statsSection data if available, otherwise use default stats
  const stats = statsSection
    ? [
        { value: parseInt(statsSection.StatOneNumber, 10), label: statsSection.StatOneLabel },
        { value: parseInt(statsSection.StatTwoNumber, 10), label: statsSection.StatTwoLabel },
        { value: parseInt(statsSection.StatThreeNumber, 10), label: statsSection.StatThreeLabel },
        { value: parseInt(statsSection.StatFourNumber, 10), label: statsSection.StatFourLabel },
      ]
    : defaultStats;

  return (
    <Box ref={ref} sx={{ py: { xs: 6, md: 10 }, bgcolor: '#FDF8F3' }}>
      <Typography variant="h1" align="center" fontFamily="Playfair Display" gutterBottom>
        {statsSection?.Heading}
      </Typography>
      <Typography
        align="center"
        sx={{
          color: 'text.secondary',
          fontSize: { xs: 14, md: 20 },
          fontWeight: 500,
          mb: { xs: 5, md: 8 },
          pt: 1,
          fontFamily: 'Satoshi Variable, sans-serif',
        }}
      >
        {statsSection?.SubHeading}
      </Typography>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{
          border: '1px solid #9B7A56',
          borderRadius: 0,
          overflow: 'hidden',
          bgcolor: 'transparent',
        }}
      >
        {stats.map((stat, idx) => (
          <Grid
            item
            xs={6}
            md={3}
            key={stat.label}
            sx={{
              borderRight: {
                xs: idx % 2 === 0 ? '1px solid #9B7A56' : 'none',
                md: idx !== stats.length - 1 ? '1px solid #9B7A56' : 'none',
              },
              borderBottom: {
                xs: idx < 2 ? '1px solid #9B7A56' : 'none',
                md: 'none',
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              py: { xs: 4, md: 7 },
              px: { xs: 2, md: 0 },
              bgcolor: 'inherit',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mb: 1 }}>
              <Typography
                component="span"
                sx={{
                  color: '#9B7A56',
                  fontWeight: 500,
                  fontFamily: 'Satoshi Variable, sans-serif',
                  fontSize: { xs: 48, md: 96 },
                  lineHeight: 1,
                  letterSpacing: 0,
                }}
              >
                {inView && <CountUp end={stat.value} duration={2} separator="," />}
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: '#9B7A56',
                  fontWeight: 500,
                  fontFamily: 'Satoshi Variable, sans-serif',
                  fontSize: { xs: 32, md: 56 },
                  lineHeight: 1,
                  ml: 0.5,
                  position: 'relative',
                  bottom: { xs: 2, md: 8 },
                }}
              >
                +
              </Typography>
            </Box>
            <Typography
              align="center"
              sx={{
                color: '#5C6170',
                fontFamily: 'Satoshi Variable, sans-serif',
                fontWeight: 500,
                fontSize: { xs: 14, md: 20 },
                letterSpacing: 0,
              }}
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CountUpSection.propTypes = {
  statsSection: PropTypes.object,
};
