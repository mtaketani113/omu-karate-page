import { useParams } from 'react-router-dom';
import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

const TrainingMenue = (props: any) => {
  const { date } = useParams<{ date: string }>();
  const [rows, setRows] = useState<ReactNode>([]);
  useEffect(() => {
    const training: any = Training;
    const menues: Array<any> = date != null ? training[date] : [];
    let tmpRow: Array<ReactNode> = [];
    for (var i = 0; i < menues.length; i++) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>練習メニュー</h1>
      <h3> {date}</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TrainingMenue;
