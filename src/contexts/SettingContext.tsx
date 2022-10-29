import { createContext, ReactElement, useEffect, useState } from 'react';

import { useLocalStorage } from 'src/hooks';

interface IInitialState {
  themeMode: string;
  onChange: (mode: string) => void;
}

type SettingProviderProps = {
  children: ReactElement;
};

const initialState: IInitialState = {
  themeMode: 'light',
  onChange: () => {},
};

export const SettingContext = createContext(initialState);

export default function SettingContextProvider({ children }: SettingProviderProps) {
  const [themeMode, setThemeMode] = useLocalStorage<string>('theme-mode', 'light');

  const [theme, setTheme] = useState<string>('');

  const handleChangeTheme = (mode: string) => {
    setThemeMode(mode);
  };

  useEffect(() => setTheme(themeMode), [themeMode]);

  return (
    <SettingContext.Provider value={{ themeMode: theme, onChange: handleChangeTheme }}>
      {children}
    </SettingContext.Provider>
  );
}
