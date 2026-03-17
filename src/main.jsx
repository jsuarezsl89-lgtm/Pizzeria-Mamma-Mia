import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </CartProvider>
  </StrictMode>,
);
