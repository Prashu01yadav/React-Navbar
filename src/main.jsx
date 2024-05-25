import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './App.css'
import Home from './components/Home.jsx'
import {createBrowserRouter,
RouterProvider,}
from "react-router-dom";
import BgChanger from './components/BgChanger.jsx'
import My_gf from './components/My_gf.jsx'
import Breakups from './components/Breakups.jsx'
import Navbar from './components/Navbar.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import App from './App.jsx'

const router= createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"Home",
        element:<Home/>
        
      },
      {
        path:"BgChanger",
        element:<BgChanger/>
        
      },
      {
        path:"My_gf",
        element:<My_gf/>
        
      },
      {
        path:"Breakups",
        element:<Breakups/>
        
      },
      {
        path:"Stopwatch",
        element:<Stopwatch/>
        
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
  
)
