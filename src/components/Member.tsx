import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Fade, Link, Modal, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import ImageTaketani from './images/taketani.jpg';

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

  function createData(name: string, department: string, former: string, comment: string) {
    return { name, department, former, comment };
  }

  const rows = [
    createData('Coming soon', '', '', ''),
    createData('Coming soon', '', '', ''),
    createData('Coming soon', '', '', ''),
  ];

  return (
    <>
      <h1>現役紹介</h1>
      <Typography paragraph>4回生1名、1回生3名で頑張っています。</Typography>
      <Typography paragraph>↓作成中</Typography>
      <h2>四回生</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">名前</TableCell>
              <TableCell align="center">学域</TableCell>
              <TableCell align="center">出身校</TableCell>
              <TableCell align="center">一言</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="4-1" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="center">Coming soon</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h2>一回生</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">名前</TableCell>
              <TableCell align="center">学域</TableCell>
              <TableCell align="center">出身校</TableCell>
              <TableCell align="center">一言</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row.name + i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.department}</TableCell>
                <TableCell align="center">{row.former}</TableCell>
                <TableCell align="left">{row.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>指導者紹介</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="left">名前</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                監督
              </TableCell>
              <TableCell align="left">
                <Link onClick={(e) => handleImage(ImageTaketani)}>竹谷 匡玄</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h1>OB紹介</h1>
      <Typography paragraph>よく来ていただいてるOBを紹介します。</Typography>

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
