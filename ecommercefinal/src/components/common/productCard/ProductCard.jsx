import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm rounded" style={{ width: "300px", height: "450px", overflow: "hidden" }}>
      <div style={{ height: "300px" }}>
        <img
          src={product.img}
          alt={product.title}
          className="card-img-top"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between" style={{ height: "150px" }}>
        <h5 className="card-title text-truncate">{product.title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">${product.price}</span>
          <Link
            to={`/itemDetail/${product.id}`}
            className="btn btn-primary btn-sm"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;