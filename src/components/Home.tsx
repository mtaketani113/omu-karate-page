import Typography from '@mui/material/Typography';
import { XEmbed, InstagramEmbed } from 'react-social-media-embed';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Home = () => {
  return (
    <>
      <title>大阪公立大学空手道部 応援ページ</title>
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
        26年1月20日 更新
      </Typography>
      <Typography paragraph>
        <li>26年1月31日 13時30分 杉本キャンパスで追い出し戦＋幹部交代式</li>
      </Typography>

      <h2>Xの投稿</h2>
      <XEmbed url={'https://x.com/omu_karatedo/status/2012084003185230301'} />
      <XEmbed url={'https://x.com/omu_karatedo/status/1998559620303040628'} />
      <h2>Instagramの投稿</h2>
      <InstagramEmbed url={'https://www.instagram.com/omu_karatedo/'} />
    </>
  );
};

export default Home;
