import { Stack } from '@mui/material';

import { AvatarAction } from '../avatar-action';
import { Message } from '../message';
import { Notifications } from '../notifications';
import { ThemeMode } from '../theme-mode';

export default function LoggedInUserActions() {
  return (
    <Stack direction="row">
      <Message />
      <ThemeMode />
      <Notifications />
      <AvatarAction />
    </Stack>
  );
}
