import "../styles/Login.css";
import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || contraseña === "") {
      setMensajeError("Todos los campos son obligatorios");
      setMensajeExito("");
    } else if (contraseña.length < 6) {
      setMensajeError("La contraseña debe tener al menos 6 caracteres");
      setMensajeExito("");
    } else {
      const data = await login(email, contraseña);
      if (data.token) {
        setMensajeExito("¡Login correcto!");
        setMensajeError("");
        navigate("/");
      } else {
        setMensajeError("Email o contraseña incorrectos");
        setMensajeExito("");
      }
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="input-password">
          <input
            type={mostrarContraseña ? "text" : "password"}
            placeholder="Contraseña"
            onChange={(e) => setContraseña(e.target.value)}
          />
          <span onClick={() => setMostrarContraseña(!mostrarContraseña)}>
            {mostrarContraseña ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <button type="submit">Enviar</button>
        <p className="mensajeError">{mensajeError}</p>
        <p className="mensajeExito">{mensajeExito}</p>
      </form>
    </div>
  );
};

export default Login;
