import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton } from '@mui/material';
import Tooltip from 'src/components/Tooltip';

export default function Message() {
  return (
    <Tooltip title="Message">
      <IconButton size="large" aria-label="" color="inherit">
        <TelegramIcon />
      </IconButton>
    </Tooltip>
  );
}
