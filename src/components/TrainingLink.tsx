import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const TrainingLink = () => {
  const traningDateList:Array<string> = Object.keys(Training);
  const [rows, setRows] = useState<ReactNode>([]);
  useEffect(() => {
    let tmpRow: Array<ReactNode> = [];
    for (let i = 0; i < traningDateList.length; i++) {
      let date = traningDateList[traningDateList.length - i -1];
      tmpRow.push(
        <Link to={"/trainingMenue/" + date}>
          <h2>{date}</h2>
        </Link>
      )
    }
    setRows(tmpRow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>練習一覧 | 大阪公立大学空手道部 応援ページ</title>
      </Helmet>
      <h1>練習一覧</h1>
      {rows}
    </>
  );
};

export default TrainingLink;
