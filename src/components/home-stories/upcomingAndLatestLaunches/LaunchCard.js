import { Box, Chip, Typography, Stack, Button, useMediaQuery, useTheme } from '@mui/material';
import Image from 'src/components/image';
import PropTypes from 'prop-types';

export default function LaunchCard({ project }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Validate project prop
  if (!project) return null;

  return (
    <Box
      sx={{
        bgcolor: '#FDF8F3',
        overflow: 'hidden',
        padding: '16px',
        // border: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Top Image + Tags */}
      <Box sx={{ position: 'relative' }}>
        <Image
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            right: 16,
            overflowX: 'auto',
            display: 'flex',
            gap: 1,
            pr: 2,
            pl: 0.5,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            whiteSpace: 'nowrap',
            cursor: 'grab',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: 'rgba(255,255,255,0.3)',
                color: 'white',
                backdropFilter: 'blur(4px)',
                fontSize: 10,
                borderRadius: 0,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Project Details */}
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {project.title}
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: '#18191B',
              color: 'white',
              fontSize: 12,
              px: 2,
              borderRadius: 0,
              '&:hover': {
                bgcolor: '#333',
              },
            }}
          >
            Enquire Now
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {project.type} &bull; {project.location}
        </Typography>

        {/* Timeline */}
        {/* <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {project.timeline.map((stage, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {stage}
              </Typography>
            </Box>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}

LaunchCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    timeline: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
