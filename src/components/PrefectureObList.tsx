import { Table, TableBody, TableHead, TableCell, TableRow } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import jsonObList from './data/prefectureObList.json';
import { ColorModeContext, ColorModeContextType } from '../App';
import React, { ReactNode, useEffect, useState } from 'react';

const PrefectureObList = () => {
  const colorMode: ColorModeContextType = React.useContext(ColorModeContext);

  const headerStyle = {
    backgroundColor: colorMode.mode === 'dark' ? '#7d7d7d' : '#eeeeee',
    fontWeight: 'bold',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  const bodyStyle = {
    minWidth: 110,
    maxWidth: 500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  const graduactionYearKeyList: Array<string> = Object.keys(jsonObList);
  const [obList, setObList] = useState<Array<ReactNode>>([]);
  const [maxColSpan, setMaxColSpan] = useState<number>(1);

  useEffect(() => {
    let tmpRow: Array<ReactNode> = [];
    let tmpColSpan: number = 1;
    for (let i = 0; i < graduactionYearKeyList.length; i++) {
      let tmpCell: Array<ReactNode> = [];
      let thisYearObList: string[] = (jsonObList as any)[graduactionYearKeyList[i]];
      tmpCell.push(
        <TableCell data-testid={graduactionYearKeyList[i]} key={graduactionYearKeyList[i]} style={bodyStyle}>
          {graduactionYearKeyList[i]}
        </TableCell>,
      );
      for (let k = 0; k < thisYearObList.length; k++) {
        tmpCell.push(
          <TableCell key={thisYearObList[k]} style={bodyStyle}>
            {thisYearObList[k]}
          </TableCell>,
        );
      }
      tmpRow.push(<TableRow key={graduactionYearKeyList[i]}>{tmpCell}</TableRow>);
      if (graduactionYearKeyList.length > tmpColSpan) {
        tmpColSpan = graduactionYearKeyList.length;
      }
    }
    setObList(tmpRow);
    setMaxColSpan(tmpColSpan);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null, colorMode]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>府大OB | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h1 data-testid="ob_title">府大OB</h1>
      <Table
        style={{
          maxWidth: 500,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell style={headerStyle}>年度</TableCell>
            <TableCell style={headerStyle} colSpan={maxColSpan} />
          </TableRow>
        </TableHead>
        <TableBody>{obList}</TableBody>
      </Table>
    </>
  );
};

export default PrefectureObList;
