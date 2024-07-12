import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
