import Typography from '@mui/material/Typography';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Image from './images/headerIcon.jpg';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>大阪公立大学空手道部 応援ページ</title>
      </Helmet>
      <img src={Image} width="100%" alt="トップアイコン" />
      <Typography paragraph>
        大阪府立大学、大阪市立大学が合併し大阪公立大学となりました。
      </Typography>
      <Typography paragraph>そんな大阪公立大学の空手道部を応援するページです。</Typography>

      <h2>イベント情報</h2>
      <Typography paragraph color="green">
        22年11月19日 更新
      </Typography>
      <li>
        22年12月3日{' '}
        <a href="https://kobe-karatedobu.webnode.jp/%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b/">
          神戸大学
        </a>
        にて三商戦
      </li>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="omu_karatedo"
        options={{ height: 600 }}
      />
    </>
  );
};

export default Home;
