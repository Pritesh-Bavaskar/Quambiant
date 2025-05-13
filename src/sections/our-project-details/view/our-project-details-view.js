import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
import HomeStories from 'src/components/home-stories/HomeStories';
import AwardsSection from 'src/components/award-section/AwardsSection';
import ContactConsultationForm from 'src/components/contact-consultation-form/ContactConsultationForm';
import OurProjectDetailsOverviewStats from '../our-project-details-overview-stats';
import OurProjectDetailsHero from '../our-project-details-hero';

// ----------------------------------------------------------------------

export default function OurProjectDetailsView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <OurProjectDetailsHero />
      <OurProjectDetailsOverviewStats />
      <AwardsSection />
      <HomeStories />
      <ContactConsultationForm />
    </>
  );
}
