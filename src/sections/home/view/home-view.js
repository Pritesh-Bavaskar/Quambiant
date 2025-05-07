import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeStories from 'src/components/home-stories/HomeStories';
import SpotlightCarousel from 'src/components/home-stories/SpotlightCarousel';
import BuildGreenSection from 'src/components/home-stories/BuildGreenSection';
import AwardsSection from 'src/components/home-stories/AwardsSection';
import ConceptToConcreteSection from 'src/components/home-stories/ConceptToConcreteSection';
import ContactConsultationForm from 'src/components/home-stories/ContactConsultationForm';
import UpcomingLaunchesCarousel from 'src/components/home-stories/upcomingAndLatestLaunches/UpcomingLaunchesCarousel';
import HomeHero from '../home-hero';
import CountUpSection from '../../../components/count-up/CountUp';
import { SectionIntro } from '../../../components/section-into/SectionIntro';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />
      <CountUpSection />
      <SectionIntro />
      <ConceptToConcreteSection />
      <HomeStories />
      <UpcomingLaunchesCarousel />
      <AwardsSection />
      <ContactConsultationForm />
      <BuildGreenSection />
      <SpotlightCarousel />
    </>
  );
}
