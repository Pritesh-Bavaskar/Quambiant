import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeStories from 'src/components/home-stories/HomeStories';
import SpotlightCarousel from 'src/sections/home/SpotlightCarousel';
import BuildGreenSection from 'src/sections/home/BuildGreenSection';
import AwardsSection from 'src/components/award-section/AwardsSection';
import ConceptToConcreteSection from 'src/sections/home/ConceptToConcreteSection';
import ContactConsultationForm from 'src/components/contact-consultation-form/ContactConsultationForm';
import UpcomingLaunchesCarousel from 'src/components/upcoming-and-latest-launches/UpcomingLaunchesCarousel';
import IntroSection from 'src/sections/home/IntroSection';
// api
import { useGetHomepageWithFilter } from 'src/api/home';
import HomeHero from '../home-hero';
import CountUpSection from '../../../components/count-up/CountUp';
import { SectionAmaranthine } from '../../../components/section-amaranthine/SectionAmaranthine';
// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const { filteredHomepage, filteredHomepageLoading, filteredHomepageError } =
    useGetHomepageWithFilter(
      `populate[hero][populate]=heroImage&populate[StatsSection]=*&populate[TimelineSection][populate][Steps][populate]=*&populate[HomeStoriesSlider][populate]=*&populate[ContactUs][populate]=*&populate[Spotlight][populate]=*`
    );

  console.log(filteredHomepage);

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <IntroSection />
      <HomeHero hero={filteredHomepage?.data?.hero} />
      <CountUpSection statsSection={filteredHomepage?.data?.StatsSection} />
      <SectionAmaranthine />
      <ConceptToConcreteSection conceptToConcreteSection={filteredHomepage?.data?.TimelineSection} />
      <HomeStories homeStories={filteredHomepage?.data?.HomeStoriesSlider} />
      <UpcomingLaunchesCarousel />
      <AwardsSection />
      <ContactConsultationForm />
      <BuildGreenSection />
      <SpotlightCarousel />
    </>
  );
}
