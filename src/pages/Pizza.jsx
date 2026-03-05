import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data));
  }, []);

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
        <strong>Precio:</strong> ${pizza.price}
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
