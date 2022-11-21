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
import RoomIcon from '@mui/icons-material/Room';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { BASE_CONTEXT } from './constants';

const Menue = () => {
  return (
    <div>
      <Divider />
      <List>
        <ListItem key="home" disablePadding component="a" href={BASE_CONTEXT}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItemButton>
        </ListItem>
        <ListItem key="member" disablePadding component="a" href={BASE_CONTEXT + '/member'}>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="部員紹介" />
          </ListItemButton>
        </ListItem>
        <ListItem key="schedule" disablePadding component="a" href={BASE_CONTEXT + '/schedule'}>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="練習予定" />
          </ListItemButton>
        </ListItem>
        <ListItem key="place" disablePadding component="a" href={BASE_CONTEXT + '/place'}>
          <ListItemButton>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary="練習場所・時間" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="links" disablePadding component="a" href={BASE_CONTEXT + '/links'}>
          <ListItemButton>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="リンク集" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          key="privacyPolicy"
          disablePadding
          component="a"
          href={BASE_CONTEXT + '/privacyPolicy'}
        >
          <ListItemButton>
            <ListItemIcon>
              <PrivacyTipIcon />
            </ListItemIcon>
            <ListItemText primary="プライバシーポリシー" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Menue;