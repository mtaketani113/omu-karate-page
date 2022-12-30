import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

interface Props {
  handleDrawerToggle: () => void;
  openMenu: boolean;
}

const Header = ({ handleDrawerToggle, openMenu }: Props) => {
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
            大阪公立大学 空手道部　応援ページ
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
