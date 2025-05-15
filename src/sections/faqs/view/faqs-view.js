import { useState } from 'react';
// @mui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//
import faqBck from 'src/assets/media/landing/faq-bck.jpg';

import FaqsList from '../faqs-list';

// ----------------------------------------------------------------------

export default function FaqsView() {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleAccordionChange = (expanded) => {
    setIsAccordionExpanded(expanded);
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          backgroundImage: `url(${faqBck})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{ position: 'relative', zIndex: 2, height: '100%', width: '100%', py: 12, px: 12 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-start' },
              justifyContent: 'space-between',
              gap: { xs: 4, md: 8 },
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(8px)',
              p: { xs: 4, md: 10 },
              borderRadius: 0,
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              boxSizing: 'border-box',
              mx: 0,
              maxWidth: 'none',
            }}
          >
            {/* Left side content */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'left',
                maxWidth: 700,
                alignSelf: 'stretch', // makes it stretch full height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // key for top-bottom spacing
              }}
            >
              {/* Large Background "FAQ" */}
              <Typography
                variant="h1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontSize: { xs: 100, md: 160 },
                  color: 'rgba(255,255,255,0.05)',
                  zIndex: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  fontWeight: 700,
                }}
              >
                FAQ
              </Typography>

              {/* Top Section */}
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    paddingTop: '8%',
                    color: 'common.white',
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  In case you’re wondering
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'common.white',
                    opacity: 0.8,
                    mb: 4,
                  }}
                >
                  Some of our most common things people ask us about our service
                </Typography>
              </Box>

              {/* Bottom Section */}
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'common.white',
                    mb: 1,
                  }}
                >
                  Have a specific question?
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: 138, md: 150 },
                    height: { xs: 48, md: 52 },
                    backgroundColor: '#FDF8F3',
                    color: '#001016',
                    fontFamily: 'Satoshi Variable',
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: 500,
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: '#FDF8F3',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Let Us Know
                </Button>
              </Box>
            </Box>

            {/* Right side FAQ list */}
            <Box
              sx={{
                flex: '1 1 auto',
                width: { xs: '100%', md: 'auto' },
                maxWidth: { xs: '100%', md: '700px' },
                height: '100%',
              }}
            >
              <FaqsList onAccordionChange={handleAccordionChange} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
