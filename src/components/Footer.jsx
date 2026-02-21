const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="sucursales">
          <h6>SUCURSALES</h6>
          <a href="#!">Ñuñoa</a>
          <a href="#!">Providencia</a>
          <a href="#!">Vitacura</a>
        </div>

        <div className="contacto">
          <h6>CONTACTO</h6>
          <a href="#!">+569 9988 7744</a>
          <a href="#!">correo@correo.com</a>
          <a href="#!">Formulario</a>
        </div>

        <div className="politicas">
          <h6>POLÍTICAS</h6>
          <a href="#!">Privacidad</a>
          <a href="#!">Envíos y Reembolso</a>
          <a href="#!">Términos del servicio</a>
        </div>
      </div>
      <hr />
      <div className="bottom-footer">
        <p> © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
        <p> Sitio desarrollado por ProWeb J.Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
