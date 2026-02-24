import "../styles/Cart.css";
import { formatPrice } from "../utils/formatPrice";

const CartPizza = ({ pizza, increase, decrease }) => {
  const { id, name, price, img, count } = pizza;

  return (
    <div className="cart-row">
      <div className="cart-product">
        <img src={img} alt={name} className="cart-img" />
        <span>{name}</span>
      </div>

      <div className="cart-price">${formatPrice(price)}</div>

      <div className="cart-quantity">
        <button onClick={() => decrease(id)}>-</button>
        <span>{count}</span>
        <button onClick={() => increase(id)}>+</button>
      </div>

      <div className="cart-subtotal">${formatPrice(price * count)}</div>
    </div>
  );
};

export default CartPizza;
