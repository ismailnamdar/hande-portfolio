import React from 'react';
import { ThemeProvider } from "styled-components";
import AppRouter from "./views/AppRouter";
import {theme} from "./constants";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
