function NavbarResponsive() {
  return (
    <div className="navResponsive">
      <div className="hamburguesa">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="ulResponsive">
        <li className="liNav">
          <a href="index.html">Inicio</a>
        </li>
        <li className="liNav">
          <a href="pages/accesoRegistro.html">Acesso/Registo</a>
        </li>
        <li className="liNav">
          <a href="pages/categorias.html">Categorias</a>
        </li>
        <li className="liNav">
          <a href="pages/contacto.html">Contacto</a>
        </li>
        <li className="liNav">
          <a href="pages/compras.html">
            Mi carrito{" "}
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavbarResponsive;
