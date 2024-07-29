import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";
import { Normalize } from "styled-normalize";
import { SnackProvider } from "./contexts/SnackContext";
import { CartProvider } from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
            <AppRoutes />
            <GlobalStyle />
            <ToastContainer autoClose={2000} />
            <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
