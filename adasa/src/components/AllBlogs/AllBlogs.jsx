import React from 'react'
import data from "../../data/posts.json"
import BlogCard from '../BlogCard/BlogCard';
import { Outlet } from 'react-router-dom';
export default function AllBlogs() {
  return (
    <>
        <Outlet/>
    </>
  )
}
