import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import LinkIcon from '@mui/icons-material/Link';
import { BASE_CONTEXT } from './constants';

const Menue = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key="ホーム" disablePadding component="a" href={BASE_CONTEXT}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItemButton>
        </ListItem>
        <ListItem key="部員紹介" disablePadding component="a" href={BASE_CONTEXT + '/member'}>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="部員紹介" />
          </ListItemButton>
        </ListItem>
        <ListItem key="練習予定" disablePadding component="a" href={BASE_CONTEXT + '/schedule'}>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="練習予定" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="リンク集" disablePadding component="a" href={BASE_CONTEXT + '/links'}>
          <ListItemButton>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="リンク集" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Menue;
