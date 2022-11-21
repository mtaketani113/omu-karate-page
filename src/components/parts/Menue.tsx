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
import { Link } from 'react-router-dom';

interface Props {
  setMobileOpen?: (open: boolean) => void;
}


const Menue = ({setMobileOpen}: Props) => {
  
  const doNottiong = (open: boolean) => {};
  const setOpen = setMobileOpen ?? doNottiong;

  return (
    <div>
      <Divider />
      <List onClick={() => setOpen(false)}>
        <ListItem key="home" disablePadding component={Link} to={'/'} >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItemButton>
        </ListItem>
        <ListItem key="member" disablePadding component={Link} to={'/member'}>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="部員紹介" />
          </ListItemButton>
        </ListItem>
        <ListItem key="schedule" disablePadding component={Link} to={'/schedule'}>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="練習予定" />
          </ListItemButton>
        </ListItem>
        <ListItem key="place" disablePadding component={Link} to={'/place'}>
          <ListItemButton>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary="練習場所・時間" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List onClick={() => setOpen(false)}>
        <ListItem key="links" disablePadding component={Link} to={'/links'}>
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
          component={Link}
          to={'/privacyPolicy'}
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
