import { Box, Container, Typography } from '@mui/material';
import { m } from 'framer-motion';
import newsBck from 'src/assets/media/news/news-bck.jpg';
import { LandingCard } from '../../components/landing-card/LandingCard';

// ----------------------------------------------------------------------

export default function PostHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: '34.72%' /* 500/1440 = 0.3472 or 34.72% */,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundImage: `url(${newsBck.src || newsBck})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
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
            title="Quambiant Newsroom"
            subtitle="Stay informed about our latest developments, corporate announcements, and industry insights."
            // buttonText="Explore Articles"
            // buttonClick={() => {}}
            delayNo={0.3}
            sx={{
              maxWidth: { xs: '100%', md: '600px' },
            }}
            location=""
            completionDate=""
          />
        </Box>
      </Box>
    </Box>
  );
}
