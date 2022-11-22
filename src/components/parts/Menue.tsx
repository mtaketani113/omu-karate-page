import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import LinkIcon from '@mui/icons-material/Link';
import RoomIcon from '@mui/icons-material/Room';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { Link, useLocation } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { HashLink } from 'react-router-hash-link';

interface Props {
  setMobileOpen?: (open: boolean) => void;
}
const Menue = ({ setMobileOpen }: Props) => {
  const doNottiong = (open: boolean) => {};
  const setOpen = setMobileOpen ?? doNottiong;

  const [openPlace, setOpenPlace] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setOpenPlace((prevState) => !prevState);
  };

  const menues = [
    {
      text: 'ホーム',
      pathname: '/',
      icon: HomeIcon,
    },
    {
      text: '部員紹介',
      pathname: '/member',
      icon: PeopleIcon,
    },
    {
      text: '練習予定',
      pathname: '/schedule',
      icon: CalendarMonthIcon,
    },
  ];

  return (
    <div>
      <Divider />
      <List onClick={() => setOpen(false)}>
        {menues.map((menue: any) => (
          <ListItemButton
            key={menue.text}
            component={Link}
            to={menue.pathname}
            selected={location.pathname === menue.pathname}
          >
            <ListItemIcon>
              <menue.icon />
            </ListItemIcon>
            <ListItemText primary={menue.text} />
          </ListItemButton>
        ))}
        <ListItemButton
          key="place"
          component={Link}
          to={'/place'}
          onClick={handleClick}
          selected={location.pathname === '/place'}
        >
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary="練習場所・時間" />
          {openPlace ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openPlace} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <HashLink
              smooth
              to="/place#sugimoto"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary="杉本町" />
              </ListItemButton>
            </HashLink>
            <HashLink
              smooth
              to="/place#nakamozu"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary="中百舌鳥" />
              </ListItemButton>
            </HashLink>
            <HashLink smooth to="/place#time" style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="練習時間" />
              </ListItemButton>
            </HashLink>
          </List>
        </Collapse>

        <Divider />

        <ListItemButton
          key="links"
          component={Link}
          to={'/links'}
          selected={location.pathname === '/links'}
        >
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="リンク集" />
        </ListItemButton>

        <Divider />

        <ListItemButton
          key="privacyPolicy"
          component={Link}
          to={'/privacyPolicy'}
          selected={location.pathname === '/privacyPolicy'}
        >
          <ListItemIcon>
            <PrivacyTipIcon />
          </ListItemIcon>
          <ListItemText primary="プライバシーポリシー" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Menue;
