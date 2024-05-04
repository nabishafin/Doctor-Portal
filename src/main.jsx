import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import About from './Components/Pages/About/About.jsx';
import Appointment from './Components/Pages/Appointment/Appointment.jsx';
import Reviews from './Components/Pages/Reviews/Reviews.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';
import LogIn from './Components/Pages/LogIn/LogIn.jsx';
import SingUp from './Components/Pages/LogIn/SingUp.jsx';
import Doctors from './Components/Pages/Doctors/Doctors.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/appointment',
        element: <Appointment />
      },
      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/singup',
        element: <SingUp />
      },
      {
        path: '/doctors',
        element: <Doctors />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
