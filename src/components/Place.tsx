import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useMedia } from 'react-use';

const Place = () => {
  const isWide = useMedia('(min-width: 780px)');

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>練習場所・時間 | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <h2 data-testid="place_title">練習場所</h2>
      <h3 className="anchor" id="sugimoto">
        杉本キャンパス 新武道場
      </h3>
      <Box display="flex" justifyContent="center" alignItems="center">
        <iframe
          title="新武道場"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d976.4800980389026!2d135.50802317627867!3d34.59216561593446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000dc1300eaceed%3A0xaadb891609ab1fc4!2z44CSNTU4LTg1ODUg5aSn6Ziq5bqc5aSn6Ziq5biC5L2P5ZCJ5Yy65p2J5pys77yT5LiB55uu77yT4oiS77yR77yT77yYIOaWsOatpumBk-WgtA!5e0!3m2!1sja!2sjp!4v1668716020197!5m2!1sja!2sjp"
          style={{ border: '0', width: isWide ? '90%' : '100%', aspectRatio: '16/9' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <h3 className="anchor" id="nakamozu">
        中百舌鳥キャンパス 体育館剣道場
      </h3>{' '}
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="10px">
        <iframe
          title="中百舌鳥道場"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.4603984145501!2d135.50723243628272!3d34.546303878949594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000dbcc4b8d0ddd%3A0x74010ebd35722f16!2z44CSNTk5LTgyMzEg5aSn6Ziq5bqc5aC65biC5Lit5Yy65a2m5ZyS55S677yRIEMy5qOfICjkvZPogrLppKgp!5e0!3m2!1sja!2sjp!4v1668715461771!5m2!1sja!2sjp"
          style={{ border: '0', width: isWide ? '90%' : '100%', aspectRatio: '16/9' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{' '}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src="https://omu-karate-org.github.io/images/place/nakamozu.jpg"
          width={isWide ? '90%' : '100%'}
          alt="中百舌鳥"
        />
      </Box>
      <h2 className="anchor" id="time">
        練習時間
      </h2>
      <h3>杉本キャンパス</h3>
      <Typography paragraph>
        <li>水曜日・・・17:00~19:00</li>
        <li>土曜日・・・10:00~12:00</li>
      </Typography>
      <h3>中百舌鳥キャンパス</h3>
      <Typography paragraph>
        <li>木曜日・・・17:00~19:00 ※不定期</li>
      </Typography>
      <Typography paragraph>
        【重要】不定期のため、<Link to={'/schedule'}>練習予定</Link>をご確認ください
      </Typography>
    </>
  );
};

export default Place;
