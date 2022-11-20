import { useParams } from 'react-router-dom';
import Training from './data/training.json';
import { ReactNode, useEffect, useState } from 'react';

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
        <li>
          {menue.title}・・・{menue.detail}
        </li>,
      );
    }

    setRows(tmpRow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>練習メニュー {date}</h1>
      {rows}
    </>
  );
};

export default TrainingMenue;
