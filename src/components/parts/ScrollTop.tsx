import { Box, Zoom, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

/**
 * スクロールトップへ戻すボタン
 *
 * @returns
 */
const ScrollTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  /**
   * スクロールトップへ戻す関数
   * @param event
   */
  const scrollToTop = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab onClick={scrollToTop} color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollTop;
