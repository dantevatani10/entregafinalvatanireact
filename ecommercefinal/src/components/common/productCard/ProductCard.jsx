import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.img}
        alt={product.title}
        className="card-img-top img-fluid"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="h5 mb-0">${product.price}</span>
          <Link
            to={`/itemDetail/${product.id}`}
            className="btn btn-primary"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
