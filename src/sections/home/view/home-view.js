import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeStories from 'src/components/home-stories/HomeStories';
import SpotlightCarousel from 'src/sections/home/SpotlightCarousel';
import BuildGreenSection from 'src/sections/home/BuildGreenSection';
import AwardsSection from 'src/components/award-section/AwardsSection';
import AmaranthineGrid from 'src/components/section-amaranthine/AmaranthineGrid';
import AmaranthineCard from 'src/components/section-amaranthine/AmaranthineCard';
import ConceptToConcreteSection from 'src/sections/home/ConceptToConcreteSection';
import ContactConsultationForm from 'src/components/contact-consultation-form/ContactConsultationForm';
import UpcomingLaunchesCarousel from 'src/components/upcoming-and-latest-launches/UpcomingLaunchesCarousel';
import EmiCalculator from 'src/components/emi-calculator/EmiCalculator';
import IntroSection from 'src/sections/home/IntroSection';
import HomeHero from '../home-hero';
import CountUpSection from '../../../components/count-up/CountUp';
import { SectionAmaranthine } from '../../../components/section-amaranthine/SectionAmaranthine';
// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <IntroSection />
      <HomeHero />
      <CountUpSection />
      <SectionAmaranthine />
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
