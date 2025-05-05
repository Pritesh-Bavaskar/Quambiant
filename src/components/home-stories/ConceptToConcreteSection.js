import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { m as motion, useInView, useAnimation, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
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
      ease: "easeOut"
    }
  }
};

// Timeline Item Component
const TimelineItem = ({ title, content, image, reverse = false, index, isActive }) => {
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
      scale: 0.95
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
        delay: index * 0.1
      }
    }
  };

  // Additional animation for active items
  const activeVariants = {
    inactive: {
      scale: 1,
      filter: 'grayscale(30%) brightness(90%)',
    },
    active: {
      scale: 1.02,
      filter: 'grayscale(0%) brightness(100%)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  return (
    <Grid 
      container 
      spacing={6} 
      sx={{ 
        mb: 8, 
        alignItems: 'center', 
        position: 'relative',
        '&:last-child': { mb: 0 },
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
            md: reverse ? 2 : 1 
          } 
        }}
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          custom={index}
        >
          <motion.div
            variants={activeVariants}
            animate={isActive ? 'active' : 'inactive'}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
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
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: isActive ? 24 : 16,
          height: isActive ? 24 : 16,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          border: '3px solid white',
          boxShadow: '0 0 0 2px rgba(0,120,255,0.2)',
          display: { xs: 'none', md: 'block' },
          zIndex: 2,
          transition: 'all 0.3s ease-out',
        }}
      >
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(0,120,255,0.4) 70%)',
              opacity: 0.7
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
            md: reverse ? 1 : 2 
          } 
        }}
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          custom={index + 0.2} // Slight delay for content
        >
          <motion.div
            variants={activeVariants}
            animate={isActive ? 'active' : 'inactive'}
          >
            <Box sx={{ pl: reverse ? 0 : { md: 4 }, pr: reverse ? { md: 4 } : 0 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 500,
                  fontSize: { xs: '24px', md: '32px' },
                  mb: 2,
                  color: isActive ? 'primary.main' : 'text.primary',
                  transition: 'color 0.3s ease-out',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontFamily: 'Satoshi Variable, sans-serif',
                  fontSize: { xs: '14px', md: '18px' },
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
  isActive: PropTypes.bool.isRequired
};

export default function ConceptToConcreteSection() {
  const timelineData = [
    {
      title: 'From Dream to Design',
      content: 'It all begins with passion and creative vision. In our early days as architects, every sketch and blueprint was more than just lines on paper—it was a commitment. This formed the foundation for innovation and set our journey in motion.',
      image: dreamDesignImg,
      reverse: false
    },
    {
      title: 'Precision Engineering',
      content: 'Every successful structure relies on meticulous engineering. Our dedicated team transforms creative visions into technical specifications, ensuring that each project stands the test of time.',
      image: dreamDesignImg,
      reverse: true
    },
    {
      title: 'Built to Last',
      content: 'From concept to concrete, our commitment to quality never wavers. We build with the future in mind, creating spaces that don&apos;t just serve the present but stand as testaments to lasting excellence.',
      image: dreamDesignImg,
      reverse: false
    }
  ];
  
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInCenter, setIsInCenter] = useState(false);
  const [isFullyScrolled, setIsFullyScrolled] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  
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
        const isCentered = 
          sectionTopRelative < 0.4 && 
          sectionBottomRelative > 0.6;
        
        setIsInCenter(isCentered);
        
        // Calculate scroll progress based on position
        let progress;
        
        if (isCentered && !isFullyScrolled) {
          // When section is centered and not fully scrolled, 
          // we gradually increase progress
          const centerPoint = (viewportHeight / 2 - top) / (height / 2);
          progress = Math.min(centerPoint, 1);
          
          // Mark as fully scrolled once we've reached the end
          if (progress >= 0.95) {
            setIsFullyScrolled(true);
          }
        } else {
          // Calculate normal scroll progress
          const startPoint = viewportHeight; // Section enters from bottom
          const endPoint = -height; // Section exits at top
          progress = (startPoint - top) / (startPoint - endPoint);
          
          // Reset fully scrolled state when scrolled back up
          if (progress <= 0.1) {
            setIsFullyScrolled(false);
          }
        }
        
        // Ensure progress is between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        // Apply smoothing to the progress value by blending with previous value
        setScrollProgress(prev => prev * 0.3 + progress * 0.7);
        
        // Determine which timeline item is active based on scroll progress
        if (isCentered) {
          // Map progress to timeline item index
          // We have 3 items, so we divide progress into 3 segments
          const itemCount = timelineData.length;
          const activeItemIndex = Math.min(
            Math.floor(progress * itemCount * 1.2), // Multiply by 1.2 to reach the last item sooner
            itemCount - 1
          );
          setActiveIndex(activeItemIndex);
        } else if (progress < 0.1 || progress > 0.9) {
          // When outside the main viewport area, no item is active
          setActiveIndex(-1);
        }
      }, 10); // Short timeout for responsiveness while preventing excessive updates
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isFullyScrolled, timelineData.length]);
  
  // Calculate content translation based on scroll progress
  // Gradually increase movement when in center
  const contentOffset = isInCenter
    ? Math.min(scrollProgress * 100, 100) // Cap at 100% when centered
    : scrollProgress * 50; // Normal scroll outside center
  
  // Timeline progress animation variants
  const progressVariants = {
    initial: { height: 0 },
    animate: { 
      height: `${scrollProgress * 100}%`,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };
  
  return (
    <LazyMotion features={domAnimation}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
                fontSize: { xs: '28px', md: '42px' },
                mb: 1
              }}
            >
              From Concept to Concrete
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '16px', md: '20px' },
                fontFamily: 'Satoshi Variable, sans-serif',
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              From visionary designs to built realities — our journey is a testament to passion, precision, and progress.
            </Typography>
          </Box>
        </motion.div>

        {/* Timeline container with fixed height */}
        <Box 
          ref={sectionRef}
          sx={{ 
            position: 'relative', 
            height: { xs: '450px', md: '600px' }, 
            overflow: 'hidden',
          }}
        >
          {/* Vertical progress line with dynamic fill */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: 2,
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' },
              zIndex: 1,
            }}
          >
            {/* Background line (unfilled portion) */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 120, 255, 0.2)',
              }}
            />
            
            {/* Progress line (filled portion) with animation */}
            <motion.div
              variants={progressVariants}
              initial="initial"
              animate="animate"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#0078ff',
              }}
            />
          </Box>

          {/* Timeline content with dynamic positioning based on scroll */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
            }}
            animate={{ 
              y: `-${contentOffset}%`,
            }}
            transition={{ 
              type: 'spring',
              stiffness: 50,
              damping: 20,
              mass: 1
            }}
          >
            {/* Render timeline items */}
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                content={item.content}
                image={item.image}
                reverse={item.reverse}
                index={index}
                isActive={index === activeIndex}
              />
            ))}
          </motion.div>
        </Box>
      </Container>
    </LazyMotion>
  );
}
