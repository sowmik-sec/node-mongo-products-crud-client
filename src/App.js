import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/AddProducts";
import AddProducts from "./components/AddProducts";

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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
