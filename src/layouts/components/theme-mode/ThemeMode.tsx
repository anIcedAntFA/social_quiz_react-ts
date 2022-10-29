import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

import Tooltip from 'src/components/Tooltip';
import { useThemeSetting } from 'src/hooks';

export default function ThemeMode() {
  const { themeMode, onChange } = useThemeSetting();

  const isLight = themeMode === 'light';

  const handleToggleThemeModeChange = () => {
    themeMode === 'light' ? onChange('dark') : onChange('light');
  };

  return (
    <Tooltip title={isLight ? 'Dark mode' : 'Light mode'} color={isLight ? 'black' : 'orange'}>
      <IconButton color="inherit" onClick={handleToggleThemeModeChange}>
        {isLight ? <Brightness2Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
}
