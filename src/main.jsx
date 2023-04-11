import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './Components/About';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import Home from "../src/Components/Home.jsx"
import Friends from './Components/Friends';
import First from './Components/First';
import FriendDeails from "../src/Components/FriendDeails.jsx"
import Post from './Components/Post';
import PostDetails from './Components/PostDetails';
const router = createBrowserRouter([
 {
  path:'/',
  element:<Home></Home>,
  children:[
    {
     path:'/',
     element:<First></First>
    }
    ,{
    
    },
    {
      path:'/friend',
      element:<Friends></Friends>,
      loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),

    },{
      path:"/friend/:id",
      element:<FriendDeails></FriendDeails>,
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    },{
     path:'/post',
     element:<Post></Post>,
     loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
    },{
     path:'/post/:postId',
     element:<PostDetails></PostDetails>,
     loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    },
    {
      path:"/about",
      element:<About></About>
    },{
      path:"/contact",
      element:<Contact></Contact>
    },{
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]
 }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
