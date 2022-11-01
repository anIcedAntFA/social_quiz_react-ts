import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  AppRegistrationIcon,
  ExpandLess,
  ExpandMore,
  LoginIcon,
  MoreVertIcon,
} from 'src/components/Icons';
import { PATH_AUTH } from 'src/routes/path';
import { MENU_ITEMS } from '../header/header-config';

export default function UserActions() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={Link}
        to={PATH_AUTH.register}
        variant="outlined"
        startIcon={<AppRegistrationIcon />}
      >
        Register
      </Button>
      <Button component={Link} to={PATH_AUTH.login} variant="contained" startIcon={<LoginIcon />}>
        Login
      </Button>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
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
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: '48px' }}
      >
        {MENU_ITEMS.map((item, index) => {
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
    </Stack>
  );
}
