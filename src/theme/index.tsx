import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material';
import { ReactElement, ReactNode, useMemo } from 'react';
import { useThemeSetting } from '../hooks';
import breakpoints from './breakpoint';
import overridesComponents from './overrides';
import paletteMode from './pallette';
import shadows, { customShadows } from './shadow';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
  const { themeMode } = useThemeSetting();
  const isLight: boolean = themeMode === 'light';

  const themeOption: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? paletteMode.light : paletteMode.dark,
      breakpoints: breakpoints,
      // typography: typography,
      shape: {
        borderRadius: 8,
      },
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight],
  );

  const theme = createTheme(themeOption);
  theme.components = overridesComponents(theme);

  return (
    <>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </>
  );
}
