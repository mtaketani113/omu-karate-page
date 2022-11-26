import { useParams } from 'react-router-dom';
import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Helmet } from 'react-helmet';

const TrainingMenue = (props: any) => {
  const { date } = useParams<{ date: string }>();
  const [rows, setRows] = useState<ReactNode>([]);
  const [images, setImages] = useState<ReactNode>([]);
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
      tmpImages.push(<img src={image} width="100%" alt="練習" />);
    }
    setImages(tmpImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>練習メニュー | 大阪公立大学空手道部 応援ページ</title>
      </Helmet>
      <h1>練習メニュー</h1>
      <h3> {date}</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
      {images}
    </>
  );
};

export default TrainingMenue;
