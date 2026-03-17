import "../styles/CardPizza.css";
import { formatPrice } from "../utils/formatPrice";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ img, nombre, ingredientes, precio, desc, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name: nombre, price: precio, img });
  };

  return (
    <article className="card-pizza">
      <img src={img} alt={nombre} className="card-pizza-img" />
      <h4>{nombre}</h4>
      <p>{desc}</p>
      <hr />
      <p>
        <b>Ingredientes:</b>
      </p>
      <ul className="card-pizza-ingredientes">
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>* {ingrediente}</li>
        ))}
      </ul>
      <hr />
      <p className="precio">
        <b>Precio: </b>${formatPrice(precio)}
      </p>
      <div className="botones">
        <Link className="btn-vermas" to={`/pizza/${id}`}>
          Ver más
          <FaEye />
        </Link>
        <a className="btn-añadir" onClick={handleAddToCart}>
          Añadir
          <FaShoppingCart />
        </a>
      </div>
    </article>
  );
};

export default CardPizza;
