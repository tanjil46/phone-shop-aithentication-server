import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root';
import Hoom from './componets/Hoom';
import Errorhandle from './componets/Errorhandle';
import PhoneDetails from './componets/PhoneDetails';
import Favorit from './componets/Favorites';
import Logine from './componets/Login';
import Resisterform from './componets/Resisterform';
import AuthProvider from './componets/AuthProvider';
import PrivateSection from './PrivateSection';
import User from './componets/User';


const router=createBrowserRouter([

  {
    path:'/',
    errorElement:<Errorhandle></Errorhandle>,
    element:<Root></Root>,
    children:[
   {
    path:'/',
    element:<Hoom></Hoom>
   },
   {
    path:'detail/:id',
    loader:()=> fetch('phones.json'),
    element:<PrivateSection><PhoneDetails></PhoneDetails></PrivateSection>
   },
   {
    path:'/fover',
    element:<Favorit></Favorit>
   },
   {
    path:'/login',
    element:<Logine></Logine>
   },
   {
    path:'/resis',
    element:<Resisterform></Resisterform>
   },
   {
    path:'/user',
    loader:()=>fetch('http://localhost:5000/user'),
    element:<User></User>
   }






    ]
  }








]);
















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
