import "./header.css";
import Sidebar from "../sidebar/sidebar";

function Header(props) {
  return (
    <div>
        <Sidebar />
      <div className="containerHeader">
        <div className="h-100 py-5">
          <h1 className="titleHeader">Ventas</h1>
          <hr
            style={{
              border: "white 1px dashed",
              opacity: "0.8",
              background: "none",
              margin: "0px 16rem 0px 16rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
