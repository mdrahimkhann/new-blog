
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// THIS IS MY REACT ROUTER LINK
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// THIS IS MY REACT ROUTER LINK
// THIS IS MY ALL PAGES  START HERE
// import Home from'./pages/Home'
import Home from'./pages/Home'
import Header from'./pages/Header'
import Contact from'./pages/Contact'
import Profile from'./pages/Profile'
import About from'./pages/About'
import Products from'./pages/Products'
import Signin from'./pages/Signin'




// THIS IS MY ALL PAGES  END HERE





const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,

    children:[
    
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/Products",
        element:<Products/>,
      },
   
      {
        path: "/Contact",
        element:<Contact/>,
      },
      {
        path: "/Profile",
        element:<Profile/>,
      },
      {
        path: "/About",
        element:<About/>,
      },

   
      {
        path: "/Signin",
        element:<Signin />,
      },
   
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)







