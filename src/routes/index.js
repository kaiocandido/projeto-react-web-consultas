import { createBrowserRouter } from "react-router-dom";
import Login from "../Container/Login";
import Home from "../Container/Home";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);
