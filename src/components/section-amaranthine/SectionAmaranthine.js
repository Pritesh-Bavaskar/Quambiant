import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useScroll, useTransform, m } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import AmaranthineGrid from './AmaranthineGrid';
import AmaranthineCard from './AmaranthineCard';

// Separate component for animated words to properly use hooks
const AnimatedWord = ({ word, index, totalWords }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'], // when the word enters and exits the viewport
  });

  const start = index / totalWords;
  const end = (index + 1) / totalWords;

  const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);

  return (
    <m.span
      ref={ref}
      style={{
        opacity,
        marginRight: '0.25em',
        whiteSpace: 'pre-wrap',
        display: 'inline-block',
      }}
    >
      {word}
    </m.span>
  );
};

AnimatedWord.propTypes = {
  word: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  totalWords: PropTypes.number.isRequired,
};

export function SectionAmaranthine({ projectShowcase }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const containerRef = useRef(null);
  const [fifthImageProgress, setFifthImageProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Desktop version animations
  // Removed animations for the first section

  // Grid section animations
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 1]);
  const gridScale = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 1]);

  // Fifth grid item and card synchronized animations
  const transition = {
    start: 0.5,
    mid1: 0.6,
    mid2: 0.65,
    mid3: 0.7,
    end: 0.95, // Push the end transition much later
  };

  const fifthItemScale = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 1.1, 1.2, 1.3, 1.4]
  );

  const fifthItemOpacity = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 0.9, 0.6, 0.4, 0]
  );

  const fifthItemDivScale = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 1.1, 1.2, 1.3, 1.4]
  );

  const fifthItemDivOpacity = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 0.9, 0.6, 0.4, 0]
  );

  // Card animations - zoom out from fifth item to full screen
  const cardOpacity = useTransform(
    scrollYProgress,
    [transition.mid1, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [0, 0, 0.2, 0.8, 1] // No fade out at transition.end
  );

  const cardScale = useTransform(
    scrollYProgress,
    [
      transition.mid1,
      transition.mid1,
      transition.mid2,
      // transition.mid2,
      transition.mid3,
      // transition.mid3,
      transition.end,
      // transition.end,
    ],
    [
      0.1, 0.2, 0.3,
      //  0.4,
      0.5,
      //  0.7,
      // 0.8,
      1,
    ] // Maintain full scale
  );

  // Position transform - animate from center of fifth grid item to top
  const cardTranslateY = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    ['-20%', '-10%', '0%', '0%', '0%'] // No movement at the end
  );

  // Position transform - animate from center of fifth grid item to top
  const cardTranslateX = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    ['-20%', '-10%', '0%', '0%', '0%'] // No movement at the end
  );
  // Track if we've passed the transition point
  const hasCompletedTransition = useTransform(
    scrollYProgress,
    [transition.end, transition.end + 0.01],
    [0, 1],
    { clamp: false }
  );

  // For mobile view (unchanged)
  const mobileCardScaleX = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [0.1, 0.4, 0.7, 0.9, 1]
  );
  const mobileCardScaleY = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [0.1, 0.4, 0.7, 0.9, 1]
  );

  // Card position state
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const cardRef = useRef(null);

  // Update card position when grid is loaded
  useEffect(() => {
    const updatePosition = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    // Initial position
    updatePosition();

    // Update on resize
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Mobile version animations
  const y1Mobile = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2Mobile = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity1Mobile = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [1, 1, 1, 0.5, 0]);
  const opacity2Mobile = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [0, 0, 1, 1, 0]);
  const opacity3Mobile = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 1]);
  const scale1Mobile = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const scale2Mobile = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);

  // Adjust card section opacity based on fifth image progress
  const cardOpacityMobile = useTransform(scrollYProgress, [0, 0.65, 0.8], [0, 0, 1]);
  const cardScaleMobile = useTransform(scrollYProgress, [0, 0.6, 0.8], [0, 1, 1]);

  const headingWords = projectShowcase?.Heading?.split(' ') || [];
  const cardClipPath = useTransform(
    scrollYProgress,
    [transition.mid1, transition.end],
    ['inset(40% 40% 40% 40%)', 'inset(0% 0% 0% 0%)']
  );

  if (isDesktop) {
    return (
      <Box ref={containerRef} sx={{ position: 'relative', height: '500vh' }}>
        {/* First Section - Intro */}
        <Box
          sx={{
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            backgroundColor: 'white',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 28, md: 42 },
                fontWeight: 500,
                fontFamily: `Satoshi Variable`,
                color: '#18191B',
                display: 'inline-block',
                '& > span': {
                  display: 'inline-block',
                  whiteSpace: 'pre-wrap',
                },
              }}
              gutterBottom
            >
              {headingWords.map((word, i) => (
                <AnimatedWord key={i} word={word} index={i} totalWords={headingWords.length} />
              ))}
            </Typography>
          </Box>

          <Typography
            sx={{ fontSize: { xs: 14, md: 20 }, fontWeight: 500, pt: 1 }}
            maxWidth={{ xs: '90%', md: '914px' }}
            fontFamily="Satoshi Variable"
            color="#5C6170 !important"
          >
            {projectShowcase?.SubHeading}
          </Typography>
        </Box>
        {/* Sticky Grid Container */}
        <Box
          sx={{
            position: 'sticky',
            top: '-30vh',
            height: '100vh',
            zIndex: 0,
          }}
        >
          <m.div style={{ opacity: gridOpacity, scale: gridScale }}>
            <AmaranthineGrid
              fifthItemScale={fifthItemScale}
              fifthItemOpacity={fifthItemOpacity}
              data={projectShowcase}
            />
            {/* <FirstGridLine data={projectShowcase} /> */}
          </m.div>
        </Box>
        {/* <Box
          sx={{
            position: 'sticky',
            top: '25vh',
            height: '50vh',
            zIndex: 0,
          }}
        >
          <m.div style={{ opacity: gridOpacity, scale: gridScale }}>
            <SecondGridLine fifthItemScale={fifthItemScale} data={projectShowcase} />
          </m.div>
        </Box> */}
        {/* Spacer to ensure scroll */}
        <Box sx={{ height: '200vh' }} />
        {/* Parallax Card Section */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 15,
            marginTop: '-100vh',
            overflow: 'hidden',
          }}
        >
          {/* Wrapper that initially clips to the fifth grid area */}
          <m.div
            style={{
              opacity: cardOpacity,
              scale: cardScale,
              clipPath: cardClipPath,
              transformOrigin: 'center center',
              position: 'absolute',
              width: '100%',
              height: '100vh',
              willChange: 'transform, opacity, clip-path',
            }}
          >
            <div ref={cardRef} style={{ width: '100%', height: '100%' }}>
              <AmaranthineCard scrollYProgress={scrollYProgress} data={projectShowcase} />
            </div>
          </m.div>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        height: '400vh',
        width: '100%',
        overflow: 'clip', // Use clip instead of hidden to preserve animations
        margin: 0,
        padding: 0,
      }}
    >
      {/* First Section - Intro */}
      <m.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          y: y1Mobile,
          opacity: opacity1Mobile,
          scale: scale1Mobile,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FDF8F3',
          padding: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 28, md: 42 },
            fontWeight: 500,
            fontFamily: `Satoshi Variable`,
            lineHeight: '2.5rem',
            color: '#18191B',
          }}
          gutterBottom
        >
          {projectShowcase?.Heading}
        </Typography>

        <Typography
          sx={{ fontSize: 14, fontWeight: 500, pt: 1 }}
          maxWidth="90%"
          lineHeight="1.4"
          fontFamily="Satoshi Variable"
          color="#5C6170"
        >
          {projectShowcase?.SubHeading}
        </Typography>
      </m.div>

      {/* Second Section - Grid */}
      <m.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          y: y2Mobile,
          opacity: opacity2Mobile,
          scale: scale2Mobile,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <AmaranthineGrid onFifthImageProgress={setFifthImageProgress} data={projectShowcase} />
      </m.div>

      {/* Third Section - Cards */}
      <m.div
        style={{
          position: 'relative',
          height: '200vh',
        }}
      >
        <m.div
          style={{
            position: 'sticky',
            top: 0,
            opacity: cardOpacityMobile,
            scale: mobileCardScaleX, // Using mobileCardScaleX for both X and Y scaling
            transformOrigin: 'center 45%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AmaranthineCard scrollYProgress={scrollYProgress} data={projectShowcase} />
        </m.div>
      </m.div>
    </Box>
  );
}

SectionAmaranthine.propTypes = {
  projectShowcase: PropTypes.object,
};
