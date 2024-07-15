import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";
import { Normalize } from "styled-normalize";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
