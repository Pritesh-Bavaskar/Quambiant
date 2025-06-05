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
        padding: '15px',
        // border: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Top Image + Tags */}
      <Box sx={{ position: 'relative', height: { xs: 400, md: 400 } }}>
        <Image
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
          }}
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
              // size="small"
              sx={{
                fontFamily: 'Satoshi Variable',
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                backdropFilter: 'blur(8px)',
                fontSize: { xs: 10, md: 12 },
                borderRadius: 0,
                textTransform: 'uppercase',
              }}
            />
          ))}
        </Box>
        {/* Timeline */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            bgcolor: 'rgba(0,0,0,0.0)',
            py: 1,
            px: 1,
            borderRadius: 1,
            maxHeight: 300, // Set a fixed maximum height
            overflowY: 'auto', // Enable vertical scrolling
            '&::-webkit-scrollbar': {
              width: '0px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(255,255,255,0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: 'rgba(255,255,255,0.5)',
            },
          }}
        >
          {project.timeline.map((stage, index) => {
            const isCompleted = stage.status === 'ongoing' || stage.status === 'completed';
            const isLastItem = index === project.timeline.length - 1;

            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                  maxWidth: 300,
                  minHeight: 70,
                }}
              >
                {/* Vertical progress line */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    bgcolor: isCompleted ? 'primary.main' : '#FDF8F3',
                    transform: 'translateX(-50%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    width: 12,
                    height: 12,
                    ml: '-6px',
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: isCompleted ? 'primary.main' : '#FDF8F3',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: 2,
                      left: 2,
                      zIndex: 1,
                    }}
                  />
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      bgcolor: isCompleted ? 'primary.main' : '#FDF8F3',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      opacity: 0.2,
                      zIndex: 0,
                    }}
                  />
                </Box>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', ml: 2, justifyContent: 'center' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#FDF8F3',
                      fontWeight: 500,
                      lineHeight: 1.4,
                      mb: 0.5,
                      fontSize: { xs: 12, md: 14 },
                      fontFamily: 'Satoshi Variable',
                    }}
                  >
                    {stage.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(253, 248, 243, 0.8)',
                      lineHeight: 1.4,
                      fontSize: { xs: 12, md: 14 },
                      fontWeight: 500,
                      fontFamily: 'Satoshi Variable',
                    }}
                  >
                    - {stage.date} {`(${stage.status})`}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Project Details */}
      <Box
        sx={{
          px: 0,
          py: 2,
          position: { sm: 'relative' },
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: 24, sm: 32 },
            fontFamily: 'playfair display',
            color: '#18191B',
            mb: { xs: 1, sm: 0 },
          }}
        >
          {project.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: { xs: 1, sm: 1 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <img src="/assets/icons/upcoming-launches/building.svg" alt="Building" />
            <Typography
              sx={{
                fontFamily: 'Satoshi Variable',
                fontWeight: 500,
                fontSize: { xs: 12, sm: 14 },
                textTransform: 'uppercase',
                color: '#5C6170',
              }}
            >
              {project.type}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <img src="/assets/icons/upcoming-launches/location.svg" alt="Location" />
            <Typography
              sx={{
                fontFamily: 'Satoshi Variable',
                fontWeight: 500,
                fontSize: { xs: 12, sm: 14 },
                textTransform: 'uppercase',
                color: '#5C6170',
              }}
            >
              {project.location}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: '#001016',
            color: 'white',
            fontSize: 12,
            width: 120,
            height: 40,
            minWidth: 120,
            borderRadius: 0,
            display: { xs: 'inline-block', sm: 'inline-block' },
            mt: { xs: 2, sm: 1 },
            position: { xs: 'static', sm: 'absolute' },
            right: { sm: 0 },
            top: { sm: 0 },
            alignSelf: { xs: 'flex-start', sm: 'auto' },
            '&:hover': {
              bgcolor: '#333',
            },
          }}
        >
          Enquire Now
        </Button>

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
