import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, IconButton } from '@mui/material';
import Tooltip from 'src/components/Tooltip';

export default function Notifications() {
  return (
    <Tooltip title="Notifications">
      <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="primary">
          <NotificationsNoneIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}
