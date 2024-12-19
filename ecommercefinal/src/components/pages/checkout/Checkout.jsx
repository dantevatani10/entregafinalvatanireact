import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalPrice, resetCart } = useContext(CartContext);
  const [userData, setUserData] = useState({
    nombre: "",
    userEmail: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const capturarDatos = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const funcionDelFormulario = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");
    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {orderId ? (
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center p-5">
                <div className="mb-4">
                  <i className="bi bi-check-circle text-success fs-1"></i>
                </div>
                <h2 className="mb-4">¡Gracias por tu compra!</h2>
                <p className="text-muted mb-4">Tu número de orden es:</p>
                <div className="bg-light p-3 rounded mb-4">
                  <code className="fs-5">{orderId}</code>
                </div>
                <p className="text-muted">Guarda este número para seguimiento</p>
              </div>
            </div>
          ) : (
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4">Finalizar Compra</h2>
                <form onSubmit={funcionDelFormulario}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre completo</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingresa tu nombre"
                      onChange={capturarDatos}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="userEmail"
                      name="userEmail"
                      placeholder="tu@email.com"
                      onChange={capturarDatos}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="telefono"
                      name="telefono"
                      placeholder="Tu número de teléfono"
                      onChange={capturarDatos}
                      required
                    />
                  </div>
                  
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Confirmar Compra
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;