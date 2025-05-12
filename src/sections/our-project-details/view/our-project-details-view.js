import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
import OurProjectHero from '../our-project-details-hero';

// ----------------------------------------------------------------------

export default function OurProjectDetailsView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <OurProjectHero />

     
    </>
  );
}
