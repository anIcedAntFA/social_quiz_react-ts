import { Theme, Palette } from '@mui/material';
export interface ICustomShadows {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  //
  primary: string;
  info: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
}
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['secondary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['secondary'];
  }

  interface Theme {
    customShadows: ICustomShadows;
  }

  interface ThemeOptions {
    customShadows?: ICustomShadows;
  }
}
