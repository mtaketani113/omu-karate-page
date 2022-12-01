import { Grid } from '@mui/material';
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
} from 'react-share';
import { useLocation } from 'react-router-dom';

const URL = 'https://mtaketani113.github.io/omu-karate-page';
const QUOTE = '大阪公立大学空手道部 応援ページ';

const ShareButton = () => {
  const location = useLocation();

  return (
    <>
      <Grid container spacing={0} style={{ paddingTop: '15px' }}>
        <Grid item xs={2}>
          <FacebookShareButton url={URL + location.pathname} quote={QUOTE}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
        </Grid>
        <Grid item xs={2}>
          <TwitterShareButton url={URL + location.pathname} title={QUOTE}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
        </Grid>
        <Grid item xs={2}>
          <LineShareButton url={URL + location.pathname} title={QUOTE}>
            <LineIcon size={48} round />
          </LineShareButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ShareButton;
