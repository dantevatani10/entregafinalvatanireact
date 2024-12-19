import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

console.log("CartWidget component:", CartWidget);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-keyboard-fill me-2"></i>
          TechStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link 
                className="nav-link fs-5 mx-2" 
                to="/category/celular"
              >
                Celulares
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fs-5 mx-2"
                to="/category/computadora"
              >
                Computadoras
              </Link>
            </li>
          </ul>

          <div className="ms-lg-3">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
