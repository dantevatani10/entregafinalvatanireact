import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // {3} {5} {4} --> 12

  // const addToCart = (product) => {
  //   // si esta , que no lo agregue
  //   // si no esta, que si lo agregue
  //   // let isInCart = cart.filter ( el => el.id === product.id ) // []
  //   // let isInCart = cart.find( el => el.id === product.id ) // elemento || undefined
  //   let isInCart = cart.some((el) => el.id === product.id); // booleano

  //   if (isInCart) {
  //     console.log("se ejecuta el if");
  //     // generar un nuevo array, igual que el anterior pero con un { } modificado
  //     // con ese array remplazar el anteriror

  //     let nuevoArray = cart.map((elemento) => {
  //       if (elemento.id === product.id) {
  //         return {
  //           ...elemento,
  //           quantity: elemento.quantity + product.quantity,
  //         };
  //       } else {
  //         return elemento;
  //       }
  //     }); // [{}{}{}]

  //     setCart(nuevoArray);
  //   } else {
  //     console.log("se ejecuta el else");
  //     setCart([...cart, product]);
  //   }
  // };
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    let filteredArray = cart.filter((elemento) => elemento.id !== id);
    setCart(filteredArray);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((total, elemento) => {
      return total + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  let data = { cart, addToCart, resetCart, removeProduct, getTotalPrice };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
