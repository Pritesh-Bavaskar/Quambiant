import { Helmet } from 'react-helmet-async';
import { OurProjectView } from 'src/sections/our-project/view';
// sections

// ----------------------------------------------------------------------

export default function OurPorjectPage() {
  return (
    <>
      <Helmet>
        <title> Quambiant: Our Project</title>
      </Helmet>

      <OurProjectView />
    </>
  );
}
