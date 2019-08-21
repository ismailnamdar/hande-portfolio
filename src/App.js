import React from 'react';
import { ThemeProvider } from "styled-components";
import AppRouter from "./views/AppRouter";

const theme = {
  primaryColor: "rgb(243,60,67)",
  secondaryColor: "#F5BB06",
  thirdColor: "#fffff6",
  fourthColor: "#011f4b"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
