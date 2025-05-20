import { Helmet } from 'react-helmet-async';
// sections
import { InvestorsLoungeView } from 'src/sections/investors-lounge/view';

// ----------------------------------------------------------------------

export default function InverstorLaunge() {
  return (
    <>
      <Helmet>
        <title>Investor Lounge | Quambiant</title>
      </Helmet>

      <InvestorsLoungeView />
    </>
  );
}
