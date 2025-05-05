import { useState } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

// components
import { Box, Grid } from '@mui/material';
import OurProjectCard from './our-project-card';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'ongoing', label: 'Ongoing' },
  { value: 'completed', label: 'Completed' },
];

const _projectsList = [
  {
    id: 1,
    status: 'upcoming',
    location: 'Downtown Central',
    title: 'Horizon Heights',
    description:
      'A premium residential tower featuring luxury apartments with panoramic city views, smart home technology, and exceptional amenities designed for modern urban living.',
    launchInfo: 'Launching Soon',
    startDate: 'Q3 2024',
    tags: ['Residential', 'Luxury', 'Pre-Launch'],
    keyFeatures: [
      'Smart home integration',
      'Private fitness center',
      'EV charging stations',
      'Infinity pool',
      '24/7 concierge service',
      'Rooftop garden',
    ],
    buttons: {
      registerInterest: 'Register Interest',
      downloadBrochure: 'Download Brochure',
    },
    imageUrl: 'https://example.com/horizon-heights.jpg',
  },
  {
    id: 4,
    status: 'upcoming',
    location: 'Downtown Central',
    title: 'Horizon Heights',
    description:
      'A premium residential tower featuring luxury apartments with panoramic city views, smart home technology, and exceptional amenities designed for modern urban living.',
    launchInfo: 'Launching Soon',
    startDate: 'Q3 2024',
    tags: ['Residential', 'Luxury', 'Pre-Launch'],
    keyFeatures: [
      'Smart home integration',
      'Private fitness center',
      'EV charging stations',
      'Infinity pool',
      '24/7 concierge service',
      'Rooftop garden',
    ],
    buttons: {
      registerInterest: 'Register Interest',
      downloadBrochure: 'Download Brochure',
    },
    imageUrl: 'https://example.com/horizon-heights.jpg',
  },
  {
    id: 2,
    status: 'ongoing',
    location: 'Uptown East',
    title: 'Skyline Residences',
    description:
      'An exclusive collection of residences offering world-class amenities, modern design, and panoramic city skyline views.',
    launchInfo: 'Construction in Progress',
    startDate: 'Q2 2023',
    tags: ['Residential', 'Luxury', 'Under Construction'],
    keyFeatures: [
      'Infinity pool',
      'Wellness spa',
      'Sky lounge',
      'Private theater',
      'Fitness center',
    ],
    buttons: {
      registerInterest: 'Register Interest',
      downloadBrochure: 'Download Brochure',
    },
    imageUrl: 'https://example.com/skyline-residences.jpg',
    timeline: [
      {
        title: 'Foundation Completed',
        subtitle: 'Structural base and foundation work finished',
        progress: '100%',
      },
      {
        title: 'Framing in Progress',
        subtitle: 'Structural framing of towers underway',
        progress: '65%',
      },
      {
        title: 'Amenities Construction',
        subtitle: 'Pool, gym and lounge under development',
        progress: '30%',
      },
    ],
  },
  {
    id: 3,
    status: 'completed',
    location: 'West Bay Area',
    title: 'Oceanview Towers',
    description:
      'Luxury coastal apartments with breathtaking ocean views, complete with private beach access and world-class facilities.',
    launchInfo: 'Ready for Move-In',
    startDate: 'Completed in Q4 2022',
    tags: ['Residential', 'Luxury', 'Completed'],
    keyFeatures: [
      'Private beach access',
      'Smart home technology',
      'Infinity edge pool',
      'Seaside promenade',
      '24/7 security',
    ],
    buttons: {
      registerInterest: 'Schedule a Visit',
      downloadBrochure: 'Download Brochure',
    },
    imageUrl: 'https://example.com/oceanview-towers.jpg',
  },
];

// ----------------------------------------------------------------------

export default function OurProjectTabs() {
  const [currentTab, setCurrentTab] = useState('upcoming');

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const filteredProjects = _projectsList.filter((project) => project.status === currentTab);

  // Replace this with your real projects data and status
  const projectCounts = {
    upcoming: _projectsList.filter((p) => p.status === 'upcoming').length,
    ongoing: _projectsList.filter((p) => p.status === 'ongoing').length,
    completed: _projectsList.filter((p) => p.status === 'completed').length,
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          px: { xs: 0, md: 8 },
          py: 4,
          backgroundColor: '#FDF8F3',
        }}
      >
        {STATUS_OPTIONS.map((tab) => {
          const selected = currentTab === tab.value;
          return (
            <Tab
              key={tab.value}
              value={tab.value}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {tab.label}
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      bgcolor: selected ? 'common.black' : 'grey.300',
                      color: selected ? 'common.white' : 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}
                  >
                    {projectCounts[tab.value]}
                  </Box>
                </Box>
              }
              sx={{
                minHeight: 48,
                px: 2,
                textTransform: 'capitalize',
                color: 'text.primary',
              }}
            />
          );
        })}
      </Tabs>
      <Box
        sx={{
          px: { xs: 2, md: 0 },
          py: { xs: 4, md: 0 },
          pb: { md: 2 },
          backgroundColor: '#FDF8F3',
        }}
      >
        <Grid container gap={{ xs: 2, md: 0 }}>
          {filteredProjects.map((project) => (
            <Grid key={project.id} item xs={12} md={6}>
              <OurProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
