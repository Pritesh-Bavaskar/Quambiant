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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const headingWords = projectShowcase?.Heading?.split(' ') || [];

  const [sharedScrollY, setSharedScrollY] = useState(null);

  if (isDesktop) {
    return (
      <>
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
        {/* <Box
          ref={containerRef}
          sx={{
            position: 'relative',
            height: '300vh',
            width: '100%',
            overflow: 'clip', // Use clip instead of hidden to preserve animations
            margin: 0,
            padding: 0,
          }}
        >
          <Box
            sx={{
              position: 'sticky',
              height: '100vh',
              // top: 0,
              zIndex: 0,
            }}
          >
            <AmaranthineGrid data={projectShowcase} setSharedScroll={setSharedScrollY} /> */}
            {/* <AmaranthineCard data={projectShowcase} scrollYProgress={sharedScrollY} /> */}
          {/* </Box> */}
        {/* // </Box> */}
      </>
    );
  }

  // return (
  //   <Box
  //     ref={containerRef}
  //     sx={{
  //       position: 'relative',
  //       height: '400vh',
  //       width: '100%',
  //       overflow: 'clip', // Use clip instead of hidden to preserve animations
  //       margin: 0,
  //       padding: 0,
  //     }}
  //   >
  //     {/* First Section - Intro */}
  //     <m.div
  //       style={{
  //         position: 'sticky',
  //         top: 0,
  //         height: '100vh',
  //         y: y1Mobile,
  //         opacity: opacity1Mobile,
  //         scale: scale1Mobile,
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: '#FDF8F3',
  //         padding: 2,
  //         textAlign: 'center',
  //       }}
  //     >
  //       <Typography
  //         sx={{
  //           fontSize: { xs: 28, md: 42 },
  //           fontWeight: 500,
  //           fontFamily: `Satoshi Variable`,
  //           lineHeight: '2.5rem',
  //           color: '#18191B',
  //         }}
  //         gutterBottom
  //       >
  //         {projectShowcase?.Heading}
  //       </Typography>

  //       <Typography
  //         sx={{ fontSize: 14, fontWeight: 500, pt: 1 }}
  //         maxWidth="90%"
  //         lineHeight="1.4"
  //         fontFamily="Satoshi Variable"
  //         color="#5C6170"
  //       >
  //         {projectShowcase?.SubHeading}
  //       </Typography>
  //     </m.div>

  //     {/* Second Section - Grid */}
  //     <m.div
  //       style={{
  //         position: 'sticky',
  //         top: 0,
  //         height: '100vh',
  //         y: y2Mobile,
  //         opacity: opacity2Mobile,
  //         scale: scale2Mobile,
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         backgroundColor: 'white',
  //       }}
  //     >
  //       <AmaranthineGrid onFifthImageProgress={setFifthImageProgress} data={projectShowcase} />
  //     </m.div>

  //     {/* Third Section - Cards */}
  //     <m.div
  //       style={{
  //         position: 'relative',
  //         height: '200vh',
  //       }}
  //     >
  //       <m.div
  //         style={{
  //           position: 'sticky',
  //           top: 0,
  //           opacity: cardOpacityMobile,
  //           scale: mobileCardScaleX, // Using mobileCardScaleX for both X and Y scaling
  //           transformOrigin: 'center 45%',
  //           height: '100vh',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         <AmaranthineCard scrollYProgress={scrollYProgress} data={projectShowcase} />
  //       </m.div>
  //     </m.div>
  //   </Box>
  // );
}

SectionAmaranthine.propTypes = {
  projectShowcase: PropTypes.object,
};
