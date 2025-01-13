import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";

function App() {
  // const routeDefenition = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/products" element={<ProductPage />} />
  //   </Route>
  // );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "products", element: <ProductPage /> },
        { path: "products/:productId", element: <ProductDetailsPage /> },
      ],
    },
  ]);

  // const router = createBrowserRouter(routeDefenition);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
