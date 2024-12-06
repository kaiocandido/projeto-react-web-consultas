import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from '../src/Styles/GlobalStyles';
//import Login from "../src/Container/Login"
//import Home from "../src/Container/Home"
//import Register from './Container/Register';
import Terms from "./Container/Terms"
//import RegisterNameUser from "./Container/RegisterNameUser"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Terms/>      
  </StrictMode>,
)
