import React, { useEffect } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter } from 'react-router-dom';
import {
  DummyHeader,
  Header,
  Menu,
  ScrollTop,
  ScrollTopForPathChange,
  ShareButton,
} from './components/index';
import Container from '@mui/material/Container';
import { BASE_CONTEXT } from './components/parts/constants';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MainPageRoutes from './MainPageRoutes';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCookies } from 'react-cookie';

// AppContext が保持する値の型
export interface ColorModeContextType {
  colorMode: { toggleColorMode: () => void };
  mode: 'light' | 'dark';
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
  colorMode: { toggleColorMode: () => {} },
  mode: 'light',
});

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
  const [pcOpen, setPcOpen] = React.useState(true);
  const [cookies, setCookie] = useCookies();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerPcToggle = () => {
    setPcOpen(!pcOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const initMode = cookies.react_mode ?? (prefersDarkMode ? 'dark' : 'light');
  const [mode, setMode] = React.useState<'light' | 'dark'>(initMode);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  /**
   * ダークモード、ライトモードの切り替え
   */
  useEffect(() => {
    document.documentElement.setAttribute('theme', mode);
    // クッキーの保存して、次回描画時に利用
    setCookie('react_mode', mode, { maxAge: 60 * 60 * 12 * 7, path: BASE_CONTEXT });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const providerValue: ColorModeContextType = { colorMode, mode };
  return (
    <ColorModeContext.Provider value={providerValue}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <BrowserRouter basename={BASE_CONTEXT}>
            <ScrollTopForPathChange />
            {/* モバイルのメニュー */}
            <Box
              component="span"
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              <Header handleDrawerToggle={handleDrawerToggle} openMenu={pcOpen} />
            </Box>
            {/* PCのメニュー */}
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Header handleDrawerToggle={handleDrawerPcToggle} openMenu={pcOpen} />
            </Box>
            <Box
              component="nav"
              sx={{ width: { sm: !pcOpen ? 0 : drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              {/* モバイルのメニュー */}
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
                <Menu setMobileOpen={setMobileOpen} />
              </Drawer>
              {/* PCのメニュー */}
              <Drawer
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                }}
                variant="persistent"
                anchor="left"
                open={pcOpen}
              >
                <DrawerHeader>
                  <IconButton onClick={() => setPcOpen(false)}>
                    <ChevronLeftIcon />
                  </IconButton>
                </DrawerHeader>
                <Menu />
              </Drawer>
            </Box>
            {/* メインコンテンツ */}
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
              <Toolbar id="top-anchor" />

              <DummyHeader />
              <Container disableGutters maxWidth="xl">
                <MainPageRoutes />
                <ShareButton />
              </Container>

              <ScrollTop />
            </Box>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
