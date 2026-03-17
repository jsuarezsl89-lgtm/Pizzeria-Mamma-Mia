import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children, redirectIfLogged }) => {
  const { token } = useContext(UserContext);

  // Si hay token y la ruta es solo para no logueados (login/register) → redirige a home
  if (token && redirectIfLogged) {
    return <Navigate to="/" />;
  }

  // Si no hay token y la ruta es protegida (profile) → redirige a login
  if (!token && !redirectIfLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
