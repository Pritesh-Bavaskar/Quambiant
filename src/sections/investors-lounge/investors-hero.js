import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import newsBck from 'src/assets/media/investor-lounge/hero-bck.png';
import { LandingCard } from 'src/components/landing-card/LandingCard';

// ----------------------------------------------------------------------

export default function InvestorsHero() {
   return (
     <Box
       sx={{
         position: 'relative',
         width: '100%',
         height: 0,
         paddingTop: { xs: '152.67%', md: '34.72%' }, // 600/393 = 1.5267 or 152.67% for mobile, 500/1440 = 34.72% for desktop
         overflow: 'hidden',
       }}
     >
       <Box
         sx={{
           position: 'absolute',
           top: 0,
           left: 0,
           width: '100%',
           height: '100%',
           objectFit: 'contain',
           backgroundImage: `url(${newsBck.src || newsBck})`,
           backgroundSize: 'cover',
           backgroundPosition: {
             xs: 'right 30% bottom 20%',
             md: 'center top',
           },
           backgroundRepeat: 'no-repeat',
           '&::before': {
             content: '""',
             position: 'absolute',
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             backgroundColor: 'rgba(0, 0, 0, 0.5)',
           },
         }}
       >
         <Box
           sx={{
             position: 'relative', // changed from absolute to relative
             zIndex: 2,
             display: 'flex',
             justifyContent: { xs: 'center', md: 'flex-start' },
             alignItems: { xs: 'flex-end', md: 'flex-end' },
             height: '100%',
             px: { xs: 2, md: 8 },
             pb: { xs: 4, md: 8 },
           }}
         >
           <LandingCard
             title="Investor Lounge"
             subtitle="Discover investment opportunities and be a part of Quambiant’s visionary journey"
             // buttonText="Explore Articles"
             // buttonClick={() => {}}
             delayNo={0.3}
             sx={{
               maxWidth: { xs: '100%', md: '600px' },
             }}
             location=""
             completionDate=""
           />
         </Box>
       </Box>
     </Box>
   );
}

InvestorsHero.propTypes = {
  // Add any props here if needed
};
