import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext, ColorModeContextType } from '../../App';

const drawerWidth = 240;

interface Props {
  handleDrawerToggle: () => void;
  openMenu: boolean;
}

const Header = ({ handleDrawerToggle, openMenu }: Props) => {
  const theme = useTheme();
  const colorMode: ColorModeContextType = React.useContext(ColorModeContext);
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: openMenu ? `calc(100% - ${drawerWidth}px)` : `calc(100%)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={openMenu ? { mr: 2, display: { sm: 'none' } } : { mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography data-testid="title" variant="h6" noWrap component="div">
            大阪公立大学 空手道部
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
