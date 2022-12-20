import { useParams, Link } from 'react-router-dom';
import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const TrainingMenue = () => {
  const { date } = useParams<{ date: string }>();
  const [rows, setRows] = useState<ReactNode>([]);
  const [videos, setVideos] = useState<ReactNode>([]);
  const [galleryImages, setGrallyImages] = useState<any>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prePage, setPrePage] = useState<string | null>(null);

  const style = {
    width: '100%',
    margin: '0 auto',
    marginTop: 10,
  };

  useEffect(() => {
    const trainings: any = Training;
    const training: any = date != null ? trainings[date] : {};
    const menues: Array<any> = training.practice;
    let tmpRow: Array<ReactNode> = [];
    for (let i = 0; i < menues.length; i++) {
      let menue = menues[i];
      tmpRow.push(
        <TableRow key={menue.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row" style={{ whiteSpace: 'nowrap' }}>
            {menue.title}
          </TableCell>
          <TableCell align="left">{menue.detail}</TableCell>
        </TableRow>,
      );
    }
    setRows(tmpRow);
    const images: Array<any> = training.images;
    let tmpGalleryImages: Array<any> = [];
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      tmpGalleryImages.push({
        original: image,
        thumbnail: image,
      });
    }
    setGrallyImages(tmpGalleryImages);

    const videos: Array<any> = training.videos;
    let tmpVideos: Array<ReactNode> = [];
    for (let i = 0; i < videos.length; i++) {
      let video = videos[i];
      tmpVideos.push(
        <div style={{ width: '100%', aspectRatio: '16/9' }} key={i}>
          <iframe
            width="100%"
            height="100%"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>,
      );
    }
    setVideos(tmpVideos);
    setNextPage(training.next);
    setPrePage(training.pre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null, date]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>練習メニュー | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h3 data-testid="breadcrumbs">
        <Link to="/galleryLinks">練習メニュー・風景</Link>&nbsp; &gt; &nbsp; {date}
      </h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
      {galleryImages.length > 0 && (
        <div style={style}>
          <ImageGallery
            items={galleryImages}
            showNav={true}
            autoPlay={true}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showPlayButton={true}
          />
        </div>
      )}
      {videos}
      <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center">
        {nextPage != null && (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={'/trainingMenue/' + nextPage}
            data-testid="next_button"
          >
            &lt; 次の練習
          </Button>
        )}

        {prePage != null && (
          <Button
            variant="contained"
            color="success"
            component={Link}
            to={'/trainingMenue/' + prePage}
            data-testid="pre_button"
          >
            前の練習 &gt;
          </Button>
        )}
      </Box>
    </>
  );
};

export default TrainingMenue;
