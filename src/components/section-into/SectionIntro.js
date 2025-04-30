// SectionIntro.tsx
import { Box, Typography } from '@mui/material';

export function SectionIntro() {
  return (
    <Box
      sx={{
        bgcolor: '#FDF8F3',
        minHeight: { xs: '760px', md: '800px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{ typography: { xs: 'h4', md: 'h1' } }}
        fontWeight="bold"
        fontFamily={`'Playfair Display', serif`}
        gutterBottom
      >
        Landmarks of Excellence in Residential Living
      </Typography>

      <Typography
        sx={{ typography: { xs: 'body3', md: 'body1' } }}
        maxWidth="700px"
        color="text.secondary"
      >
        Explore our finest residential projects that redefine luxury, innovation, and craftsmanship—
        each home built to perfection, each space designed for life.
      </Typography>
    </Box>
  );
}
