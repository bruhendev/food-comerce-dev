import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";
import { Normalize } from "styled-normalize";
import { SnackProvider } from "./contexts/SnackContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
            <AppRoutes />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
