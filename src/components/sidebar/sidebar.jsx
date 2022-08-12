import "./sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";
import Logo from "../../assets/1.png";
function Sidebar() {
  return (
    <div>
      <nav className="menu">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          {/* <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" /> */}
          <h2>Logo</h2>
        </header>
        <ul>
          <div className="logoStore">
            <img src={Logo} alt="" />
          </div>
          <li className="icon-dashboard">
            <span className="px-2 align-bottom material-symbols-outlined">
              Home
            </span>
            <b>Home</b>
          </li>
          <li className="icon-customers">
            <span className="px-2 align-bottom material-symbols-outlined">
              groups
            </span>
            <b>Clientes</b>
          </li>
          <li className="icon-users">
            <span className="px-2 align-bottom material-symbols-outlined">
              shopping_basket
            </span>
            <b>Ventas</b>
          </li>
          <li className="icon-settings">
            <span className="px-2 align-bottom material-symbols-outlined">
              receipt_long
            </span>
            <b>Compras</b>
          </li>
          <li className="icon-settings">
            <span className="px-2 align-bottom material-symbols-outlined">
              payments
            </span>
            <b>Caja</b>
          </li>
          <li className="icon-settings">
            <span className="px-2 align-bottom material-symbols-outlined">
              inventory_2
            </span>
            <b>Inventario</b>
          </li>
          <li className="icon-settings">
            <span className="px-2 align-bottom material-symbols-outlined">
              sell
            </span>
            <b>Productos</b>
          </li>
          <li className="icon-settings">
            <span className="px-2 align-bottom material-symbols-outlined">
              monitoring
            </span>
            <b>Reportes</b>
          </li>
          x
        </ul>
      </nav>
    </div>
  );
}
export default Sidebar;
