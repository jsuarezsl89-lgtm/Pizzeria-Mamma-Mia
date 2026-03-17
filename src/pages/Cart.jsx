import CartPizza from "../components/CartPizza";
import { formatPrice } from "../utils/formatPrice";
import "../styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, decreaseFromCart, getTotal } =
    useContext(CartContext);
  const { token } = useContext(UserContext);

  const increase = (id) => {
    const pizza = cart.find((item) => item.id === id);
    addToCart(pizza);
  };

  const decrease = (id) => {
    decreaseFromCart(id);
  };

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
        <h2>Total: ${formatPrice(getTotal())}</h2>
        <button className="pay-btn" disabled={!token}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
