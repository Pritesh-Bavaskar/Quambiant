import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import FaqsPage from 'src/pages/faqs';
import ContactInvestmentForm from 'src/components/contact-investment-form/ContactInvestmentForm';
import InvestorsHero from '../investors-hero';
import InvestorCommunication from '../investor-communication';
import CompanyProfile from '../company-profile';

// ----------------------------------------------------------------------

export default function InvestorsLoungeView() {

  return (
    <Container disableGutters maxWidth={false}>
      <Helmet>
        <title>Investors Lounge | Quambiant</title>
      </Helmet>

      <InvestorsHero />
      <InvestorCommunication />
      <FaqsPage />
      <ContactInvestmentForm />
      <CompanyProfile />

      {/* Add more components here as needed */}
    </Container>
  );
}
