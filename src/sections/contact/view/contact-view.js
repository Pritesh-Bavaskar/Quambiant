// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// _mock
import { _mapContact } from 'src/_mock';
//
import ContactMap from '../contact-map';
import ContactHero from '../contact-hero';
import ContactForm from '../contact-form';
import ContactStrip from '../contact-strip';

// ----------------------------------------------------------------------

export default function ContactView() {
  return (
    <>
      <ContactHero />

      <Container maxWidth={false} disableGutters sx={{ width: '100%', m: 0 }}>
        <Box display="grid" gap={4} gridTemplateColumns="repeat(12, 1fr)">
          <Box
            sx={{
              gridColumn: {
                xs: 'span 12', // Full width on mobile
                md: 'span 4', // 4/12 on desktop
              },
            }}
          >
            <ContactMap contacts={_mapContact} />
          </Box>
          <Box
            sx={{
              gridColumn: {
                xs: 'span 12', // Full width on mobile
                md: 'span 8', // 8/12 on desktop
              },
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Container>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <ContactStrip />
      </Box>
    </>
  );
}
