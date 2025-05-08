// SectionIntro.js
import { Box, Typography } from '@mui/material';
import { useScroll, useTransform, m } from 'framer-motion';
import { useRef } from 'react';
import AmaranthineGrid from './AmaranthineGrid';
import AmaranthineCard from './AmaranthineCard';

export function SectionIntro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Animation values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.8], [0.9, 1]);

  return (
    <Box ref={containerRef} sx={{ position: 'relative', height: '300vh' }}>
      {/* First Section - Intro */}
      <m.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          y: y1,
          opacity: opacity1,
          scale: scale1,
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
          sx={{ typography: { xs: 'h4', md: 'h1' } }}
          fontWeight="bold"
          fontFamily={`'Playfair Display', serif`}
          gutterBottom
        >
          Landmarks of Excellence in Residential Living
        </Typography>

        <Typography
          sx={{ typography: { xs: 'body3', md: 'body1' } }}
          maxWidth="700px"
          color="text.secondary"
        >
          Explore our finest residential projects that redefine luxury, innovation, and
          craftsmanship— each home built to perfection, each space designed for life.
        </Typography>
      </m.div>

      {/* Second Section - Grid */}
      <m.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          y: y2,
          opacity: opacity2,
          scale: scale2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <AmaranthineGrid />
      </m.div>

      {/* Third Section - Cards */}
      <m.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          y: y2,
          opacity: opacity3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AmaranthineCard />
      </m.div>
    </Box>
  );
}
