import React from 'react';
import { ThemeProvider } from "styled-components";
import AppRouter from "./views/AppRouter";

const theme = {
  primaryColor: "rgba(195,157,24,0.85)",
  secondaryColor: "#851e3e",
  thirdColor: "#031022"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
