import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  
  return (
    <CartContextProvider>
      {/* <CartContext.Provider> // working before React 19. */}
      {/* <CartContext value={ctxValue}> */}
        <Header
          // cart={shoppingCart}
          // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product}/>
            </li>
          ))}
        </Shop>
      {/* </CartContext> */}
    </CartContextProvider>
  );
}

export default App;
