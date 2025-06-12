import { Box, Container, Typography } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import CSRHero from '../csr-hero';
import CsrEvents from '../csr-events';
import CSRInitiatives from '../csr-initiatives';
import CSRResources from '../csr-resources';
import CSRJoining from '../csr-joining';
import CSRPhilosophy from '../csr-philosophy';
// ----------------------------------------------------------------------

export default function CSRView() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <CSRHero />
      <CSRPhilosophy />
      <CsrEvents />
      <CSRInitiatives />
      <CSRResources />
      <CSRJoining />
    </>
  );
}
