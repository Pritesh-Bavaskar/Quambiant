/* eslint-disable no-nested-ternary */
import {
  Box,
  Button,
  Stack,
  Typography,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import Image from 'src/components/image';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export default function OurProjectCard({ project }) {
  console.log(project);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showStages, setShowStages] = useState(false);
  const [showAllSteps, setShowAllSteps] = useState(false);

  const stages = [
    {
      title: 'Foundation Completed',
      subtitle: 'Basement and pillars done',
      status: 'Completed',
      date: 'Jan 2024',
    },
    {
      title: 'Structure Completed',
      subtitle: 'Building frame ready',
      status: 'Completed',
      date: 'Mar 2024',
    },
    {
      title: 'Brickwork In Progress',
      subtitle: 'Walls under construction',
      status: 'In Progress',
      date: 'May 2024',
    },
    { title: 'Plastering', subtitle: 'Starting soon', status: 'Pending', date: 'July 2024' },
    { title: 'Painting', subtitle: 'Final touches', status: 'Pending', date: 'Sep 2024' },
  ];

  const completedStages = stages.filter((stage) => stage.status === 'Completed').length;

  const toggleStages = () => {
    setShowStages((prev) => !prev);
    setShowAllSteps(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 670,
        bgcolor: 'background.paper',
        overflow: 'hidden',
        mx: 'auto',
      }}
    >
      {/* Top Image + Tags */}
      <Box sx={{ position: 'relative' }}>
        <Image
          onClick={() => navigate(`/our-project/${project.slug}`)}
          src="/assets/images/our-project/card-img.png"
          alt="Project"
          style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }}
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
            scrollbarWidth: 'none', // for Firefox
            '&::-webkit-scrollbar': { display: 'none' }, // for Chrome/Safari
            whiteSpace: 'nowrap',
            cursor: 'grab', // ✨ shows grab cursor on hover
            WebkitOverflowScrolling: 'touch', // ✨ smooth scroll on iOS
          }}
        >
          {['Residential', 'Luxury', 'Pre-Launch'].map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backdropFilter: 'blur(6px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid #FFFFFF1A',
                color: 'white',
                fontFamily: 'Satoshi Variable',
                fontSize: '12px',
                fontWeight: 500,
                borderRadius: '4px',
                height: '32px',
                px: 1.5,
                py: 0.5,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap', // ✨ Prevent chip from breaking into two lines
              }}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: '#F5E6D6',
          textAlign: 'center',
          fontSize: '12px',
          fontFamily: 'Satoshi Variable',
          fontWeight: 500,
          letterSpacing: 1,
          textTransform: 'uppercase',
        }}
      >
        Launching Soon
      </Box>

      {/* Content */}
      <Box
        sx={{
          px: { xs: 0, md: 3 },
          py: { xs: 4, md: 3 },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Stack direction="row" alignItems="center" mr={2} gap={1}>
            <img
              src="/assets/icons/our-project/location.png"
              alt="Project"
              style={{ display: 'block', height: '16px', width: '16px' }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                color: '#935D25',
                fontFamily: 'Satoshi Variable',
                fontSize: '12px',
              }}
            >
              Downtown Central
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 12,
              color: 'text.secondary',
              border: '1px solid #E4E4E7',
              px: 1,
              py: 0.5,
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
              Starting Q3 2024
            </Typography>
          </Box>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Satoshi Variable',
            fontWeight: 700,
            fontSize: '24px',
            mb: 2,
          }}
        >
          Horizon Heights
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={4}
          sx={{ fontWeight: 500, fontSize: '14px', mb: 2, fontFamily: 'Satoshi Variable' }}
        >
          A premium residential tower featuring luxury apartments with panoramic city views, smart
          home technology, and exceptional amenities designed for modern urban living.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            fontSize: '14px',
            mb: 2,
            fontFamily: 'Satoshi Variable',
            display: 'flex',
            color: '#09090B',
          }}
        >
          <img
            src="/assets/icons/our-project/star.png"
            alt="Star Icon"
            style={{ width: 18, height: 18, marginRight: 8, verticalAlign: 'middle' }}
          />
          Key Features
        </Typography>
        {/* Key Features */}
        <Grid container spacing={2}>
          {[
            { icon: '/assets/icons/our-project/elements.png', text: 'Smart home integration' },
            { icon: '/assets/icons/our-project/elements.png', text: 'Private fitness center' },
            { icon: '/assets/icons/our-project/elements.png', text: 'EV charging stations' },
            { icon: '/assets/icons/our-project/elements.png', text: 'Infinity pool' },
            { icon: '/assets/icons/our-project/elements.png', text: '24/7 concierge service' },
            { icon: '/assets/icons/our-project/elements.png', text: 'Rooftop garden' },
          ].map((item) => (
            <Grid item xs={6} key={item.text}>
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
                <img
                  src={item.icon}
                  alt={item.text}
                  style={{ width: 18, height: 18, marginRight: 8 }}
                />
                {item.text}
              </Box>
            </Grid>
          ))}
        </Grid>
        {project.status === 'ongoing' ? (
          <>
            <Stack direction="row" alignItems="center" sx={{ mb: 2, mt: 2 }}>
              <Box
                component="img"
                src="/assets/icons/our-project/wrench.png"
                alt="Construction Timeline Icon"
                sx={{ width: 18, height: 18, marginRight: 1 }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable',
                  display: 'flex',
                  color: '#18181B',
                }}
              >
                Construction Timeline
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: 'auto',
                  border: '1px solid #E4E4E7',
                  padding: '0px 15px',
                  bgcolor: '#FAFAFA',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                    display: 'flex',
                    color: '#5C5C70',
                  }}
                >
                  65%
                </Typography>
              </Box>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={65}
              sx={{
                mb: 4,
                height: 5,
                bgcolor: '#E6E6E6',
                borderRadius: 0,
                '& .MuiLinearProgress-bar': { bgcolor: '#BC772F', borderRadius: 0 },
              }}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable',
                  color: '#5C5C70',
                }}
              >
                <b style={{ color: '#17181C' }}>{completedStages}</b> of{' '}
                <b style={{ color: '#17181C' }}>{stages.length}</b> stages completed
              </Typography>
              <Typography
                onClick={toggleStages}
                sx={{
                  color: '#17181C',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <span>{showStages ? 'Hide All Stages' : 'Show All Stages'}</span>
                  <Box sx={{ ml: 1, display: 'flex' }}>
                    {showStages ? (
                      <Icon icon="mdi:chevron-up" width={20} height={20} />
                    ) : (
                      <Icon icon="mdi:chevron-down" width={20} height={20} />
                    )}
                  </Box>
                </Box>
              </Typography>
            </Stack>

            {/* Timeline */}
            <Collapse in={showStages}>
              <Timeline
                sx={{
                  pl: 0,
                  '& .MuiTimelineItem-root::before': {
                    display: 'none',
                  },
                }}
              >
                {(showAllSteps ? stages : stages.slice(0, 3)).map((stage, index) => {
                  const isCompleted = stage.status === 'Completed';
                  const isInProgress = stage.status === 'In Progress';
                  const nextStage = stages[index + 1];
                  const isNextCompleted = nextStage?.status === 'Completed';

                  // connector styling
                  const connectorStyles = {
                    backgroundColor: '#E5E7EB',
                    width: 2,
                    height: 80,
                  };

                  if (isCompleted && isNextCompleted) {
                    connectorStyles.backgroundColor = '#000000'; // solid black
                  } else if (isCompleted && !isNextCompleted) {
                    connectorStyles.backgroundImage =
                      'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)'; // black to transparent
                    connectorStyles.backgroundColor = 'transparent'; // important
                  }

                  return (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        {/* Outer + Inner Circles */}
                        <Box
                          sx={{
                            position: 'relative',
                            width: 36,
                            height: 36,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {/* Outer Circle */}
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              backgroundColor: isCompleted
                                ? '#10B9811A'
                                : isInProgress
                                ? '#BC772F1A'
                                : '#E5E7EB',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                            }}
                          />

                          {/* Inner Dot */}
                          <Box
                            sx={{
                              width: 18,
                              height: 18,
                              borderRadius: '50%',
                              backgroundColor: isCompleted
                                ? '#10B981'
                                : isInProgress
                                ? '#BC772F'
                                : 'grey',
                              zIndex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {/* Tick Icon */}
                            {isCompleted && (
                              <Icon icon="mdi:check" color="white" width="16" height="16" />
                            )}
                          </Box>
                        </Box>

                        {/* Line Connector */}
                        {index !== stages.length - 1 && <TimelineConnector sx={connectorStyles} />}
                      </TimelineSeparator>

                      <TimelineContent sx={{ ml: 2, pl: 0 }}>
                        <Stack
                          direction={isMobile ? 'column' : 'row'}
                          justifyContent="space-between"
                          alignItems={isMobile ? 'flex-start' : 'center'}
                          spacing={isMobile ? 0.5 : 2}
                        >
                          {/* Show Date first if mobile */}
                          {isMobile && (
                            <Box
                              sx={{
                                border: '1px solid #E4E4E7',
                                bgcolor: '#FAFAFA',
                                padding: '0px 20px',
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: 500,
                                  fontSize: '14px',
                                  fontFamily: 'Satoshi Variable',
                                  display: 'flex',
                                  color: '#5C5C70',
                                }}
                              >
                                {stage.date}
                              </Typography>
                            </Box>
                          )}

                          <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 500,
                                fontSize: '14px',
                                fontFamily: 'Satoshi Variable',
                              }}
                            >
                              {stage.title}
                            </Typography>

                            {/* Show Status Box only for Completed */}
                            {isCompleted && (
                              <Box
                                sx={{
                                  backgroundColor: '#10B981',
                                  color: 'white',
                                  px: 1,
                                  py: 0.2,
                                  fontWeight: 500,
                                  fontSize: '12px',
                                  fontFamily: 'Satoshi Variable',
                                }}
                              >
                                Completed
                              </Box>
                            )}
                          </Stack>

                          {/* Date at end if desktop */}
                          {!isMobile && (
                            <Box
                              sx={{
                                border: '1px solid #E4E4E7',
                                bgcolor: '#FAFAFA',
                                padding: '0px 20px',
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: 500,
                                  fontSize: '12px',
                                  fontFamily: 'Satoshi Variable',
                                  display: 'flex',
                                  color: '#5C5C70',
                                }}
                              >
                                {stage.date}
                              </Typography>
                            </Box>
                          )}
                        </Stack>

                        {/* Subtitle */}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mt: 0.5,
                            color: '#71717A',
                            fontWeight: 500,
                            fontSize: '14px',
                            fontFamily: 'Satoshi Variable',
                          }}
                        >
                          {stage.subtitle}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </Timeline>

              {/* Show More Button */}
              {!showAllSteps && stages.length > 3 && (
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setShowAllSteps(true)}
                  sx={{ display: 'block', mx: 'auto', mb: 2 }}
                >
                  + {stages.length - 3} More Stage{stages.length - 3 > 1 ? 's' : ''}
                </Button>
              )}

              {showAllSteps && stages.length > 3 && (
                <Button
                  variant="text"
                  size="small"
                  onClick={() => setShowAllSteps(false)}
                  sx={{ display: 'block', mx: 'auto', mb: 2 }}
                >
                  Show Less
                </Button>
              )}
            </Collapse>
          </>
        ) : null}
        {project.status === 'completed' ? (
          <>
            <Stack direction="row" alignItems="center" sx={{ mb: 2, mt: 2 }}>
              <Box
                component="img"
                src="/assets/icons/our-project/medal.png"
                alt="Construction Timeline Icon"
                sx={{ width: 18, height: 18, marginRight: 1 }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  fontSize: '14px',
                  fontFamily: 'Satoshi Variable',
                  display: 'flex',
                  color: '#18181B',
                }}
              >
                Awards & Recognition
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 2, mt: 2, flexWrap: 'wrap' }}
              spacing={2}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid EBCFB7',
                  padding: '0px 15px',
                  bgcolor: '#F5E6D6',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                    display: 'flex',
                    color: '#935D25',
                  }}
                >
                  Best Residential Development 2022
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid EBCFB7',
                  padding: '0px 15px',
                  bgcolor: '#F5E6D6',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Satoshi Variable',
                    display: 'flex',
                    color: '#935D25',
                  }}
                >
                  Heritage Conservation Award
                </Typography>
              </Box>
            </Stack>
          </>
        ) : null}
      </Box>

      {/* Action Buttons */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 0 }}>
        <Button
          fullWidth
          startIcon={
            <img
              src="/assets/icons/our-project/user-add.png"
              alt="Register Icon"
              style={{ width: 20, height: 20 }}
            />
          }
          sx={{
            borderRadius: 0,
            bgcolor: '#001016',
            color: 'white',
            py: 2,
            fontWeight: 500,
            fontSize: '18px',
            fontFamily: 'Satoshi Variable',
            '&:hover': {
              bgcolor: '#333',
            },
          }}
        >
          Register Interest
        </Button>
        <Button
          fullWidth
          startIcon={
            <img
              src="/assets/icons/our-project/download.png"
              alt="Download Icon"
              style={{ width: 20, height: 20 }}
            />
          }
          sx={{
            borderRadius: 0,
            bgcolor: '#E3E4E8',
            color: 'black',
            py: 2,
            fontWeight: 600,
          }}
        >
          Download Brochure
        </Button>
      </Stack>
    </Box>
  );
}

OurProjectCard.propTypes = {
  project: PropTypes.object,
};
