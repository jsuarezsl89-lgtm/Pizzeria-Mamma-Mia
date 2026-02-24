import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";


const Home = () => {
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
