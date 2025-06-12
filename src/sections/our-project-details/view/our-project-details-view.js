import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
import HomeStories from 'src/components/home-stories/HomeStories';
import AwardsSection from 'src/components/award-section/AwardsSection';
import ContactConsultationForm from 'src/components/contact-consultation-form/ContactConsultationForm';
import FaqsPage from 'src/pages/faqs';
import EmiCalculatorSection from 'src/components/emi-calculator/EmiCalculator';
import { useGetHomepageWithFilter } from 'src/api/home';
import OurProjectDetailsCapturingEssence from '../our-project-details-capturing-essence';
import OurProjectDetailsOverviewStats from '../our-project-details-overview-stats';
import OurProjectDetailsHero from '../our-project-details-hero';
// ----------------------------------------------------------------------

export default function OurProjectDetailsView() {
  const { scrollYProgress } = useScroll();
  const { filteredHomepage } = useGetHomepageWithFilter(
    `populate[Hero][populate]=*&populate[StatsSection]=*&populate[TimelineSection][populate][Steps][populate]=*&populate[HomeStories][populate][HomeStoriesSlider][populate]=*&populate[ContactUs][populate]=*&populate[Spotlight][populate][Card][populate]=*&populate[GreenBuildingStats][populate]=*&populate[Awards][populate][AwardsSlider][populate]=*&populate[UpcomingLaunches][populate][Projects][populate]=*&populate[ProjectShowcase][populate][GallaryImage1]=true&populate[ProjectShowcase][populate][GallaryImage2]=true&populate[ProjectShowcase][populate][GallaryImage3]=true&populate[ProjectShowcase][populate][GallaryImage4]=true&populate[ProjectShowcase][populate][GallaryImage6]=true&populate[ProjectShowcase][populate][SpotlightImage]=true&populate[ProjectShowcase][populate][StoryCard][populate]=*`
  );
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <OurProjectDetailsHero />
      <OurProjectDetailsOverviewStats />
      <AwardsSection awards={filteredHomepage?.data?.Awards} />
      <OurProjectDetailsCapturingEssence images={filteredHomepage?.data?.CapturingEssence} />
      <HomeStories homeStories={filteredHomepage?.data?.HomeStories} />
      <EmiCalculatorSection />
      <FaqsPage />
      <ContactConsultationForm />
    </>
  );
}
