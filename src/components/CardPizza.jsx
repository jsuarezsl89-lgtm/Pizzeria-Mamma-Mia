import "../styles/CardPizza.css"
import { formatPrice } from "../utils/formatPrice";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const CardPizza = ({ img, nombre, tamaño, ingredientes, precio }) => {
  return (
    <article className="card-pizza">
      <img src={img} alt={nombre} className="card-pizza-img" />
      <h4>{nombre}</h4>
      <p>
        <b>Tamaño: </b>
        {tamaño}
      </p>
      <hr />
      <p>
        <b>Ingredientes:</b>
      </p>
      <div className="card-pizza-ingredientes">
        {ingredientes.map((ingrediente) => (
          <p>{ingrediente}</p>
        ))}
      </div>
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
