import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "6rem", color: "#e63946" }}>404</h1>
      <h2>¡Página no encontrada!</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        style={{
          backgroundColor: "#e63946",
          color: "#fff",
          padding: "0.7rem 1.5rem",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
