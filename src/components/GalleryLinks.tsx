import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
import React from 'react';

const GalleryLinks = () => {
  const traningDateList: Array<string> = Object.keys(Training);
  const [rows, setRows] = useState<ReactNode>([]);

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
        <Grid item key={date} xs={12} sm={6} md={4}>
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
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
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
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>練習メニュー・風景 | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h1 data-testid="practice_title">練習メニュー・風景</h1>

      {rows}
    </>
  );
};

export default GalleryLinks;
