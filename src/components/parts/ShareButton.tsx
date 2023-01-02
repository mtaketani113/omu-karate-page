import { Grid, IconButton } from '@mui/material';
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
} from 'react-share';
import { useLocation } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const URL = 'https://mtaketani113.github.io/omu-karate-page';
const QUOTE = '大阪公立大学空手道部 応援ページ';

const ShareButton = () => {
  const location = useLocation();

  return (
    <>
      <Grid container spacing={0} style={{ paddingTop: '15px' }}>
        <Grid item xs={2} lg={1}>
          <FacebookShareButton url={URL + location.pathname} quote={QUOTE}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
        </Grid>
        <Grid item xs={2} lg={1}>
          <TwitterShareButton url={URL + location.pathname} title={QUOTE}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
        </Grid>
        <Grid item xs={2} lg={1}>
          <LineShareButton url={URL + location.pathname} title={QUOTE}>
            <LineIcon size={48} round />
          </LineShareButton>
        </Grid>
        <Grid item xs={2} lg={1}>
          <IconButton
            href="https://github.com/mtaketani113/omu-karate-page"
            style={{ padding: '0px', color: 'black' }}
          >
            <GitHubIcon sx={{ fontSize: 48 }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ShareButton;
