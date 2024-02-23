'use client';

import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const MuiThemeWrapper = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00F0FF',
        dark: '#1766FF',
      },
      secondary: {
        light: '#9E8FFF',
        main: '#995AFF',
        dark: '#15023D',
      },
      background: {
        default: '#130B2F',
      },
    },
    typography: {
      fontFamily: 'DM Sans, sans-serif', // Set default font
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: 0, // Disable minimum width for buttons
            textTransform: 'none', // Disable auto-capitalization of button text
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none', // Disable auto-capitalization of tab text
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeWrapper;
