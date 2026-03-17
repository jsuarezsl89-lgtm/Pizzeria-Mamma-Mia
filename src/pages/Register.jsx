import "../styles/Register.css";
import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || contraseña === "" || confirmarContraseña === "") {
      setMensaje("Todos los campos son obligatorios");
      setMensajeExito("");
    } else if (contraseña.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      setMensajeExito("");
    } else if (contraseña !== confirmarContraseña) {
      setMensaje("Las contraseñas no coinciden");
      setMensajeExito("");
    } else {
      const data = await register(email, contraseña);
      if (data.token) {
        setMensajeExito("¡Registro exitoso!");
        setMensaje("");
        navigate("/");
      } else {
        setMensaje("Error al registrar el usuario");
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
        <div className="input-password">
          <input
            type={mostrarConfirmar ? "text" : "password"}
            placeholder="Confirmar contraseña"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
          />
          <span onClick={() => setMostrarConfirmar(!mostrarConfirmar)}>
            {mostrarConfirmar ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <button type="submit">Enviar</button>
        <p className="mensaje">{mensaje}</p>
        <p className="mensajeExito">{mensajeExito}</p>
      </form>
    </div>
  );
};

export default Register;
