import { Grid } from "@mui/material";
import {
    FacebookShareButton,
    LineShareButton,
    TwitterShareButton,
    FacebookIcon,
    LineIcon,
    TwitterIcon,
  } from "react-share";
  
  const URL = 'https://mtaketani113.github.io/omu-karate-page/';
  const QUOTE = '大阪公立大学空手道部 応援ページ';
  
  const ShareButton = () => {
    return (
      <>
<Grid container spacing={10} style={{paddingTop:'15px'}}>
  <Grid item xs={1}>
  <FacebookShareButton url={URL} quote={QUOTE}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
  </Grid>
  <Grid item xs={1}>
  <TwitterShareButton url={URL} title={QUOTE}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>
  </Grid>
  <Grid item xs={1}>
  <LineShareButton url={URL} title={QUOTE} >
          <LineIcon size={48} round />
        </LineShareButton>
  </Grid>
  </Grid>





      </>
    )
  }

export default ShareButton;