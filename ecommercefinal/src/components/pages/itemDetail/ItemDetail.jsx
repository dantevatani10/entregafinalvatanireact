import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../../../products";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    const getDocById = getDoc(refDoc);
    getDocById.then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt="" />
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
