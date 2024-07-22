import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";
import { Normalize } from "styled-normalize";
import { SnackProvider } from "./contexts/SnackContext";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
