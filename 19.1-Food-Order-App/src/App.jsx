import React from "react";
import Header from "./components/Header";
import Meals from "./Meals";
import { CartContextProvider } from "./store/CartContext.jsx";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;
