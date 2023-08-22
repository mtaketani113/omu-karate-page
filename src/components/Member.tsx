import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  Modal,
  Typography,
  CardActionArea,
} from '@mui/material';
import { useState } from 'react';
import ImageTaketani from './images/taketani.jpg';
import ImageShihan from './images/shihan.jpg';
import ImageUmekage from './images/umekage.jpg';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Member = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
  };
  const handleImage = (image: string) => {
    setImage(image);
    setOpen(true);
  };

  function createData(
    name: string,
    department: string,
    former: string,
    comment: string,
    image: string,
    imagePosition: string,
  ) {
    return { name, department, former, comment, image, imagePosition };
  }

  const rows = [
    createData(
      '主将',
      '理学部',
      '桃山学院高校',
      '杉本キャンパス',
      'https://omu-karate-org.github.io/images/member/2022/hirose.jpg',
      '0% 30%',
    ),
    createData(
      '副主将',
      '工学部',
      '大阪桐蔭高校',
      '中百舌鳥キャンパス',
      'https://omu-karate-org.github.io/images/member/2022/yoshida.jpg',
      '0% 30%',
    ),
    createData(
      '主務',
      '生活科学部',
      '桃山学院高校',
      '杉本キャンパス',
      'https://omu-karate-org.github.io/images/member/2022/hakumoto.jpg',
      '0% 30%',
    ),
  ];

  function createCoachData(
    position: string,
    name: string,
    comment: string,
    image: string,
    imagePosition: string,
  ) {
    return { position, name, comment, image, imagePosition };
  }

  const rowsCoach = [
    createCoachData('師範', '加藤 励', '', ImageShihan, '0% 20%'),
    createCoachData(
      '監督',
      '竹谷 匡玄',
      '平成18年 大阪府立大学卒業\n一応プログラマーの端くれです。',
      ImageTaketani,
      '0% 15%',
    ),
  ];

  function createOBhData(name: string, comment: string, image: any, imagePosition: string) {
    return { name, comment, image, imagePosition };
  }

  const rowsOB = [createOBhData('梅景 康平', '平成25年 大阪府立大学卒業', ImageUmekage, '0% 50%')];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>部員紹介 | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h1 data-testid="player">現役紹介</h1>
      <Typography paragraph>2回生3名、1回生3名で頑張っています。</Typography>
      <h2>二回生</h2>

      <Grid container spacing={4}>
        {rows.map((row, i) => (
          <Grid item key={row.name + i} xs={12} sm={6} md={4}>
            <CardActionArea onClick={(e) => handleImage(row.image)}>
              <Card sx={{ maxWidth: 445 }}>
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="140"
                  src={row.image}
                  alt={row.name}
                  style={{ objectPosition: row.imagePosition }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    学部：{row.department}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    出身校：{row.former}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {row.comment}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
        ;
      </Grid>

      <h2>一回生</h2>
      <Typography paragraph>3名入部してくれました！！</Typography>

      <h1 data-testid="coach">指導者紹介</h1>

      <Grid container spacing={4}>
        {rowsCoach.map((row, i) => (
          <Grid item key={row.name + i} xs={12} sm={6} md={4}>
            <CardActionArea onClick={(e) => handleImage(row.image)} data-testid={'open_coach' + i}>
              <Card sx={{ maxWidth: 445 }}>
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="140"
                  src={row.image}
                  alt={row.name}
                  style={{ objectPosition: row.imagePosition }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.position}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {row.name}
                  </Typography>

                  {row.comment.split('\n').map((line, key) => (
                    <Typography key={key} variant="body2" color="text.secondary">
                      {line}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
        ;
      </Grid>

      <h1 data-testid="ob">OB紹介</h1>
      <Typography paragraph>よく来ていただいてるOBを紹介します。</Typography>

      <Grid container spacing={4}>
        {rowsOB.map((row, i) => (
          <Grid item key={row.name + i} xs={12} sm={6} md={4}>
            <CardActionArea onClick={(e) => handleImage(row.image)}>
              <Card sx={{ maxWidth: 445 }}>
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="140"
                  src={row.image}
                  alt={row.name}
                  style={{ objectPosition: row.imagePosition }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {row.comment}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
        ;
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open} timeout={500}>
          <Box sx={style} data-testid="open_image">
            <img src={image} alt="asd" style={{ maxHeight: '90%', maxWidth: '90%' }} />
            <Button onClick={handleClose} data-testid="close">
              閉じる
            </Button>
          </Box>
        </Fade>
      </Modal>
      <br />
      <Link data-testid="prefectureObListLink" to="/prefectureObList">
        府大OB
      </Link>
    </>
  );
};

export default Member;
