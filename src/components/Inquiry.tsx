import { Table, TableBody, TableCell, TableRow } from '@mui/material';

const Inquiry = () => {
  const titleStyle = {
    backgroundColor: '#eeeeee',
    fontWeight: 'bold',
    width: 110,
    borderColor: 'black',
  };

  const bodyStyle = { maxWidth: 500, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' };

  return (
    <>
      <h1>お問い合わせ</h1>
      <Table style={{ maxWidth: 500, borderWidth: 1, borderStyle: 'solid' }}>
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
    </>
  );
};

export default Inquiry;
