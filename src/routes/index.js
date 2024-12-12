import { createBrowserRouter } from "react-router-dom";
import Login from '../Container/Login/index.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
])
