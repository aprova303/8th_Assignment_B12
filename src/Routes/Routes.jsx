import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Roots/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppPage from '../Pages/AppPage/AppPage';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Installation from '../Pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,

    children:[{
       index:true,
       loader:()=>fetch('/appData.json'),
       path:'/',
       Component:Home,
       },
       {
        path:'/AppPage',
        Component:AppPage,
       },
       {
        path:'/AppDetails/:id',
       Component:AppDetails,
       },
       {
        path:'/Installation',
        Component:Installation,
       }
      
      ]
  },
]);