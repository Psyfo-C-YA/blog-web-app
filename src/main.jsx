import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePage from './pages/CreatePage.jsx'
import EditPage from './pages/EditPage.jsx'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>,
    // errorElement: < />,
  },
  {
    path: '/createPage',
    element: <CreatePage/>,
    // errorElement: < />,
  },
  {
    path: '/editPage',
    element: <EditPage/>,
    // errorElement: < />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
