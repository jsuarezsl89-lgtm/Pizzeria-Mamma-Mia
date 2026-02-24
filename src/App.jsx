import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
/* import Home from "./components/Home"; */
import Cart from "./components/Cart";
/* import Register from "./components/Register"; */
/* import Login from "./components/Login"; */


function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      {/*  <Home /> */}
      {/*  <main>
        <Register />
      </main> */}
      {/*   <main>
        <Login />
      </main> */}
      <main >
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
