import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeStories from 'src/components/home-stories/HomeStories';
import SpotlightCarousel from 'src/components/home-stories/SpotlightCarousel';
import BuildGreenSection from 'src/components/home-stories/BuildGreenSection';
import AwardsSection from 'src/components/home-stories/AwardsSection';
import ContactConsultationForm from 'src/components/home-stories/ContactConsultationForm';
import HomeHero from '../home-hero';
import CountUpSection from '../../../components/count-up/CountUp';
import { SectionIntro } from '../../../components/section-into/SectionIntro';
// ----------------------------------------------------------------------

const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />
      <CountUpSection />
      <SectionIntro />
      <HomeStories />
      <AwardsSection />
      <ContactConsultationForm />
      <BuildGreenSection />
      <SpotlightCarousel />
    </>
  );
}
