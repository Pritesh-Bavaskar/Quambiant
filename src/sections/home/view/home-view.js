import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeStories from 'src/components/home-stories/HomeStories';
import SpotlightCarousel from 'src/sections/home/SpotlightCarousel';
import BuildGreenSection from 'src/sections/home/BuildGreenSection';
import AwardsSection from 'src/components/award-section/AwardsSection';
import AmaranthineGrid from 'src/components/section-into/AmaranthineGrid';
import AmaranthineCard from 'src/components/section-into/AmaranthineCard';
import ConceptToConcreteSection from 'src/sections/home/ConceptToConcreteSection';
import ContactConsultationForm from 'src/components/contact-consultation-form/ContactConsultationForm';
import UpcomingLaunchesCarousel from 'src/components/upcoming-and-latest-launches/UpcomingLaunchesCarousel';
import IntroSection from 'src/sections/home/IntroSection';
import HomeHero from '../home-hero';
import CountUpSection from '../../../components/count-up/CountUp';
import { SectionIntro } from '../../../components/section-into/SectionIntro';
// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <IntroSection />
      <HomeHero />
      <CountUpSection />
      <SectionIntro />
      {/* <AmaranthineGrid /> */}
      {/* <AmaranthineCard /> */}
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
