// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfigDesktop = [
  {
    title: 'About Us',
    // icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '#',
  },
  {
    title: 'Our Projects',
    path: paths.ourProject,
    // icon: <Iconify // icon="solar:file-bold-duotone" />,
    children: [
      {
        mainTitle: 'Our Projects',
        mainSubtitle: 'From vision to reality, we shape homes that inspire',
        items: [
          {
            title: 'Upcoming Projects',
            subtitle: 'Discover our upcoming developments and future plans',
            path: paths.ourProjectUpcoming,
            image: '/assets/images/header/desktop-upcoming-projects.png',
          },
          {
            title: 'Ongoing Projects',
            subtitle: 'Explore our current developments in progress',
            path: paths.ourProjectOngoing,
            image: '/assets/images/header/desktop-ongoing-projects.png',
          },
          {
            title: 'Completed Projects',
            subtitle: 'View our successfully delivered projects',
            path: paths.ourProjectCompleted,
            image: '/assets/images/header/desktop-completed-projects.png',
          },
        ],
      },
    ],
  },
  {
    title: 'Investors Lounge',
    // icon: <Iconify // icon="solar:notebook-bold-duotone" />,
    path: paths.investorLounge,
  },
];

export const navConfigMobile = [
  {
    title: 'About Us',
    // icon: <Iconify // icon="solar:home-2-bold-duotone" />,
    path: '#',
  },
  {
    title: 'Our Projects',
    path: paths.ourProject,
    // icon: <Iconify // icon="solar:file-bold-duotone" />,
    children: [
      {
        items: [
          {
            title: 'Upcoming',
            path: paths.ourProjectUpcoming,
            image: '/assets/images/header/upcoming-projects.png',
          },
          {
            title: 'Ongoing',
            path: paths.ourProjectOngoing,
            image: '/assets/images/header/ongoing-projects.png',
          },
          {
            title: 'Completed',
            path: paths.ourProjectCompleted,
            image: '/assets/images/header/completed-projects.png',
          },
        ],
      },
    ],
  },
  {
    title: 'Investors Lounge',
    // icon: <Iconify // icon="solar:notebook-bold-duotone" />,
    path: paths.investorLounge,
  },
  {
    title: 'CSR',
    // icon: <Iconify // icon="solar:notebook-bold-duotone" />,
    path: '#',
  },
  {
    title: 'Newsroom',
    // icon: <Iconify // icon="solar:notebook-bold-duotone" />,
    path: '/post',
  },
  {
    title: 'Careers',
    // icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: '#',
  },
];
