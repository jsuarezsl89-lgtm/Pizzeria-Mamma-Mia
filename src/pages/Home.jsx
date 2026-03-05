import { useState, useEffect } from "react";
import Header from "../components/Header";      
import CardPizza from "../components/CardPizza"; 

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <main>
      <Header />
      <div className="catalogo-pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            nombre={pizza.name}
            precio={pizza.price}
            img={pizza.img}
            ingredientes={pizza.ingredients}
            desc={pizza.desc}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
