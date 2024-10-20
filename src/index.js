import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./../src/views/HOME/Home"
import Add from "./../src/views/ADD/Add"
import Show from "./../src/views/SHOW/Show"
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Add",
    element: <Add/>
  }, {
    path: "/Show",
    element: <Show/>
  }
])
root.render(
  <>
  <Toaster/>
<RouterProvider router={router}/>
</>
);