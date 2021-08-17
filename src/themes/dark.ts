import { createTheme } from "@material-ui/core/styles";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    neutral: {
      main: '#5c6ac4',
    },
  },
});

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

declare module '@material-ui/core/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}