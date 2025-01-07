import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgress.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals /><Cart/>
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
