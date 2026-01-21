import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import KaratedoAbout from './KaratedoAbout';
import KaratedoAnnualEvents from './KaratedoAnnualEvents';
import KaratedoFaq from './KaratedoFaq';

const Karatedo = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const initOpen: string = new URLSearchParams(useLocation().search).get('open') ?? '';

  // 初期表示
  useEffect(() => {
    setExpanded(initOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null, initOpen]);

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
  }));

  return (
    <>
      <title>空手道部紹介 | 大阪公立大学空手道部 応援ページ</title>
      <h2 data-testid="karatedo_title">空手道部紹介</h2>
      <Accordion expanded={expanded === 'about'} onChange={handleChange('about')}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <h3>空手道部について</h3>
        </AccordionSummary>
        <AccordionDetails data-testid="aboutDetails">
          <KaratedoAbout />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'annualEvents'} onChange={handleChange('annualEvents')}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <h3>年間行事</h3>
        </AccordionSummary>
        <AccordionDetails data-testid="annualEventsDetails">
          <KaratedoAnnualEvents />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'faq'} onChange={handleChange('faq')}>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <h3>FAQ</h3>
        </AccordionSummary>
        <AccordionDetails data-testid="faqDetails">
          <KaratedoFaq />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Karatedo;
