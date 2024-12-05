import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from '../src/Styles/GlobalStyles';
import Login from "../src/Container/Login"
//import Home from "../src/Container/Home"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Login/>      
  </StrictMode>,
)
