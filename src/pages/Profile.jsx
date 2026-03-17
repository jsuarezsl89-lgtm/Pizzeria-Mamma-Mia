import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

const handleLogout = () => {
  navigate("/");
  logout();
};

  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h2>Perfil de usuario</h2>
      <p>Email: {email}</p>
      <button
        className="btn btn-primary"
        style={{ width: "10rem", whiteSpace: "nowrap" }}
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
