import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/themes/darkTheme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
