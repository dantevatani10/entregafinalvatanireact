import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          {/* RUTAS  */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
