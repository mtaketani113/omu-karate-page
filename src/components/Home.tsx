import Typography from '@mui/material/Typography';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Image from './images/headerIcon.jpg';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <img src={Image} width="100%" alt="トップアイコン" />
      <Typography paragraph>
        大阪府立大学、大阪市立大学が合併し大阪公立大学となりました。
      </Typography>
      <Typography paragraph>そんな大阪公立大学の空手道部を応援するページです。</Typography>

      <h2 data-testid="event_title">イベント情報</h2>
      <Typography paragraph color="green">
        22年12月19日 更新
      </Typography>
      <Typography paragraph>
        <li>
          初稽古は
          <Link to="/schedule">1月7日</Link>です。
        </li>
        <li>
          22年度、後期の試験期間を
          <Link to="/schedule">練習予定</Link>に追記しました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        22年12月18日 更新
      </Typography>
      <Typography paragraph>
        <li>
          22年12月17日
          <Link to="/trainingMenue/2022-12-17">審査会</Link> 頑張りました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        22年12月16日 更新
      </Typography>
      <Typography paragraph>
        <li>22年12月17日 審査会</li>
      </Typography>
      <Typography paragraph color="green">
        22年12月3日 更新
      </Typography>
      <Typography paragraph>
        <li>
          22年12月3日
          <Link to="/trainingMenue/2022-12-03">三商戦</Link> 頑張りました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        22年11月19日 更新
      </Typography>
      <Typography paragraph>
        <li>
          22年12月3日
          <a href="https://kobe-karatedobu.webnode.jp/%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b/">
            神戸大学
          </a>
          にて三商戦
        </li>
      </Typography>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="omu_karatedo"
        options={{ height: 600 }}
      />
    </>
  );
};

export default Home;
