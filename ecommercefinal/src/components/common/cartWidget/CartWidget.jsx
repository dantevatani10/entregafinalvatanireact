import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const CartWidget = () => {
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();

  return (
    <Link
      to="/cart"
      className="d-inline-flex align-items-center position-relative text-decoration-none text-light p-2"
    >
      <i className="bi bi-cart fs-4"></i>
      {itemCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {itemCount}
          <span className="visually-hidden">items in cart</span>
        </span>
      )}
    </Link>
  );
};

export default CartWidget;

