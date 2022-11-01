import {
  ContactSupportIcon,
  EnglishIcon,
  HelpOutlineIcon,
  HomeIcon,
  InfoIcon,
  LanguageIcon,
  LogoutIcon,
  MilitaryTechIcon,
  PersonOutlineIcon,
  SettingsIcon,
  VietnameseIcon,
} from 'src/components/Icons';

import { PATH_PAGE, PATH_USER } from 'src/routes/path';

interface IMenuItemsProps {
  title: string;
  icon?: JSX.Element;
  path?: string;
  onClick?: () => void;
  children?: IMenuItemsProps[];
}

export const NAV_LINKS: IMenuItemsProps[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    path: PATH_PAGE.root,
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    path: PATH_PAGE.settings,
  },
  {
    title: 'Ranking',
    icon: <MilitaryTechIcon />,
    path: PATH_PAGE.ranking,
  },
  {
    title: 'About',
    icon: <InfoIcon />,
    path: PATH_PAGE.about,
  },
  {
    title: 'Contact',
    icon: <ContactSupportIcon />,
    path: PATH_PAGE.contact,
  },
];

export const MENU_ITEMS: IMenuItemsProps[] = [
  {
    title: 'Languages',
    icon: <LanguageIcon />,
    children: [
      {
        title: 'English',
        icon: <EnglishIcon />,
      },
      {
        title: 'Vietnamese',
        icon: <VietnameseIcon />,
      },
    ],
  },
  {
    title: 'Feedback and help',
    icon: <HelpOutlineIcon />,
    path: PATH_PAGE.feedback,
  },
];

export const MENU_USER_ITEMS: IMenuItemsProps[] = [
  {
    title: 'View profile',
    icon: <PersonOutlineIcon />,
    path: PATH_USER.profile,
  },
  {
    title: 'Languages',
    icon: <LanguageIcon />,
    children: [
      {
        title: 'English',
        icon: <EnglishIcon />,
      },
      {
        title: 'Vietnamese',
        icon: <VietnameseIcon />,
      },
    ],
  },
  {
    title: 'Feedback and help',
    icon: <HelpOutlineIcon />,
    path: PATH_PAGE.feedback,
  },
  {
    title: 'Log out',
    icon: <LogoutIcon />,
    onClick: () => console.log('logout'),
  },
];
