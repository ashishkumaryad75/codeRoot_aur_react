import React, { useReducer, useState } from "react";
import { createContext } from "react";

const UserProgressContext = createContext({
  progess: "", // cart , checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});


export function UserProgressContextProvider({ children }) {
  const [useProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("cart");
    console.log('hideCart');
    
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
      setUserProgress("checkout");
  }

  const useProgressCtx = {
    progess: useProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={useProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
