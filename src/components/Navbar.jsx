import "../styles/Navbar.css";
import logo from "../assets/img/Mamma Mía.jpg";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div className="div-header">
      <img src={logo} alt="Mamma Mía" className="logo" />
      <nav>
        <Link to="/">
          <button className="btn btn-primary">🍕 Home</button>
        </Link>

        {token ? (
          <>
            <Link to="/profile">
              <button className="btn btn-primary">🔓 Profile</button>
            </Link>
            <button className="btn btn-primary">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-primary">🔐 Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary">🔐 Register</button>
            </Link>
          </>
        )}

        <Link to="/cart">
          <button className="btn btn-total">
            🛒 Total: ${formatPrice(total)}
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
