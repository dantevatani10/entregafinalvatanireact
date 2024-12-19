import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ myProducts }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {myProducts.map((product) => (
        <div key={product.id} className="col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;

