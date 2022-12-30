import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, Grid, CardActions, Button } from '@mui/material';
import NoImage from './images/no_image_logo.png';

const TrainingLink = () => {
  const traningDateList: Array<string> = Object.keys(Training);
  const [rows, setRows] = useState<ReactNode>([]);
  useEffect(() => {
    let tmpRow: Array<ReactNode> = [];
    for (let i = 0; i < traningDateList.length; i++) {
      let date: string = traningDateList[traningDateList.length - i - 1];
      const training: any = Training;
      let imagePath = training[date].images.length > 0 ? training[date].images[0] : NoImage;
      tmpRow.push(
        <Grid item key={date} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 445 }}>
            <Link to={'/trainingMenu/' + date}>
              <CardMedia
                className="cardImage"
                component="img"
                height="140"
                src={imagePath}
                alt={date}
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {training[date].description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to={'/trainingMenu/' + date}
                data-testid={'open_training_menu' + i}
              >
                開く
              </Button>
            </CardActions>
          </Card>
        </Grid>,
      );
    }
    setRows(tmpRow);
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
      <Grid container spacing={4}>
        {rows}
      </Grid>
    </>
  );
};

export default TrainingLink;
