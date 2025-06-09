import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeStories from 'src/components/home-stories/HomeStories';
import AmaranthineGrid from 'src/components/section-amaranthine/AmaranthineGrid';
import SpotlightCarousel from 'src/sections/home/SpotlightCarousel';
import BuildGreenSection from 'src/sections/home/BuildGreenSection';
import AwardsSection from 'src/components/award-section/AwardsSection';
import ConceptToConcreteSection from 'src/sections/home/ConceptToConcreteSection';
import ContactConsultationForm from 'src/components/contact-consultation-form/ContactConsultationForm';
import UpcomingLaunchesCarousel from 'src/components/upcoming-and-latest-launches/UpcomingLaunchesCarousel';
import IntroSection from 'src/sections/home/IntroSection';

// api
import { useGetHomepageWithFilter } from 'src/api/home';
import Box from '@mui/material/Box';

import HomeHero from '../home-hero';
import CountUpSection from '../../../components/count-up/CountUp';
import { SectionAmaranthine } from '../../../components/section-amaranthine/SectionAmaranthine';
// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const { filteredHomepage } = useGetHomepageWithFilter(
    `populate[Hero][populate]=*&populate[StatsSection]=*&populate[TimelineSection][populate][Steps][populate]=*&populate[HomeStories][populate][HomeStoriesSlider][populate]=*&populate[ContactUs][populate]=*&populate[Spotlight][populate][Card][populate]=*&populate[GreenBuildingStats][populate]=*&populate[Awards][populate][AwardsSlider][populate]=*&populate[UpcomingLaunches][populate][Projects][populate]=*&populate[ProjectShowcase][populate][GallaryImage1]=true&populate[ProjectShowcase][populate][GallaryImage2]=true&populate[ProjectShowcase][populate][GallaryImage3]=true&populate[ProjectShowcase][populate][GallaryImage4]=true&populate[ProjectShowcase][populate][GallaryImage6]=true&populate[ProjectShowcase][populate][SpotlightImage]=true&populate[ProjectShowcase][populate][StoryCard][populate]=*`
  );

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <IntroSection intro={filteredHomepage?.data?.Hero} />

      <HomeHero hero={filteredHomepage?.data?.Hero} />

      <CountUpSection statsSection={filteredHomepage?.data?.StatsSection} />

      <SectionAmaranthine projectShowcase={filteredHomepage?.data?.ProjectShowcase} />
      <Box sx={{ mb: { xs: 8, sm: 55, md: 40 } }}>
        <AmaranthineGrid data={filteredHomepage?.data?.ProjectShowcase} />
      </Box>

      <ConceptToConcreteSection
        conceptToConcreteSection={filteredHomepage?.data?.TimelineSection}
      />

      <HomeStories homeStories={filteredHomepage?.data?.HomeStories} />

      <UpcomingLaunchesCarousel upcomingLaunches={filteredHomepage?.data?.UpcomingLaunches} />

      <AwardsSection awards={filteredHomepage?.data?.Awards} />

      <ContactConsultationForm contactUs={filteredHomepage?.data?.ContactUs} />

      <BuildGreenSection greenBuildingStats={filteredHomepage?.data?.GreenBuildingStats} />

      <SpotlightCarousel spotlight={filteredHomepage?.data?.Spotlight} />
    </>
  );
}
