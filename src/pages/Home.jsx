import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <main>
      <Header />
      <div className="catalogo-pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
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
