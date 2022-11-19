import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const Member = () => {
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
      <h1>部員紹介</h1>
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
            <TableRow key="" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
    </>
  );
};

export default Member;
