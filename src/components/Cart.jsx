import { useState } from "react";
import { pizzaCart as initialCart } from "../pizzas";
import CartPizza from "./CartPizza";
import { formatPrice } from "../utils/formatPrice";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  // Aumentar cantidad
  const increase = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza,
    );
    setCart(updatedCart);
  };

  // Disminuir cantidad
  const decrease = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza,
      )
      .filter((pizza) => pizza.count > 0); // elimina si llega a 0

    setCart(updatedCart);
  };

  // Calcular total
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="cartPizza">
      <div className="cart-header">
        <div>Producto</div>
        <div>Precio</div>
        <div>Cantidad</div>
        <div>Subtotal</div>
      </div>

      {cart.map((pizza) => (
        <CartPizza
          key={pizza.id}
          pizza={pizza}
          increase={increase}
          decrease={decrease}
        />
      ))}

      <div className="cart-footer">
        <h2>Total: ${formatPrice(total)}</h2>
        <button className="pay-btn">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
