import PropTypes from 'prop-types';
import { Box, Typography, Button, Container, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify';
import awardImg from 'src/assets/media/investor-lounge/award.svg';

// Custom CheckMark SVG component
const CheckMark = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6615 5L7.49479 14.1667L3.32812 10" stroke="#009EE0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ----------------------------------------------------------------------

const StyledListItem = styled(ListItem)(() => ({
  padding: '4px 0',
  display: 'flex',
  alignItems: 'center',
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontFamily: 'Satoshi Variable',
    color: '#FFFFFFCC',
    fontSize: '16px',
    fontWeight: 500,
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FCF7F1',
  color: '#001016',
  padding: '7px 24px',
  borderRadius: '0px',
  textTransform: 'none',
  fontSize: '18px',
  fontWeight: 500,
  fontFamily: 'Satoshi Variable',
  '&:hover': {
    backgroundColor: '#f5ede0',
  },
}));

// ----------------------------------------------------------------------

export default function CompanyProfile() {
  return (
    <Box sx={{ backgroundColor: '#001016', py: 8, color: 'white' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          {/* Left Content */}
          <Box sx={{ 
            flex: 1, 
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: { xs: '100%', md: 'none' }
          }}>
            <Typography variant="h1" gutterBottom>
              Company Profile
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#C7C9D1' }}>
              Access a comprehensive company profile for detailed insights into our investment
              approach, track records, and current opportunities.
            </Typography>

            <List sx={{ 
              mb: 4,
              display: 'inline-block',
              textAlign: 'left',
            }}>
              <StyledListItem>
                <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                  <CheckMark />
                </Box>
                <StyledListItemText primary="Company overview and market positioning" />
              </StyledListItem>

              <StyledListItem>
                <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                  <CheckMark />
                </Box>
                <StyledListItemText primary="Portfolio of past and current projects" />
              </StyledListItem>

              <StyledListItem>
                <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                  <CheckMark />
                </Box>
                <StyledListItemText primary="Investment strategy and financial performance" />
              </StyledListItem>

              <StyledListItem>
                <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                  <CheckMark />
                </Box>
                <StyledListItemText primary="Leadership team and governance structure" />
              </StyledListItem>
            </List>

            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <DownloadButton endIcon={<Iconify icon="eva:arrow-downward-fill" />}>
                Download Profile
              </DownloadButton>
            </Box>
          </Box>

          {/* Right Content - Award Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={awardImg}
              alt="Award"
              sx={{
                width: { xs: '100%', md: '80%' },
                maxHeight: '400px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
