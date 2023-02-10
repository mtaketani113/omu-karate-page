import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ColorModeContext, ColorModeContextType } from '../App';

const Inquiry = () => {
  const colorMode: ColorModeContextType = React.useContext(ColorModeContext);

  const [changeLog, setChangeLog] = useState<Array<ReactNode>>([]);
  const [page, setPage] = useState<number>(1);
  const [next, setNext] = useState<boolean>(true);

  const titleStyle = {
    backgroundColor: colorMode.mode === 'dark' ? '#7d7d7d' : '#eeeeee',
    fontWeight: 'bold',
    width: 110,
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  const headerStyle = {
    backgroundColor: colorMode.mode === 'dark' ? '#7d7d7d' : '#eeeeee',
    fontWeight: 'bold',
    borderStyle: 'solid',
    maxWidth: 110,
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  const titleStyleForChangeLog = {
    backgroundColor: colorMode.mode === 'dark' ? '#7d7d7d' : '#eeeeee',
    fontWeight: 'bold',
    maxWidth: 110,
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  const bodyStyle = {
    maxWidth: 500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorMode.mode === 'dark' ? 'white' : 'black',
  };

  const getChangeLogs = (paramPageNum?: number) => {
    let pageNum: number = page;
    if (paramPageNum != null) {
      pageNum = paramPageNum;
    }
    axios
      .get(
        'https://api.github.com/repos/mtaketani113/omu-karate-page/releases?per_page=30&page=' +
          pageNum,
      )
      .then((response) => {
        const data = response.data;
        const rows: Array<ReactNode> = [];
        for (let i = 0; i < data.length; i++) {
          const row = data[i];
          const dt = new Date(row.published_at);
          const y = ('00' + dt.getFullYear()).slice(-2);
          const m = ('00' + (dt.getMonth() + 1)).slice(-2);
          const d = ('00' + dt.getDate()).slice(-2);
          const publisedDate = y + '/' + m + '/' + d;
          rows.push(
            <TableRow key={row.tag_name}>
              <TableCell style={titleStyleForChangeLog}>{row.tag_name}</TableCell>
              <TableCell style={bodyStyle}>{publisedDate}</TableCell>
              <TableCell style={bodyStyle}>{row.name}</TableCell>
            </TableRow>,
          );
          if (row.tag_name === 'v1.0.0') {
            setNext(false);
          }
        }
        // モードを変更するとき強制的に1ページ目を表示するため、setNext,setPage,を初期化
        if (pageNum === 1) {
          // StrictModeの対応のためrowsを設定
          setChangeLog(rows);
          setNext(true);
          setPage(1);
        } else {
          setChangeLog((prevState) => [...prevState, ...rows]);
        }
      });
  };

  useEffect(() => {
    getChangeLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    getChangeLogs(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

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
        <TableHead>
          <TableRow>
            <TableCell style={headerStyle}>Ver</TableCell>
            <TableCell style={headerStyle}>変更日</TableCell>
            <TableCell style={headerStyle}>変更内容</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{changeLog}</TableBody>
      </Table>
      {next && changeLog.length > 0 && (
        <Button variant="text" onClick={() => setPage((prevState) => prevState + 1)}>
          さらに表示
        </Button>
      )}
    </>
  );
};

export default Inquiry;
