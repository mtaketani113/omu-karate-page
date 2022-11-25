import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Fade,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import ImageTaketani from './images/taketani.jpg';
import ImageUmekage from './images/umekage.jpg';
import ImageComingSoon from './images/pop_coming_soon.png';
import { Helmet } from 'react-helmet';

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
  const [image, setImage] = useState<any>('false');

  const handleClose = () => {
    setOpen(false);
  };
  const handleImage = (image: any) => {
    setImage(image);
    setOpen(true);
  };

  function createData(
    name: string,
    department: string,
    former: string,
    comment: string,
    image: any,
    imagePosition: string,
  ) {
    return { name, department, former, comment, image, imagePosition };
  }

  const rows = [
    createData('Coming soon', '', '', '', ImageComingSoon, '0% 50%'),
    createData('Coming soon', '', '', '', ImageComingSoon, '0% 50%'),
    createData('Coming soon', '', '', '', ImageComingSoon, '0% 50%'),
  ];

  function createCoachData(
    position: string,
    name: string,
    comment: string,
    image: any,
    imagePosition: string,
  ) {
    return { position, name, comment, image, imagePosition };
  }

  const rowsCoach = [
    createCoachData('師範', 'Coming soon', '', ImageComingSoon, '0% 50%'),
    createCoachData('師範', 'Coming soon', '', ImageComingSoon, '0% 50%'),
    createCoachData('監督', '竹谷 匡玄', '平成18年 大阪府立大学卒業', ImageTaketani, '0% 15%'),
  ];

  function createOBhData(name: string, comment: string, image: any, imagePosition: string) {
    return { name, comment, image, imagePosition };
  }

  const rowsOB = [createOBhData('梅景 康平', '平成25年 大阪府立大学卒業', ImageUmekage, '0% 50%')];

  return (
    <>
      <Helmet>
        <title>部員紹介 | 大阪公立大学空手道部 応援ページ</title>
      </Helmet>
      <h1>現役紹介</h1>
      <Typography paragraph>4回生1名、1回生3名で頑張っています。</Typography>
      <Typography paragraph>↓作成中</Typography>
      <h2>四回生</h2>
      <Grid container spacing={4}>
        <Grid item key="4" xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 445 }}>
            <CardMedia
              className="cardImage"
              component="img"
              height="140"
              src={ImageComingSoon}
              alt="Comming soon"
              style={{ objectPosition: '0% 50%' }}
              onClick={(e) => handleImage(ImageComingSoon)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coming soon
              </Typography>
              <Typography gutterBottom variant="h6" component="div"></Typography>
              <Typography gutterBottom variant="h6" component="div"></Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" onClick={(e) => handleImage(ImageComingSoon)}>
                開く
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <h2>一回生</h2>

      <Grid container spacing={4}>
        {rows.map((row, i) => (
          <Grid item key={row.name + i} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                className="cardImage"
                component="img"
                height="140"
                src={row.image}
                alt={row.name}
                style={{ objectPosition: row.imagePosition }}
                onClick={(e) => handleImage(row.image)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {row.department}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {row.former}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.comment}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={(e) => handleImage(row.image)}>
                  開く
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>

      <h1>指導者紹介</h1>

      <Grid container spacing={4}>
        {rowsCoach.map((row, i) => (
          <Grid item key={row.name + i} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                className="cardImage"
                component="img"
                height="140"
                src={row.image}
                alt={row.name}
                style={{ objectPosition: row.imagePosition }}
                onClick={(e) => handleImage(row.image)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.position}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {row.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.comment}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={(e) => handleImage(row.image)}>
                  開く
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>

      <h1>OB紹介</h1>
      <Typography paragraph>よく来ていただいてるOBを紹介します。</Typography>

      <Grid container spacing={4}>
        {rowsOB.map((row, i) => (
          <Grid item key={row.name + i} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                className="cardImage"
                component="img"
                height="140"
                src={row.image}
                alt={row.name}
                style={{ objectPosition: row.imagePosition }}
                onClick={(e) => handleImage(row.image)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.comment}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={(e) => handleImage(row.image)}>
                  開く
                </Button>
              </CardActions>
            </Card>
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
          <Box sx={style}>
            <img src={image} alt="asd" style={{ maxHeight: '90%', maxWidth: '90%' }} />
            <Button onClick={handleClose}>閉じる</Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Member;
