import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Index from './Index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calculator from './assets/calculator/Calculator';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Calculator />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
