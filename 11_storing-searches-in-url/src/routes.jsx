import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./Store";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/store", element: <Store /> },
]);

export default router;
