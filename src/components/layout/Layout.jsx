import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='text-white bg-stone-900 h-screen'>

        <Header/>
        <div className='flex  bg-stone-900'>
        <Sidebar/>
        
        <Outlet/>


        </div>
        
    </div>
  )
}

export default Layout