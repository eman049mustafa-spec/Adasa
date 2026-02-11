import { useState } from 'react'
import './App.css'
import MainLayOut from './layOuts/MainLayOut'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/home/Home';
import Blogs from './pages/Blogs/Blogs';

const router = createBrowserRouter([
  {path: "/" , element: <MainLayOut/> , children: [
    {index: true , element: <Home/>},
    {path: "blogs" , element: <Blogs/>},
  ]}
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
