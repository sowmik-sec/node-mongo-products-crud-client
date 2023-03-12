import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/AddProducts";
import AddProducts from "./components/AddProducts";
import Update from "./components/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => fetch(`http://localhost:5000/products`),
    },
    {
      path: "/products/add",
      element: <AddProducts />,
    },
    {
      path: "/update/:id",
      element: <Update />,
      loader: ({ params }) =>
        fetch(`http://localhost:5000/products/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
