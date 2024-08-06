import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from  './components/Forms/Login.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from './components/Forms/Signup.jsx'
import Reminder from './components/Reminder/Reminder.jsx'
import Archive from './components/Archive/Archive.jsx'
import Trash from './components/Trash/Trash.jsx'
import Layout from './components/layout/Layout.jsx'
import Notes from './components/Notes/Notes.jsx'
import MainBody from './components/MainBody/MainBody.jsx'

// const router = createBrowserRouter ([
//   {
//     path : "/",
//     element : <Layout/>,
   
//   },
//   {
//     path : "/login",
//     element : <Login/>,
   
//   },
//   {
//     path : "/signup",
//     element : <Signup/>,
   
//   },
//   {
//     path : "/reminder",
//     element : <Reminder/>,
   
//   },
//   {
//     path : "/layout",
//     element : <Layout/>,
   
//   }

// ])

const router = createBrowserRouter ( 
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path="notes"  element = {<Notes/>}/> 
      <Route path="reminder"  element = {<Reminder/>}/> 
      <Route path="archive"  element = {<Archive/>}/> 
      <Route path="trash"  element = {<Trash/>}/> 
      {/* <Route path="login"  element = {<Login/>}/> 
      <Route path="signup"  element = {<Signup/>}/>  */}

    </Route>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
