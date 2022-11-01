import { IconButton } from '@mui/material';
import { TelegramIcon } from 'src/components/Icons';

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
