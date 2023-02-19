import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { ColorModeContext, ColorModeContextType } from '../App';

const KaratedoAnnualEvents = () => {
  const colorMode: ColorModeContextType = React.useContext(ColorModeContext);
  const titleStyle = {
    backgroundColor: colorMode.mode === 'dark' ? '#7d7d7d' : '#eeeeee',
    fontWeight: 'bold',
    width: 90,
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };
  const bodyStyle = {
    maxWidth: 500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <Table
      style={{
        maxWidth: 500,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
      }}
    >
      <TableBody>
        <TableRow>
          <TableCell style={titleStyle}>4月</TableCell>
          <TableCell style={bodyStyle}>全関西個人</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>5月</TableCell>
          <TableCell style={bodyStyle}>西日本団体戦</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>6月</TableCell>
          <TableCell style={bodyStyle}></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>7月</TableCell>
          <TableCell style={bodyStyle}>
            都立戦
            <br />
            夏季昇級昇段審査
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>8月</TableCell>
          <TableCell style={bodyStyle}></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>9月</TableCell>
          <TableCell style={bodyStyle}>関西学生オープン</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>10月</TableCell>
          <TableCell style={bodyStyle}>全関西団体</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>11月</TableCell>
          <TableCell style={bodyStyle}>
            六公立戦 <br />
            <a href="https://www.weblio.jp/content/%E4%B8%89%E5%95%86%E6%88%A6">三商戦</a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>12月</TableCell>
          <TableCell style={bodyStyle}>
            全国公立 団体戦
            <br />
            冬季昇級昇段審査
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>1月</TableCell>
          <TableCell style={bodyStyle}></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>2月</TableCell>
          <TableCell style={bodyStyle}></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={titleStyle}>3月</TableCell>
          <TableCell style={bodyStyle}></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default KaratedoAnnualEvents;
