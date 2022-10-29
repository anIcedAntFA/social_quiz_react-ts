import { useContext } from 'react';

import { SettingContext } from '../contexts/SettingContext';

export default function useThemeSetting() {
  const context = useContext(SettingContext);

  if (!context) throw new Error('Setting context must be use inside SettingProvider');
  return context;
}
