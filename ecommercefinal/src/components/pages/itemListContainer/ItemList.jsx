import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ myProducts }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {myProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
