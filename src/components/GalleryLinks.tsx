import Training from './data/training.json';
import React, { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActionArea,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoImage from './images/no_image_logo.png';
import { ColorModeContext, ColorModeContextType } from '../App';
import { PAGE_MAIN_TITLE } from './parts/constants';

const GalleryLinks = () => {
  const traningDateList: Array<string> = Object.keys(Training);
  const [rows, setRows] = useState<ReactNode>([]);
  const colorMode: ColorModeContextType = React.useContext(ColorModeContext);

  const accordionSummaryStyle = {
    backgroundColor: colorMode.mode === 'dark' ? 'rgba(255, 255, 255, .08)' : 'rgba(0, 0, 0, .08)',
  };

  useEffect(() => {
    let tmpRow: Array<ReactNode> = [];
    let tmpGrid: Array<ReactNode> = [];
    const keyLength = traningDateList.length;

    let defaultOpenYear = traningDateList[keyLength - 1].substring(0, 4);
    for (let i = 0; i < keyLength; i++) {
      let date: string = traningDateList[keyLength - i - 1];
      let year: string = date.substring(0, 4);
      let nextYear: string =
        keyLength !== i + 1 ? traningDateList[keyLength - i - 2].substring(0, 4) : year;
      const training: any = Training;
      let imagePath = training[date].images.length > 0 ? training[date].images[0] : NoImage;

      tmpRow.push(
        <Grid key={date} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea
              component={Link}
              to={'/trainingMenu/' + date}
              data-testid={'open_training_menu' + i}
            >
              <CardMedia
                className="cardImage"
                component="img"
                height="140"
                src={imagePath}
                alt={date}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {training[date].description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>,
      );

      if (nextYear !== year || traningDateList.length === i + 1) {
        tmpGrid.push(
          <Accordion key={year} defaultExpanded={year === defaultOpenYear}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              style={accordionSummaryStyle}
            >
              <h2>{year}年</h2>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={4}>
                {tmpRow}
              </Grid>
            </AccordionDetails>
          </Accordion>,
        );

        tmpRow = [];
      }
    }
    setRows(tmpGrid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null, colorMode]);

  return (
    <>
      <title>練習メニュー・風景 | {PAGE_MAIN_TITLE}</title>
      <h1 data-testid="practice_title">練習メニュー・風景</h1>

      {rows}
      <Typography component="p">
        24年以降は
        <a href="https://omu-karate-org.github.io/blog/list/1">こちら</a>
      </Typography>
    </>
  );
};

export default GalleryLinks;
