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
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext, AuthProvider } from './provider/AuthProvider';
import MyProfile from './pages/MyProfile';
import Others from './pages/Others';



const fetchVocabularies = async () => {
  const response = await fetch("/vocabularies.json");
  if (!response.ok) {
      throw new Error("Failed to fetch vocabularies");
  }
  return response.json();
};


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
        element: <Learning></Learning>,
        loader: fetchVocabularies,
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
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/profile',
        element: <MyProfile></MyProfile>
      },
      {
        path:'/others',
        element: <Others></Others>
      },
    ]

    
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   
  </StrictMode>
)

