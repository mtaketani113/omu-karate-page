import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  DummyHeader,
  Header,
  Home,
  Links,
  Member,
  Menue,
  Place,
  PrivacyPolicy,
  Schedule,
  ScrollTop,
  TrainingMenue,
} from './components/index';
import Container from '@mui/material/Container';
import { BASE_CONTEXT } from './components/parts/constants';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <BrowserRouter basename={BASE_CONTEXT}>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <DrawerHeader>
              <IconButton onClick={() => setMobileOpen(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <Menue setMobileOpen={setMobileOpen} />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            <Toolbar />
            <Menue />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar id="top-anchor" />

          <DummyHeader />
          <Container sx={{ py: 2 }} maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} /> {/* ホーム */}
              <Route path="/member" element={<Member />} /> {/* 部員紹介 */}
              <Route path="/schedule" element={<Schedule />} /> {/* 練習予定 */}
              <Route path="/place" element={<Place />} /> {/* 練習場所・時間 */}
              <Route path="/links" element={<Links />} /> {/* リンク集 */}
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />{' '}
              {/* プライバシーポリシー */}
              <Route path="/trainingMenue/:date" element={<TrainingMenue />} />
              {/* 練習メニュー */}
            </Routes>
          </Container>

          <ScrollTop />
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
