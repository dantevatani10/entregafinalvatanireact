import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrice } = useContext(CartContext);
  let totalAmount = getTotalPrice();

  return (
    <div className="container py-5">
      <h1 className="mb-4">Mi Carrito</h1>

      {cart.length > 0 ? (
        <div className="row">
          <div className="col-lg-8">
            {cart.map((elemento) => (
              <div 
                key={elemento.id} 
                className="card mb-3 border-0 shadow-sm"
              >
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h5 className="card-title mb-3">{elemento.title}</h5>
                      <div className="text-muted mb-2">
                        Cantidad: <span className="fw-bold">{elemento.quantity}</span>
                      </div>
                      <div className="fs-5">
                        ${elemento.price * elemento.quantity}
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                      <button 
                        onClick={() => removeProduct(elemento.id)}
                        className="btn btn-outline-danger"
                      >
                        <i className="bi bi-trash me-2"></i>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Resumen de compra</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Total</span>
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </div>
                <div className="d-grid gap-2">
                  <Link 
                    to="/checkout" 
                    className="btn btn-primary btn-lg"
                  >
                    Finalizar compra
                  </Link>
                  <button 
                    onClick={resetCart} 
                    className="btn btn-outline-secondary"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-cart-x fs-1 text-muted mb-3"></i>
          <h2 className="mb-4">Tu carrito está vacío</h2>
          <Link to="/" className="btn btn-primary">
            Seguir comprando
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;