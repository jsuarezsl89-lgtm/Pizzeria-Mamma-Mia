import Header from "./Header";
import CardPizza from "./CardPizza";



const Home = () => {
  return (
    <main>
      <Header />
      <div className="catalogo-pizzas">
        <CardPizza
          img="/src/assets/img/pizzas/pepperoni.png"
          nombre="Pepperoni"
          tamaño="Familiar"
          ingredientes={["Queso", "Pepperoni"]}
          precio={15000}
        />
        <CardPizza
          img="/src/assets/img/pizzas/margarita.png"
          nombre="Margarita"
          tamaño="Familiar"
          ingredientes={["Queso", "Jamón", "Chorizillo"]}
          precio={12000}
        />
        <CardPizza
          img="/src/assets/img/pizzas/hawaina.png"
          nombre="Hawaiana"
          tamaño="Familiar"
          ingredientes={["Queso", "Jamón", "Piña"]}
          precio={13000}
        />
      </div>
    </main>
  );
};

export default Home;
