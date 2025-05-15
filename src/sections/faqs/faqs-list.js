import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// _mock
import { _faqs } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.common.white,
  '&.Mui-expanded': {
    margin: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '&:before': {
    display: 'none',
  },
  '& .MuiCollapse-root': {
    backgroundColor: 'transparent',
  },
  '& .MuiPaper-root': {
    boxShadow: 'none',
  },
  borderBottom: '1px solid #5C6170',
  borderRadius: '0 !important',
  boxShadow: 'none !important',
  transition: 'none',
  elevation: 0,
  '&:last-of-type': {
    borderRadius: '0 !important',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: '12px 0',
  minHeight: 'auto',
  '&.Mui-expanded': {
    minHeight: 'auto',
  },
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
    '&.Mui-expanded': {
      margin: '12px 0',
    },
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const ExpandIcon = styled('div')(({ theme, expanded }) => ({
  width: 32,
  height: 32,
  backgroundColor: '#FFFFFF',
  color: '#141B34',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: 0,
}));

const PlusIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.5V19.5" stroke="#141B34" strokeWidth="3" strokeLinecap="round" />
    <path d="M4.5 12H19.5" stroke="#141B34" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 12H19.5" stroke="#141B34" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: '0 0 16px 0',
  backgroundColor: 'transparent',
}));

export default function FaqsList({ onAccordionChange }) {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
    if (onAccordionChange) {
      onAccordionChange(isExpanded);
    }
  };

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 600, 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }}>
      {_faqs.map((accordion) => {
        const isExpanded = expandedPanel === accordion.value;

        return (
          <StyledAccordion
            key={accordion.id}
            expanded={isExpanded}
            onChange={handleChange(accordion.value)}
          >
            <StyledAccordionSummary
              expandIcon={<ExpandIcon>{isExpanded ? <MinusIcon /> : <PlusIcon />}</ExpandIcon>}
            >
              <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 400 }}>
                {accordion.heading}
              </Typography>
            </StyledAccordionSummary>

            <StyledAccordionDetails>
              <Typography sx={{ color: 'white', opacity: 0.8 }}>{accordion.detail}</Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        );
      })}
    </Box>
  );
}

FaqsList.propTypes = {
  onAccordionChange: PropTypes.func,
};

FaqsList.defaultProps = {
  onAccordionChange: null,
};
