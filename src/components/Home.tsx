import Typography from '@mui/material/Typography';
import { XEmbed, InstagramEmbed } from 'react-social-media-embed';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <div id="homeHeaderImages">
        <ImageGallery
          items={[
            {
              original: 'https://omu-karate-org.github.io/images/header/movingPractice.jpg',
            },
            {
              original:
                'https://omu-karate-org.github.io/images/practice/20221126/pinan_ageuke.jpg',
            },
            {
              original: 'https://omu-karate-org.github.io/images/practice/20221126/pinan_shiko.jpg',
            },
            {
              original: 'https://omu-karate-org.github.io/images/practice/20221201/mat.jpg',
            },
          ]}
          showNav={false}
          autoPlay={true}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showPlayButton={false}
          slideInterval={5000}
        />
      </div>
      <Typography paragraph>
        大阪府立大学、大阪市立大学が合併し大阪公立大学(大公大)となりました。
      </Typography>
      <Typography paragraph>そんな大阪公立大学の空手道部を応援するページです。</Typography>

      <h2 data-testid="event_title">イベント情報</h2>
      <Typography paragraph color="green">
        25年6月30日 更新
      </Typography>
      <Typography paragraph>
        <li>
          25年7月6日 9時30分 東京都立大学
          <a href="https://www.tmu.ac.jp/campus_guide/map.html">南大沢キャンパス</a>
          体育館剣道場にて都立戦
        </li>
      </Typography>
      <Typography paragraph color="green">
        23年11月5日 更新
      </Typography>
      <Typography paragraph>
        <li>23年11月11日 杉本町で10時から昇級審査</li>
        <li>23年12月9日 一橋大学で三商戦</li>
      </Typography>
      <Typography paragraph color="green">
        23年6月29日 更新
      </Typography>
      <Typography paragraph>
        <li>
          23年7月1日 東京都立大学
          <a href="https://www.tmu.ac.jp/campus_guide/map.html">南大沢キャンパス</a>
          体育館剣道場にて都立戦
        </li>
      </Typography>
      <Typography paragraph color="green">
        23年4月12日 更新
      </Typography>
      <Typography paragraph>
        <li>
          <Link to="/schedule?initDate=2023-04-15">4月15日</Link>
          の土曜の練習日場所が中百舌鳥にかわりました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        23年4月7日 更新
      </Typography>
      <Typography paragraph>
        <li>
          <Link to="/schedule?initDate=2023-04-08">4月8日</Link>
          の土曜の練習日場所が中百舌鳥にかわりました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        23年3月17日 更新
      </Typography>
      <Typography paragraph>
        <li>
          <Link to="/schedule?initDate=2023-04-01">4月</Link>の土曜の練習日(仮)を記載しました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        23年1月26日 更新
      </Typography>
      <Typography paragraph>
        <li>
          <Link to="/schedule?initDate=2023-02-16">2月</Link>の中百舌鳥での練習日を記載しました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        22年12月19日 更新
      </Typography>
      <Typography paragraph>
        <li>
          初稽古は
          <Link to="/schedule?initDate=2023-01-07">1月7日</Link>です。
        </li>
        <li>
          22年度、後期の試験期間を
          <Link to="/schedule?initDate=2023-01-23">練習予定</Link>に追記しました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        22年12月18日 更新
      </Typography>
      <Typography paragraph>
        <li>
          22年12月17日 <Link to="/trainingMenu/2022-12-17">審査会の結果</Link> 頑張りました。
        </li>
      </Typography>
      <Typography paragraph color="green">
        22年12月16日 更新
      </Typography>
      <Typography paragraph>
        <li>
          22年12月17日 <Link to="/schedule?initDate=2022-12-17">審査会</Link>
        </li>
      </Typography>
      <Typography paragraph color="green">
        22年12月3日 更新
      </Typography>
      <Typography paragraph>
        <li>
          22年12月3日
          <Link to="/trainingMenu/2022-12-03">三商戦</Link> 頑張りました。
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

      <XEmbed
        url={"https://x.com/omu_karatedo"}
      />
      <InstagramEmbed
        url={"https://www.instagram.com/omu_karatedo/"}
      />
    </>
  );
};

export default Home;
