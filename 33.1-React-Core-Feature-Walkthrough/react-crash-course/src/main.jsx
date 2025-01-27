import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./components/RootLayout.jsx";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />, loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
