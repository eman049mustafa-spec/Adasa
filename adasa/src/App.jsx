import { useState } from 'react'
import './App.css'
import MainLayOut from './layOuts/MainLayOut'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/home/Home';
import Blogs from './pages/Blogs/Blogs';
import CategoriesNav from './components/CategoriesNav/CategoriesNav';
import AllBlogs from './components/AllBlogs/AllBlogs';
import LightingBlogs from './components/LightingBlogs/LightingBlogs';
import PortraitBlogs from './components/PortraitBlogs/PortraitBlogs';
import LandscapesBlogs from './components/LandscapesBlogs/LandscapesBlogs';
import TechniquesBlogs from './components/TechniquesBlogs/TechniquesBlogs';
import EquipmentBlogs from './components/EquipmentBlogs/EquipmentBlogs';
import NumberedButtomNav from './components/NumberedButtomNav/NumberedButtomNav';
import data from "./data/posts.json"
const router = createBrowserRouter([
  {path: "/" , element: <MainLayOut/> , children: [
    {index: true , element: <Home/>},
    {path: "blogs" , element: <Blogs/> , children: [
      {path: "", element: <CategoriesNav/> , children: [
        {path:"" , element: <AllBlogs/> , children:[
            {path:"", element: <NumberedButtomNav categIndex={0} path={""}/> }
        ]},
        {path:"lighting" , element: <LightingBlogs/> , children:[
            {path:"lighting", element: <NumberedButtomNav categIndex={1} path={"lighting"}/>}
        ]},
        {path:"portrait" , element: <PortraitBlogs/> , children:[
            {element: <NumberedButtomNav categIndex={2}/> , children:[]}
        ]},
        {path:"landscapes" , element: <LandscapesBlogs/> , children:[
            {element: <NumberedButtomNav categIndex={3}/> , children:[]}
        ]},
        {path:"techniques" , element: <TechniquesBlogs/> , children:[
            {element: <NumberedButtomNav categIndex={4}/> , children:[]}
        ]},
        {path:"equipment" , element: <EquipmentBlogs/> , children:[
            {element: <NumberedButtomNav categIndex={5}/> , children:[]}
        ]},
        {path:"*", element: <h1 className='text-center mt-5'>Not Found</h1>}
      ]}
    ]},
    {path:"*", element: <h1 className='text-center mt-5'>Not Found</h1>}
  ]}
])

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}


