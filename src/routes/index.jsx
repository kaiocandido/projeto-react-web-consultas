import { createBrowserRouter } from "react-router-dom";
import Login from "../Container/Login/index.jsx";
import  Register from '../Container/Register/index.jsx'
import RegisterNameUser from '../Container/RegisterNameUser'
import Terms from '../Container/Terms/index.jsx'

export const router = createBrowserRouter([
  {
    path: "/", // Rota para a página inicial (login)
    element: <Login />,
  },
  {
    path: "/register", 
    element: <Register />,
  },
  {
    path: "/infos", 
    element: <RegisterNameUser />,
  },
  {
    path: "/terms", 
    element: <Terms />,
  },

  
]);