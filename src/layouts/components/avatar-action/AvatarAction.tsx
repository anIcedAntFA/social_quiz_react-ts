import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Avatar as MuiAvatar,
  Collapse,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Tooltip from 'src/components/Tooltip';
import { images } from 'src/constant';
import { MENU_USER_ITEMS } from '../header/header-config';

export default function AvatarAction() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ ml: 1 }}>
          <MuiAvatar alt="Remy Sharp" src={images.adminAvatar} />
        </IconButton>
      </Tooltip>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{ mt: '48px' }}
      >
        {MENU_USER_ITEMS.map((item, index) => {
          const handleClickMenuItem = () => {
            item.children ? setOpen(!open) : navigate(item.path as string);
          };
          return (
            <div key={index}>
              <MenuItem onClick={handleClickMenuItem}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
                {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
              </MenuItem>
              {item.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {item.children.map((nestedItem, index) => (
                      <MenuItem key={index} sx={{ pl: 4 }}>
                        <ListItemIcon>{nestedItem.icon}</ListItemIcon>
                        <ListItemText>{nestedItem.title}</ListItemText>
                      </MenuItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </Menu>
    </>
  );
}
