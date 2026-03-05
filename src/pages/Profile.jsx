const Profile = () => {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h2>Perfil de usuario</h2>
      <p>Email: correo@correo.com</p>
      <button
        className="btn btn-primary"
        style={{ width: "10rem", whiteSpace: "nowrap" }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
