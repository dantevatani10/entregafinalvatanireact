import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useCart } from "../../../context/CartContext";
import { Toast } from 'react-bootstrap';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="container mt-5 position-relative">
      <Toast 
        show={showToast} 
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Carrito actualizado</strong>
        </Toast.Header>
        <Toast.Body>Se ha añadido {quantity} {quantity === 1 ? 'unidad' : 'unidades'} de {product.title} al carrito.</Toast.Body>
      </Toast>
      <div className="row">
        <div className="col-md-6">
          <img src={product.img} alt={product.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.title}</h2>
          <p className="mb-2"><strong>Marca:</strong> {product.marca}</p>
          <p className="mb-2"><strong>Stock disponible:</strong> {product.stock} unidades</p>
          <h4 className="mb-3">Precio: ${product.price}</h4>
          <div className="d-flex align-items-center mb-4">
            <select 
              className="form-select me-3" 
              style={{width: "auto"}}
              value={quantity} 
              onChange={handleQuantityChange}
            >
              {[...Array(Math.min(10, product.stock || 0)).keys()].map(num => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="mb-3">Descripción del producto</h3>
          <p className="lead">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

