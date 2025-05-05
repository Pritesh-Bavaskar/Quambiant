import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
import ContactConsultationForm from 'src/components/home-stories/ContactConsultationForm';
import OurProjectHero from '../our-project-hero';
import OurProjectTabs from '../our-project-tabs';

// ----------------------------------------------------------------------

export default function OurProjectView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <OurProjectHero />

      <OurProjectTabs />

      <ContactConsultationForm />
    </>
  );
}
