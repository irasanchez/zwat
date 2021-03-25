import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../assets/theme';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}
