import { useEffect } from "react";
import { useState } from "react";
// import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    // traer los productos de firestore
    const productsCollection = collection(db, "products");
    let refCollection = productsCollection;
    if (name) {
      const productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", name)
      );
      refCollection = productsCollectionFiltered;
    }
    // filtrado en la DB
    // y luego le pedimos los documentos
    const getProducts = getDocs(refCollection);
    getProducts.then((res) => {
      let products = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      }); // []
      setMyProducts(products);
    });
  }, [name]);

  // const agregarProductos = () => {
  //   let productsCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);
  //   });
  // };

  return (
    <div>
      <h2>Aca los productos</h2>
      {/* <button onClick={agregarProductos}>Agregar productos</button> */}
      {myProducts.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PuffLoader color="steelblue" />
        </div>
      ) : (
        <ItemList myProducts={myProducts} />
      )}
      <h4>Aca el final de la pagina</h4>
    </div>
  );
};

export default ItemListContainer;
