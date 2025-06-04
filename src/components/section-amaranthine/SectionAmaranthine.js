import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useScroll, useTransform, m, useMotionValue } from 'framer-motion';
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
    end: 0.8,
  };

  // Fifth grid item animations
  const fifthItemScale = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 1.2, 1.4, 1.6, 1.8]
  );
  const fifthItemOpacity = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [1, 0.6, 0.4, 0.2, 0]
  );

  // Card animations - start appearing as fifth item fades
  const cardOpacity = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [0, 0.4, 0.6, 0.8, 1]
  );
  const cardScale = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [0.2, 0.4, 0.6, 0.8, 1]
  );
  // Separate scales for mobile view
  const cardScaleX = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [0.9, 0.9, 0.9, 0.9, 1]
  );
  const cardScaleY = useTransform(
    scrollYProgress,
    [transition.start, transition.mid1, transition.mid2, transition.mid3, transition.end],
    [0.1, 0.2, 0.3, 0.4, 1]
  );

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

  if (isDesktop) {
    return (
      <Box sx={{ position: 'relative' }}>
        {/* First Section - Intro - No Animation */}
        <Box
          sx={{
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#FDF8F3',
            padding: 2,
            textAlign: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 28, md: 42 },
                fontWeight: 500,
                fontFamily: `'Playfair Display', serif`,
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
            fontFamily="Satoshi Variable, sans-serif"
            color="#5C6170 !important"
          >
            {projectShowcase?.SubHeading}
          </Typography>
        </Box>

        {/* Grid and Card Transition Section */}
        <Box ref={containerRef} sx={{ position: 'relative', height: '320vh' }}>
          <m.div
            style={{
              position: 'sticky',
              top: 0,
              height: '120vh',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            {/* Grid Section */}
            <m.div
              style={{
                opacity: gridOpacity,
                scale: gridScale,
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
              }}
            >
              <AmaranthineGrid
                fifthItemScale={fifthItemScale}
                fifthItemOpacity={fifthItemOpacity}
                data={projectShowcase}
              />
            </m.div>

            {/* Card Section */}
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
                  opacity: cardOpacity,
                  scale: cardScale,
                  transformOrigin: 'center 80%',
                  width: '100%',
                  minHeight: '100vh',
                  height: 'auto',
                }}
              >
                <AmaranthineCard scrollYProgress={scrollYProgress} data={projectShowcase} />
              </m.div>
            </m.div>
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
            fontFamily: `'Playfair Display', serif`,
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
          fontFamily="Satoshi Variable, sans-serif"
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
            scaleX: cardScaleX,
            scaleY: cardScaleY,
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
