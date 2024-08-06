import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='text-white'>

        <Header/>
        <div className='flex '>
        <Sidebar/>
        <Outlet/>


        </div>
        
    </div>
  )
}

export default Layout