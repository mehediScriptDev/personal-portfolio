import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Err from './Components/Err.jsx';
import 'animate.css';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Err></Err>
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
