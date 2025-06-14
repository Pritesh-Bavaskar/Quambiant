import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import newsBck from 'src/assets/media/news/news-bck.jpg';
import { LandingCard } from '../../components/landing-card/LandingCard';

// ----------------------------------------------------------------------

export default function PostHero({ hero }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: {
          xs: '152.67%',
          sm: '80%',
          md: '34.72%',
        },
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
          backgroundImage: hero?.Image?.url
            ? `url(${process.env.REACT_APP_HOST_API}${hero?.Image?.url})`
            : `url(${newsBck.src})`,
          backgroundSize: 'cover',
          backgroundPosition: {
            xs: 'right 30% bottom 20%',
            sm: 'center 30% bottom 20%',
            md: 'center top',
          },
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
            title={hero?.Heading}
            subtitle={hero?.SubHeading}
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

PostHero.propTypes = {
  hero: PropTypes.shape({
    Heading: PropTypes.string,
    SubHeading: PropTypes.string,
    Image: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

