import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Container,
  Paper,
  Grid,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiTabs-flexContainer': {
    justifyContent: 'space-evenly',
    maxWidth: 'none',
    margin: '0 auto',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontFamily: 'Satoshi Variable',
  sx: {
    fontSize: { xs: '12px', md: '14px' },
  },
  flex: 1,
  maxWidth: 'none',
//   padding: theme.spacing(1, 2),
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function TabPanel(props) {
  const theme = useTheme();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`investor-tabpanel-${index}`}
      aria-labelledby={`investor-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            [theme.breakpoints.up('md')]: {
              //   maxWidth: '914px',
              margin: '0 auto',
              height: 0,
              paddingTop: '56.24%', // 514/914 = 0.5624 (56.24%)
              position: 'relative',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              [theme.breakpoints.up('md')]: {
                position: 'absolute',
                paddingTop: 4,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              },
            }}
          >
            {children}
          </Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `investor-tab-${index}`,
    'aria-controls': `investor-tabpanel-${index}`,
  };
}

// ----------------------------------------------------------------------

const tabData = [
  {
    id: 0,
    label: 'CEO Message',
    title: 'From the desk of',
    name: 'Arjun Mansa, CEO',
    avatar: '/assets/images/avatars/arjun-mansa.jpg',
    date: 'April 7, 2023',
    content: [
      'At Quambiant, our commitment remains steadfast in creating exceptional real estate developments that deliver both superior returns and positive community impact. Our approach combines design innovation, sustainability, and market intelligence to develop properties built for the future.',
      'Our fourth-quarter results are positive, and our team is strategically positioned to capitalize on emerging opportunities while maintaining our core principles of integrity and excellence. Our global portfolio spans residential, commercial, and mixed-use developments in key growth markets.',
    ],
    signature: 'Arjun Mansa',
  },
  {
    id: 1,
    label: 'Market Updates',
    title: 'Q2 2023 Market Insights',
    name: 'Arjun Mansa, CEO',
    avatar: '/assets/images/avatars/arjun-mansa.jpg',
    date: 'April 7, 2023',
    content: [
      'Our latest market analysis shows promising trends in the commercial real estate sector, with particular strength in mixed-use developments and sustainable building projects.',
      'Key metropolitan areas continue to show resilience despite broader economic headwinds, with rental yields maintaining stability and occupancy rates exceeding industry averages.',
    ],
    signature: 'Arjun Mansa',
  },
  {
    id: 2,
    label: 'Strategy',
    title: 'Strategic Vision 2023-2025',
    name: 'Arjun Mansa, CEO',
    avatar: '/assets/images/avatars/arjun-mansa.jpg',
    date: 'April 7, 2023',
    content: [
      'Quambiant is focused on expanding our portfolio in emerging markets while maintaining our commitment to sustainable development and community integration.',
      'Our three-year roadmap includes targeted acquisitions in high-growth regions, implementation of advanced green building technologies, and enhanced investor relations initiatives.',
    ],
    signature: 'Arjun Mansa',
  },
];

export default function InvestorCommunication() {
  const [value, setValue] = useState(0);
  const currentTab = tabData[value];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 8, minHeight: '100vh', height: 'auto', display: 'flex', flexDirection: 'column' }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1" gutterBottom>
          Investor Communications
        </Typography>
        <Typography variant="body1" color="#5C6170">
          Updates and insights from our leadership team to help you stay informed about your
          investment.
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'background.paper',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="investor communication tabs"
          centered
        >
          {tabData.map((tab) => (
            <StyledTab key={tab.id} label={tab.label} {...a11yProps(tab.id)} />
          ))}
        </StyledTabs>

        {tabData.map((tab) => (
          <TabPanel
            key={tab.id}
            value={value}
            index={tab.id}
            sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                p: { xs: 3, md: 8 },
                backgroundColor: '#001016',
                color: '#fff',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                {tab.avatar && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Avatar src={tab.avatar} alt={tab.name} sx={{ width: 56, height: 56, mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {tab.title}
                      </Typography>
                      <Typography variant="h6">{tab.name}</Typography>
                    </Box>
                    {tab.date && (
                      <Box sx={{ ml: 'auto' }}>
                        <Typography variant="caption">{tab.date}</Typography>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>

              <Box
                sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <Box>
                  {tab.content.map((paragraph, index) => (
                    <Typography key={index} paragraph sx={{ mb: 3 }}>
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 'auto', pt: 4 }}>
                {tab.signature && (
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ mb: 1 }}>Sincerely,</Typography>
                    <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                      {tab.signature}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </TabPanel>
        ))}
      </Paper>
    </Container>
  );
}
