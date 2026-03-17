import CartPizza from "../components/CartPizza";
import { formatPrice } from "../utils/formatPrice";
import "../styles/Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, decreaseFromCart, getTotal } =
    useContext(CartContext);
  const { token } = useContext(UserContext);
  const [mensajeExito, setMensajeExito] = useState("");

  const increase = (id) => {
    const pizza = cart.find((item) => item.id === id);
    addToCart(pizza);
  };

  const decrease = (id) => {
    decreaseFromCart(id);
  };

  const handlePagar = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });
    const data = await response.json();
    if (response.ok) {
      setMensajeExito("¡Compra realizada con éxito! 🍕");
    }
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
        <button className="pay-btn" disabled={!token} onClick={handlePagar}>
          Pagar
        </button>
      </div>
      {mensajeExito && (
        <p style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>
          {mensajeExito}
        </p>
      )}
    </div>
  );
};

export default Cart;
