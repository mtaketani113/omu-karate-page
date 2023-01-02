import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';

const Karatedo = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const initOpen: string = new URLSearchParams(useLocation().search).get('open') ?? '';

  const titleStyle = {
    backgroundColor: '#eeeeee',
    fontWeight: 'bold',
    width: 110,
    borderColor: 'black',
  };
  const bodyStyle = { maxWidth: 500, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' };
  // 初期表示、日付切り替え時に動作
  useEffect(() => {
    setExpanded(initOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null, initOpen]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>空手道部紹介 | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h2 data-testid="karatedo_title">空手道部紹介</h2>
      <Accordion expanded={expanded === 'about'} onChange={handleChange('about')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>空手道部について</h3>
        </AccordionSummary>
        <AccordionDetails data-testid="aboutDetails">
          <Typography>作成中</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'annualEvents'} onChange={handleChange('annualEvents')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>年間行事</h3>
        </AccordionSummary>
        <AccordionDetails data-testid="annualEventsDetails">
        <Table style={{ maxWidth: 500, borderWidth: 1, borderStyle: 'solid' }}>
        <TableBody>
          <TableRow>
            <TableCell style={titleStyle}>4月</TableCell>
            <TableCell style={bodyStyle}>
              全関西個人
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>5月</TableCell>
            <TableCell style={bodyStyle}>
              西日本団体戦
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>6月</TableCell>
            <TableCell style={bodyStyle}>
              
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>7月</TableCell>
            <TableCell style={bodyStyle}>
              都立戦
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>8月</TableCell>
            <TableCell style={bodyStyle}>
              
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>9月</TableCell>
            <TableCell style={bodyStyle}>
              関西学生オープン
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>10月</TableCell>
            <TableCell style={bodyStyle}>
              全関西団体
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>11月</TableCell>
            <TableCell style={bodyStyle}>
              六公立戦 <br/>
              三商戦
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>12月</TableCell>
            <TableCell style={bodyStyle}>
              全国公立 団体戦
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>1月</TableCell>
            <TableCell style={bodyStyle}>
              
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>2月</TableCell>
            <TableCell style={bodyStyle}>
              
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>3月</TableCell>
            <TableCell style={bodyStyle}>
              
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'faq'} onChange={handleChange('faq')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h3>FAQ</h3>
        </AccordionSummary>
        <AccordionDetails data-testid="faqDetails">
          <Typography>作成中</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Karatedo;
