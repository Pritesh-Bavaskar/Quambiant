// CountUp.tsx
import { Box, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 20, label: 'Years of experience' },
  { value: 10, label: 'Lac Sq. Ft Build up Area' },
  { value: 666, label: 'Luxury Flats' },
  { value: 3, label: 'Upcoming Luxury Projects' },
];

export default function CountUpSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <Box ref={ref} sx={{ px: { xs: 2, md: 8 }, py: { xs: 6, md: 10 }, bgcolor: '#FDF8F3' }}>
      <Typography
        align="center"
        fontFamily="Playfair Display"
        gutterBottom
        sx={{
          typography: { xs: 'h4', md: 'h1' },
        }}
      >
        A Legacy in Every Detail
      </Typography>
      <Typography
        align="center"
        color="text.secondary"
        mb={5}
        sx={{
          typography: { xs: 'body4', md: 'body1' },
        }}
      >
        Years of expertise, happy homeowners, and stunning residences—see what makes us stand apart
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Box
              textAlign="center"
              borderRight={{ md: idx < stats.length - 1 ? '1px solid #ccc' : 'none' }}
              pr={2}
            >
              <Typography
                variant="h1"
                color="primary.dark"
                fontSize={{ xs: 48, md: 96 }}
                fontWeight={500}
                fontFamily="Satoshi Variable"
                display="flex"
                alignItems="baseline"
                justifyContent="center"
              >
                {inView && <CountUp end={stat.value} duration={2} />}
                <Typography
                  variant="h1"
                  color="primary.dark"
                  fontSize={30}
                  fontWeight={500}
                  fontFamily="Playfair Display"
                >
                  +
                </Typography>
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                fontSize={{ xs: 14, md: 20 }}
                pt={4}
                fontWeight={500}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
