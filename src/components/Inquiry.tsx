import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ColorModeContext, ColorModeContextType } from '../App';

const Inquiry = () => {
  const colorMode: ColorModeContextType = React.useContext(ColorModeContext);

  const [chageLog, setChangeLog] = useState<any>(null);

  const titleStyle = {
    backgroundColor: colorMode.mode === 'dark' ? '#7d7d7d' : '#eeeeee',
    fontWeight: 'bold',
    width: 110,
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  const bodyStyle = {
    maxWidth: 500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/mtaketani113/omu-karate-page/releases')
      .then((response) => {
        let data = response.data;
        let rows: Array<ReactNode> = [];
        for (let i = 0; i < data.length; i++) {
          let row = data[i];
          rows.push(
            <TableRow key={row.tag_name}>
              <TableCell style={titleStyle}>{row.tag_name}</TableCell>
              <TableCell style={bodyStyle}>{row.name}</TableCell>
            </TableRow>,
          );
        }

        setChangeLog(rows);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>お問い合わせ | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h1 data-testid="inquiry_title">お問い合わせ</h1>
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
            <TableCell style={titleStyle}>管理者</TableCell>
            <TableCell style={bodyStyle}>
              監督の<span style={{ fontWeight: 'bold' }}>竹谷 匡玄</span>が管理しています。
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>問い合わせ</TableCell>
            <TableCell style={bodyStyle}>
              サイトの問い合わせはTwitterにお願いします。 <br />
              <br />
              アカウントは @<a href="https://twitter.com/mtaketani113">mtaketani113</a> です。
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={titleStyle}>
              不具合報告
              <br />
              改善依頼
            </TableCell>
            <TableCell style={bodyStyle}>
              Githubの<a href="https://github.com/mtaketani113/omu-karate-page/issues/new">Issue</a>
              にお願いします
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h1 data-testid="change_log_title">変更履歴</h1>
      <Table
        style={{
          maxWidth: 500,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <TableBody>{chageLog}</TableBody>
      </Table>
    </>
  );
};

export default Inquiry;
