import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCoffee from './Components/AddCoffee/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/UpdateCoffee",
    element:<UpdateCoffee></UpdateCoffee> ,
  },
  {
    path: "/updateCoffee",
    // element: 
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
