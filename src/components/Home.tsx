import Typography from '@mui/material/Typography';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Image from './headerIcon.jpg';

const Home = () => {
  return (
    <>
      <img src={Image} width="100%" alt="トップアイコン" />
      <Typography paragraph>
        大阪府立大学、大阪市立大学が合併し大阪公立大学となりました。
      </Typography>
      <Typography paragraph>そんな大阪公立大学の空手道部を応援するページです。</Typography>

      <h2>イベント情報</h2>

      <li>22年12月3日　神戸大学にて三商戦</li>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="omu_karatedo"
        options={{ height: 600 }}
      />
    </>
  );
};

export default Home;
