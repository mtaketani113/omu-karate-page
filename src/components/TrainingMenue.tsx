import { useParams, Link } from 'react-router-dom';
import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const TrainingMenue = () => {
  const { date } = useParams<{ date: string }>();
  const [rows, setRows] = useState<ReactNode>([]);
  const [images, setImages] = useState<ReactNode>([]);
  const [videos, setVideos] = useState<ReactNode>([]);
  useEffect(() => {
    const training: any = Training;
    const menues: Array<any> = date != null ? training[date].practice : [];
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
    const images: Array<any> = date != null ? training[date].images : [];
    let tmpImages: Array<ReactNode> = [];
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      tmpImages.push(<img key={i} src={image} width="100%" alt="練習" />);
    }
    setImages(tmpImages);

    const videos: Array<any> = date != null ? training[date].videos : [];
    let tmpVideos: Array<ReactNode> = [];
    for (let i = 0; i < videos.length; i++) {
      let video = videos[i];
      tmpVideos.push(
      <div style={{width: '100%', aspectRatio: '16/9'}}>
      <iframe width="100%" height="100%"
        src={video} title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe></div>);
    }
    setVideos(tmpVideos);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>練習メニュー | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h3>
        <Link to="/galleryLinks">練習メニュー・風景</Link>&nbsp; &gt; &nbsp; {date}
      </h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
      {images}
      {videos}
    </>
  );
};

export default TrainingMenue;
