// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfigDesktop = [
  {
    title: 'About Us',
    // icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: "/",
  },
  {
    title: 'Our Projects',
    path: paths.ourProject,
    // icon: <Iconify // icon="solar:file-bold-duotone" />,
    children: [
      {
        items: [
          { title: 'Upcoming', path: paths.ourProjectUpcoming },
          { title: 'Ongoing', path: paths.ourProjectOngoing },
          { title: 'Completed', path: paths.ourProjectCompleted },
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
    path: "/",
  },
  {
    title: 'Our Projects',
    path: paths.ourProject,
    // icon: <Iconify // icon="solar:file-bold-duotone" />,
    children: [
      {
        items: [
          { title: 'Upcoming', path: paths.ourProjectUpcoming, image: '/assets/images/header/upcoming-projects.png' },
          { title: 'Ongoing', path: paths.ourProjectOngoing, image: '/assets/images/header/ongoing-projects.png' },
          { title: 'Completed', path: paths.ourProjectCompleted, image: '/assets/images/header/completed-projects.png' },
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
    path: paths.investorLounge,
  },
  {
    title: 'Newsroom',
    // icon: <Iconify // icon="solar:notebook-bold-duotone" />,
    path: paths.post,
  },
  {
    title: 'Careers',
    // icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.investorLounge,
  },
];
