import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { formatPrice } from "../utils/formatPrice";

const Pizza = () => {
  const { id } = useParams();
  const { pizza, getPizza } = useContext(PizzaContext);

  useEffect(() => {
    getPizza(id);
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      <h2>{pizza.name}</h2>
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <p>{pizza.desc}</p>
      <p>
        <strong>Precio:</strong> ${formatPrice(pizza.price)}
      </p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button>Añadir al carrito</button>
    </main>
  );
};

export default Pizza;
