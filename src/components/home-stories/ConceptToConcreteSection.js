import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import {
  m as motion,
  useInView,
  useAnimation,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from 'framer-motion';
import PropTypes from 'prop-types';
import dreamDesignImg from 'src/assets/media/landing/dream-to-design.png';

// Motion variant for fade-in effect
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Timeline Item Component
const TimelineItem = ({
  title,
  content,
  image,
  reverse = false,
  index,
  isActive,
  parallaxOffset,
  isDotAtCenter,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Enhanced timeline item animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay: index * 0.1,
      },
    },
  };

  // Additional animation for active items
  const activeVariants = {
    inactive: {
      scale: 0.8,
      filter: 'grayscale(30%) brightness(90%)',
    },
    active: {
      scale: 1,
      filter: 'grayscale(0%) brightness(100%)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <Grid
      container
      spacing={6}
      sx={{
        mb: 4,
        alignItems: 'center',
        position: 'relative',
        '&:last-child': { mb: 0 },
        '&.MuiGrid-root': {
          paddingRight: {
            xs: 0, // No padding on mobile
            md: reverse ? 0 : 4, // Conditional padding on desktop
          },
          paddingLeft: {
            xs: 0, // No padding on mobile
            md: reverse ? 4 : 0, // Conditional padding on desktop
          },
        },
      }}
      ref={ref}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          order: {
            xs: 1,
            md: reverse ? 2 : 1,
          },
          position: { md: 'static' },
          zIndex: 1,
          alignSelf: 'flex-start',
        }}
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          custom={index}
          style={{
            transform: `translateY(${reverse ? -parallaxOffset / 2 : parallaxOffset}px)`,
            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <motion.div variants={activeVariants} animate={isActive ? 'active' : 'inactive'}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 0,
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'transform 0.3s ease-out',
              }}
            />
          </motion.div>
        </motion.div>
      </Grid>

      {/* Progress dot */}
      <Box
        sx={{
          position: 'absolute',
          left: '52.25%',
          top: '58%',
          transform: 'translate(-50%, -50%)',
          width: isActive || isDotAtCenter ? 20 : 16,
          height: isActive || isDotAtCenter ? 20 : 16,
          borderRadius: '50%',
          backgroundColor: isDotAtCenter ? 'secondary.main' : 'secondary.main',
          border: '3px solid white',
          // boxShadow: isDotAtCenter ? '0 0 0 6px rgba(0,120,255,0.18)' : '0 0 0 2px rgba(0,120,255,0.2)',
          display: { xs: 'none', md: 'block' },
          zIndex: 2,
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {(isActive || isDotAtCenter) && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              background: isDotAtCenter ? ' #005F86' : ' #005F86',
              opacity: 0.7,
            }}
          />
        )}
      </Box>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          order: {
            xs: 2,
            md: reverse ? 1 : 2,
          },
          position: { md: 'static' }, // Changed from 'sticky'
          zIndex: 1,
          '&.MuiGrid-root': {
            paddingLeft: {
              xs: 1.5, // No padding on mobile
              md: 5,
            },
            paddingTop: {
              xs: 0, // No padding on mobile
              md: 7,
            },
          },
          alignSelf: 'flex-start',
        }}
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          custom={index + 0.2} // Slight delay for content
          style={{
            transform: `translateY(${reverse ? parallaxOffset : -parallaxOffset / 2}px)`,
            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <motion.div
            variants={activeVariants}
            animate={() => {
              if (window.innerWidth >= 768) {
                return isActive ? 'active' : 'inactive';
              }
              return 'inactive';
            }}
          >
            <Box sx={{ pl: reverse ? 0 : { md: 4 }, pr: reverse ? { md: 4 } : 0 }}>
              <Typography
                // variant="h3"
                sx={{
                  fontFamily: 'Satoshi Variable, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '18px', md: '32px' },
                  mb: 2,
                  color: '#18191B',
                  transition: 'color 0.3s ease-out',
                }}
              >
                {title}
              </Typography>
              <Typography
                // variant="body1"
                sx={{
                  color: 'text.secondary',
                  // lineHeight: 1.8,
                  fontWeight: 500,
                  fontFamily: 'Satoshi Variable, sans-serif',
                  fontSize: { xs: '14px', md: '20px' },
                }}
              >
                {content}
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Grid>
    </Grid>
  );
};

// Add PropTypes validation for TimelineItem
TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  parallaxOffset: PropTypes.number.isRequired,
  isDotAtCenter: PropTypes.bool.isRequired,
};

// Mobile slider progress bar component
const MobileProgressBar = ({ progress, count }) => (
  <Box
    sx={{
      width: '100%',
      height: '4px',
      backgroundColor: 'rgba(0, 120, 255, 0.2)',
      borderRadius: '2px',
      overflow: 'visible', // Changed to visible to show the dot
      mt: 2,
      position: 'relative',
    }}
  >
    <Box
      sx={{
        height: '100%',
        width: `${(progress + 1) * (100 / count)}%`,
        background: 'linear-gradient(to right, #005F8600, #005F86)',
        transition: 'width 0.3s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        position: 'relative',
      }}
    >
      {/* Progress dot at the end */}
      <Box
        sx={{
          position: 'absolute',
          left: '100%',
          top: '58%',
          transform: 'translate(-50%, -50%)',
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: 'secondary.main',
          border: '3px solid white',
          zIndex: 2,
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </Box>
  </Box>
);

MobileProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default function ConceptToConcreteSection() {
  const timelineData = [
    {
      title: 'From Dream to Design',
      content:
        'It all begins with passion and creative vision. In our early days as architects, every sketch and blueprint was more than just lines on paper—it was a commitment. This formed the foundation for innovation and set our journey in motion.',
      image: dreamDesignImg,
      reverse: false,
    },
    {
      title: 'Precision Engineering',
      content:
        'Every successful structure relies on meticulous engineering. Our dedicated team transforms creative visions into technical specifications, ensuring that each project stands the test of time.',
      image: dreamDesignImg,
      reverse: true,
    },
    {
      title: 'Built to Last',
      content:
        'From concept to concrete, our commitment to quality never wavers. We build with the future in mind, creating spaces that don&apos;t just serve the present but stand as testaments to lasting excellence.',
      image: dreamDesignImg,
      reverse: false,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const [parallaxOffsets, setParallaxOffsets] = useState([]);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const itemsRefs = useRef([]);
  const timelineBarRef = useRef(null);
  const sectionRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const [isFullyScrolled, setIsFullyScrolled] = useState(false);
  const [isInCenter, setIsInCenter] = useState(false);
  const [dotAtCenterIdx, setDotAtCenterIdx] = useState(-1);
  const [dotPositions, setDotPositions] = useState([]);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Calculate dot positions here to ensure they're always up-to-date
    // This helps position the timeline bar precisely at the first and last TimelineItem
    itemsRefs.current = itemsRefs.current.slice(0, timelineData.length);

    const calculateItemPositions = () => {
      if (!sectionRef.current || itemsRefs.current.some((ref) => !ref)) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const positions = itemsRefs.current.map((ref) => {
        const itemRect = ref.getBoundingClientRect();
        // Calculate relative position within the section (0 to 1)
        return (itemRect.top + itemRect.height / 2 - sectionRect.top) / sectionRect.height;
      });

      setDotPositions(positions);
    };

    // Initial calculation once refs are available
    setTimeout(calculateItemPositions, 200);

    // Recalculate on resize
    window.addEventListener('resize', calculateItemPositions);
    return () => window.removeEventListener('resize', calculateItemPositions);
  }, [timelineData.length]);

  // Handle scroll events with throttling for better performance
  useEffect(() => {
    const handleScroll = () => {
      // Clear any existing timeout to prevent multiple rapid updates
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Use setTimeout to throttle scroll events and make animation smoother
      scrollTimeoutRef.current = setTimeout(() => {
        if (!sectionRef.current) return;

        const sectionElement = sectionRef.current;
        const { top, height } = sectionElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate section position relative to viewport
        const sectionTopRelative = top / viewportHeight;
        const sectionBottomRelative = (top + height) / viewportHeight;

        // Section is in center when its center is near viewport center
        const isCentered = sectionTopRelative < 0.4 && sectionBottomRelative > 0.6;

        setIsInCenter(isCentered);

        // Calculate scroll progress based on position
        let progress;

        if (isCentered && !isFullyScrolled) {
          // When section is centered and not fully scrolled,
          // calculate progress from 0 to 1 based on how much of the section has been scrolled
          progress = Math.max(
            0,
            Math.min(
              1,
              (0.4 - sectionTopRelative) / (sectionBottomRelative - sectionTopRelative - 0.2)
            )
          );
          setTimelineProgress(progress);
        }

        // Find which timeline item is most centered in the viewport
        if (itemsRefs.current && itemsRefs.current.length > 0) {
          let closestIdx = -1;
          let minDistance = Infinity;

          itemsRefs.current.forEach((ref, idx) => {
            if (!ref) return;

            const itemRect = ref.getBoundingClientRect();
            const itemCenterY = itemRect.top + itemRect.height / 2;
            const distanceToCenter = Math.abs(itemCenterY - viewportHeight / 2);

            if (distanceToCenter < minDistance) {
              minDistance = distanceToCenter;
              closestIdx = idx;
            }
          });

          // More forgiving threshold (120px)
          if (minDistance < 120 && closestIdx !== -1) {
            setDotAtCenterIdx(closestIdx);
            setActiveIndex(closestIdx);
          }
        }

        // Calculate parallax effect
        if (itemsRefs.current) {
          const offsets = itemsRefs.current.map((ref) => {
            if (!ref) return 0;
            const itemRect = ref.getBoundingClientRect();
            const distToCenter = itemRect.top + itemRect.height / 2 - viewportHeight / 2;
            return Math.max(Math.min(distToCenter * 0.2, 80), -80);
          });
          setParallaxOffsets(offsets);
        }
      }, 5); // Short timeout for responsiveness
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isFullyScrolled]);

  const handleMobileScroll = (e) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const scrollPosition = slider.scrollLeft;
    const itemWidth = slider.clientWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);

    if (newIndex !== mobileActiveIndex) {
      setMobileActiveIndex(newIndex);
    }
  };

  // Timeline progress animation variants
  const progressVariants = {
    initial: { height: 0 },
    animate: {
      height: `${timelineProgress * 100}%`,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Fallback dot positions if not yet calculated
  const defaultDotPositions = Array.from({ length: timelineData.length }, (_, i) =>
    timelineData.length === 1 ? 0.5 : i / (timelineData.length - 1)
  );

  // Use calculated positions or fallback
  const actualDotPositions =
    dotPositions.length === timelineData.length ? dotPositions : defaultDotPositions;

  const dotCount = actualDotPositions.length;

  // First, let's add swipe detection logic at the top of the component
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const threshold = 50;

    if (touchStart - touchEnd > threshold) {
      // Swipe left - next slide
      setMobileActiveIndex((prev) => Math.min(prev + 1, timelineData.length - 1));
    } else if (touchEnd - touchStart > threshold) {
      // Swipe right - previous slide
      setMobileActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <LazyMotion features={domAnimation}>
      <Container maxWidth="lg" sx={{ py: 16 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 0, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
                fontSize: { xs: '28px', md: '42px' },
                mb: 1,
              }}
            >
              From Concept to Concrete
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '14px', md: '20px' },
                fontFamily: 'Satoshi Variable, sans-serif',
                maxWidth: 900,
                fontWeight: 500,
                mx: 'auto',
              }}
            >
              From visionary designs to built realities — our journey is a testament to passion,
              precision, and progress.
            </Typography>
          </Box>
        </motion.div>

        {/* Mobile slider */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              height: '70vh',
              overflow: 'hidden',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {timelineData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: index === mobileActiveIndex ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  px: 0,
                  py: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <TimelineItem
                  title={item.title}
                  content={item.content}
                  image={item.image}
                  index={index}
                  isActive={index === mobileActiveIndex}
                  parallaxOffset={0}
                  isDotAtCenter={false}
                />
              </Box>
            ))}
          </Box>

          <MobileProgressBar progress={mobileActiveIndex} count={timelineData.length} />
        </Box>
        {/* Navigation dots */}
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {timelineData.map((_, index) => (
              <Box 
                key={index}
                onClick={() => setMobileActiveIndex(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: index === mobileActiveIndex ? 'primary.main' : 'grey.300',
                  mx: 1,
                  cursor: 'pointer'
                }}
              />
            ))}
          </Box>
          <MobileProgressBar progress={mobileActiveIndex} count={timelineData.length} />
        </Box> */}

        {/* Desktop timeline */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {/* Timeline content with parallax and snapping */}
          <Box
            ref={sectionRef}
            sx={{
              position: 'relative',
              height: 'auto',
              minHeight: { xs: '600px', md: '100vh' },
              overflow: 'visible',
              scrollSnapType: 'y mandatory',
              WebkitOverflowScrolling: 'touch',
              py: 4,
            }}
          >
            {/* Vertical progress line with dynamic fill */}
            <Box
              ref={timelineBarRef}
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: 4,
                transform: 'translateX(-50%)',
                display: { xs: 'none', md: 'block' },
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              {/* Timeline bar only from first to last TimelineItem */}
              <Box
                sx={{
                  position: 'absolute',
                  top: `${actualDotPositions[0] * 100}%`,
                  bottom: `${(1 - actualDotPositions[actualDotPositions.length - 1]) * 100}%`,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 120, 255, 0.2)',
                  borderRadius: 1,
                }}
              />
              {/* Timeline progress bar - fills to the TimelineItem currently at center */}
              <Box
                sx={{
                  position: 'absolute',
                  top: `${actualDotPositions[0] * 100}%`,
                  left: 0,
                  right: 0,
                  height:
                    dotAtCenterIdx >= 0
                      ? `${(actualDotPositions[dotAtCenterIdx] - actualDotPositions[0]) * 100}%`
                      : '4px',
                  background: 'linear-gradient(to bottom, #005F8600, #005F86)',
                  borderRadius: 1,
                  minHeight: '4px',
                  zIndex: 3,
                  transition: 'height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.0)',
                }}
              />
              {/* Dots/points for each timeline item (skip the first/top dot) */}
              {actualDotPositions.map((pos, i) =>
                i === 0 ? null : (
                  <Box
                    key={i}
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: `${pos * 100}%`,
                      transform: 'translate(-50%, -50%)',
                      width: i === dotCount - 1 ? 20 : 14,
                      height: i === dotCount - 1 ? 20 : 14,
                      zIndex: 2,
                      pointerEvents: 'none',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundColor:
                          timelineProgress >= pos ? 'primary.main' : 'rgba(0,120,255,0.2)',
                        border: '6px solid white',
                        boxShadow: '0 0 0 2px rgba(0,0,0,0.0)',
                        transition: 'all 0.3s',
                        // When the dot is active (at center), make it slightly smaller
                        transform: dotAtCenterIdx === i ? 'scale(0.85)' : 'scale(1)',
                      }}
                    />
                  </Box>
                )
              )}
            </Box>
            {/* Timeline items with snapping */}
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 4, md: 8 },
                ml: { md: 0 },
                // Add left/right padding so content doesn't overlap fixed line
                pl: { md: '60px' },
                pr: { md: '60px' },
              }}
            >
              {timelineData.map((item, index) => (
                <Box
                  key={index}
                  ref={(el) => {
                    itemsRefs.current[index] = el;
                  }}
                  sx={{
                    scrollSnapAlign: 'start',
                    minHeight: { xs: '70vh', md: '80vh' },
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: index === activeIndex ? 2 : 1,
                    width: '100%',
                  }}
                >
                  <TimelineItem
                    title={item.title}
                    content={item.content}
                    image={item.image}
                    reverse={item.reverse}
                    index={index}
                    isActive={index === activeIndex}
                    parallaxOffset={parallaxOffsets[index] || 0}
                    isDotAtCenter={dotAtCenterIdx === index}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </LazyMotion>
  );
}
