import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './LayOut/Layout';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Learning from './pages/Learning';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/start-learning',
        element: <Learning></Learning>
      },
      {
        path:'/tutorials',
        element: <Tutorials></Tutorials>
      },
      {
        path:'/about-us',
        element: <Aboutus></Aboutus>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
