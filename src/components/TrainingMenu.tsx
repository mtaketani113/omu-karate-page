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
import { useMedia } from 'react-use';
import 'react-image-gallery/styles/css/image-gallery.css';

/**
 * 練習メニュー・風景の画面
 *
 * @returns
 */
const TrainingMenu = () => {
  const { date } = useParams<{ date: string }>();
  const [rows, setRows] = useState<ReactNode>([]);
  const [videos, setVideos] = useState<ReactNode>([]);
  const [galleryImages, setGrallyImages] = useState<any>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prePage, setPrePage] = useState<string | null>(null);
  const isWide = useMedia('(min-width: 780px)');

  /**
   * 練習内容のサイズを設定
   */
  const style = {
    width: isWide ? '90%' : '100%',
    margin: '0 auto',
    marginTop: 10,
    marginBottom: 10,
  };

  /**
   * 動画のuseStateを設定
   *
   * 動画の初期表示とサイズ変更時に利用
   * @param videos
   */
  const setVideosFunc = (videos: Array<any>) => {
    let tmpVideos: Array<ReactNode> = [];
    for (let i = 0; i < videos.length; i++) {
      let video = videos[i];
      tmpVideos.push(
        <Box key={i} display="flex" justifyContent="center" alignItems="center" marginBottom="10px">
          <iframe
            style={{ width: isWide ? '80%' : '100%', aspectRatio: '16/9' }}
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>,
      );
    }
    setVideos(tmpVideos);
  };

  // 初期表示、日付切り替え時に動作
  useEffect(() => {
    const trainings: any = Training;
    const training: any = date != null ? trainings[date] : {};
    const menus: Array<any> = training.practice;
    let tmpRow: Array<ReactNode> = [];
    for (let i = 0; i < menus.length; i++) {
      let menu = menus[i];
      tmpRow.push(
        <TableRow key={menu.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row" style={{ whiteSpace: 'nowrap' }}>
            {menu.title}
          </TableCell>
          <TableCell align="left">{menu.detail}</TableCell>
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
    setVideosFunc(videos);
    setNextPage(training.next);
    setPrePage(training.pre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null, date]);

  // サイズを変えたときに、動画の幅を変える
  useEffect(() => {
    const trainings: any = Training;
    const training: any = date != null ? trainings[date] : {};
    const videos: Array<any> = training.videos;
    setVideosFunc(videos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWide]);

  const preAndNextButton = (isHead:boolean) => {
    
    return <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center">
      {prePage != null && (
        <Button
          variant="contained"
          color="success"
          component={Link}
          to={'/trainingMenu/' + prePage}
          data-testid={isHead ? "pre_top_button" : "pre_bottom_button"}
        >
          &lt; {prePage}
        </Button>
      )}
      {prePage == null && <div />}

      {nextPage != null && (
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={'/trainingMenu/' + nextPage}
          data-testid={isHead ? "next_top_button" : "next_bottom_button"}
        >
          {nextPage} &gt;
        </Button>
      )}
    </Box>
  };

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
      {preAndNextButton(true)}
      <div style={style}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      </div>
      {galleryImages.length > 0 && (
        <ImageGallery
          items={galleryImages}
          showNav={true}
          autoPlay={true}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showPlayButton={true}
          slideInterval={5000}
        />
      )}
      {videos}
      {preAndNextButton(false)}
    </>
  );
};

export default TrainingMenu;
