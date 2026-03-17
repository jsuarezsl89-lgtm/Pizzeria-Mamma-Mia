import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <PizzaProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PizzaProvider>
    </CartProvider>
  </StrictMode>,
);
