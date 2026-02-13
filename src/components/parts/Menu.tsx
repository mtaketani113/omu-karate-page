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
import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link, useLocation } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { HashLink } from 'react-router-hash-link';
import CollectionsIcon from '@mui/icons-material/Collections';
import EventIcon from '@mui/icons-material/Event';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import InfoIcon from '@mui/icons-material/Info';

interface Props {
  setMobileOpen?: (open: boolean) => void;
}

/**
 * メニュー部のJSX
 *
 * @param param0
 * @returns
 */
const Menu = ({ setMobileOpen }: Props) => {
  const doNothing = (open: boolean) => {};
  const setOpen = setMobileOpen ?? doNothing;

  const [openPlace, setOpenPlace] = useState(false);
  const [openKaratedo, setOpenKaratedo] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setOpenPlace((prevState) => !prevState);
  };

  const handleKaratedoClick = () => {
    setOpenKaratedo((prevState) => !prevState);
  };

  const menus = [
    {
      text: 'ホーム',
      pathname: '/',
      icon: HomeIcon,
      testid: 'home',
    },
    {
      text: '部員紹介',
      pathname: '/member',
      icon: PeopleIcon,
      testid: 'member',
    },
    {
      text: '練習予定',
      pathname: '/schedule',
      icon: CalendarMonthIcon,
      testid: 'schedule',
    },
    {
      text: '練習メニュー・風景',
      pathname: '/galleryLinks',
      icon: CollectionsIcon,
      testid: 'galleryLinks',
    },
  ];

  return (
    <div>
      <Divider />
      <List>
        {menus.map((menu: any) => (
          <ListItemButton
            key={menu.text}
            component={Link}
            to={menu.pathname}
            selected={location.pathname === menu.pathname}
            onClick={() => setOpen(false)}
            data-testid={menu.testid}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <menu.icon />
            </ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItemButton>
        ))}
        <ListItemButton
          key="place"
          component={Link}
          to={'/place'}
          onClick={handleClick}
          selected={location.pathname === '/place'}
          data-testid="place"
        >
          <ListItemIcon onClick={() => setOpen(false)} sx={{ minWidth: 40 }}>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary="練習場所・時間" onClick={() => setOpen(false)} />
          {openPlace ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openPlace} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={() => setOpen(false)}>
            <HashLink
              smooth
              to="/place#sugimoto"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton sx={{ pl: 4 }} data-testid="sugimoto">
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary="杉本町" />
              </ListItemButton>
            </HashLink>
            <HashLink
              smooth
              to="/place#nakamozu"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton sx={{ pl: 4 }} data-testid="nakamozu">
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary="中百舌鳥" />
              </ListItemButton>
            </HashLink>
            <HashLink smooth to="/place#time" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton sx={{ pl: 4 }} data-testid="time">
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="練習時間" />
              </ListItemButton>
            </HashLink>
          </List>
        </Collapse>

        <ListItemButton
          key="karatedo"
          component={Link}
          to={'/karatedo'}
          onClick={handleKaratedoClick}
          selected={location.pathname === '/karatedo'}
          data-testid="karatedo"
        >
          <ListItemIcon onClick={() => setOpen(false)} sx={{ minWidth: 40 }}>
            <SportsMartialArtsIcon />
          </ListItemIcon>
          <ListItemText primary="空手道部紹介" onClick={() => setOpen(false)} />
          {openKaratedo ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openKaratedo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={() => setOpen(false)}>
            <ListItemButton
              component={Link}
              to={'/karatedo?open=about'}
              sx={{ pl: 4 }}
              data-testid="about"
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="空手道部について" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to={'/karatedo?open=annualEvents'}
              sx={{ pl: 4 }}
              data-testid="annualEvents"
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="年間行事" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to={'/karatedo?open=faq'}
              sx={{ pl: 4 }}
              data-testid="faq"
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary="FAQ" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          key="membersOnly"
          component={Link}
          to={'/membersOnly'}
          selected={location.pathname === '/membersOnly'}
          data-testid="membersOnly"
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="限定公開" />
        </ListItemButton>

        <Divider />
        <span onClick={() => setOpen(false)}>
          <ListItemButton
            key="links"
            component={Link}
            to={'/links'}
            selected={location.pathname === '/links'}
            data-testid="links"
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="リンク集" />
          </ListItemButton>
          <ListItemButton
            key="inquiry"
            component={Link}
            to={'/inquiry'}
            selected={location.pathname === '/inquiry'}
            data-testid="inquiry"
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="お問い合わせ" />
          </ListItemButton>

          <Divider />

          <ListItemButton
            key="privacyPolicy"
            component={Link}
            to={'/privacyPolicy'}
            selected={location.pathname === '/privacyPolicy'}
            data-testid="privacy_policy"
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PrivacyTipIcon />
            </ListItemIcon>
            <ListItemText primary="プライバシーポリシー" />
          </ListItemButton>
        </span>
      </List>
    </div>
  );
};

export default Menu;
