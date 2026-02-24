import "../styles/CardPizza.css"
import { formatPrice } from "../utils/formatPrice";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const CardPizza = ({ img, nombre, ingredientes, precio, desc }) => {
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
        <a className="btn-vermas" href="#!">
          Ver más
          <FaEye />
        </a>
        <a className="btn-añadir" href="#!">
          Añadir
          <FaShoppingCart />
        </a>
      </div>
    </article>
  );
};

export default CardPizza;
