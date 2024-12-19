import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("minimo 1 ");
    }
  };

  const onAdd = () => {
    let productToCart = { ...product, quantity: count };
    addToCart(productToCart);
  };

  return (
    <div className="d-flex flex-column align-items-center gap-4">
      <div className="d-flex align-items-center gap-3">
        <button 
          onClick={handleDecrement} 
          className="btn btn-primary btn-lg fw-bold px-4"
        >
          -
        </button>
        <h2 className="mb-0 fs-1">{count}</h2>
        <button 
          onClick={handleIncrement} 
          className="btn btn-primary btn-lg fw-bold px-4"
        >
          +
        </button>
      </div>
      <button 
        className="btn btn-primary btn-lg px-4"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;