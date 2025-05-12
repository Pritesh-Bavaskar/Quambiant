import { Helmet } from 'react-helmet-async';
// sections
import { OurProjectDetailsView } from 'src/sections/our-project-details/view';

// ----------------------------------------------------------------------

export default function OurPorjectDetailsPage() {
  return (
    <>
      <Helmet>
        <title> Quambiant: Our Project</title>
      </Helmet>

      <OurProjectDetailsView />
    </>
  );
}
