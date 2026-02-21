import "../styles/Navbar.css";
import logo from '../assets/img/Mamma Mía.jpg';
import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
  const total = 25000;
  const token = false;

  

  return (
    <div className="div-header">
      <img src={logo} alt="Mamma Mía" className="logo" />
      <nav>
        <button className="btn btn-primary">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-primary">🔓 Profile</button>
            <button className="btn btn-primary">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-primary">🔐 Login</button>
            <button className="btn btn-primary">🔐 Register</button>
          </>
        )}

        <button className="btn btn-total">
          🛒 Total: ${formatPrice(total)}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
