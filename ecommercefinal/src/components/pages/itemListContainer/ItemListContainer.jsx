import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { PuffLoader } from "react-spinners";
import { db } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState("");

  const { name } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let refCollection = productsCollection;

    if (name) {
      refCollection = query(productsCollection, where("category", "==", name));
    }

    if (selectedMarca) {
      refCollection = query(refCollection, where("marca", "==", selectedMarca));
    }

    const getProducts = getDocs(refCollection);
    getProducts.then((res) => {
      let products = res.docs.map((elemento) => ({
        ...elemento.data(),
        id: elemento.id,
      }));
      setMyProducts(products);

      // Extraer marcas únicas
      const uniqueMarcas = [...new Set(products.map((product) => product.marca))];
      setMarcas(uniqueMarcas);
    });
  }, [name, selectedMarca]);

  const handleMarcaChange = (e) => {
    setSelectedMarca(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nuestros Productos</h2>
      <div className="mb-4">
        <select
          className="form-select"
          value={selectedMarca}
          onChange={handleMarcaChange}
        >
          <option value="">Todas las Marcas</option>
          {marcas.map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>
      {myProducts.length === 0 ? (
        <div className="d-flex justify-content-center">
          <PuffLoader color="steelblue" />
        </div>
      ) : (
        <ItemList myProducts={myProducts} />
      )}
    </div>
  );
};

export default ItemListContainer;

