
import React from 'react'
import MainBody from '../MainBody/MainBody'
import { Link } from 'react-router-dom'

function Sidebar({menu}) {


  return (
    <div className='w-1/5 '>
        <div className="w-2/3">
        <div className='w-full cursor-pointer'>
                <div className="flex text-lg items-center p-3 hover:bg-zinc-700 rounded-r-full transition duration-700 ease-in-out m-2 " >
                  <Link to="/notes"> <i className="fa-solid fa-lightbulb px-2 text-lg mr-6 "></i> <span  className=''>Notes</span></Link>
                </div>
                <div className='flex text-lg items-center p-3 hover:bg-zinc-700 rounded-r-full transition duration-700 ease-in-out mb-2 mx-2'>
                  <Link to="/reminder"><i className="fa-solid fa-bell px-2 text-lg mr-6"></i>  <span>Reminders</span> </Link> 
                  </div>
                {/* <div className='flex text-lg items-center p-3 hover:bg-zinc-700 rounded-r-full transition duration-700 ease-in-out mb-2 mx-2'> 
                  <i className="fa-solid fa-pen px-2 text-lg mr-6"></i> <span>Edit labels</span>  
                 </div> */}
                <div className='flex text-lg items-center p-3 hover:bg-zinc-700 rounded-r-full transition duration-700 ease-in-out mb-2 mx-2'> 
                 <Link to='/archive'><i className="fa-solid fa-file-arrow-down px-2 text-lg mr-6"></i>  <span>Archive</span>   </Link> 
                 </div>
                <div className='flex text-lg items-center p-3 hover:bg-zinc-700 rounded-r-full transition duration-700 ease-in-out mb-2 mx-2'>
                 <Link to="/trash"> <i className="fa-solid fa-trash px-2 text-lg mr-6"></i>  <span>Trash</span></Link> 
                 </div>
        </div>
          
        </div>
        
    </div>
  )
}

export default Sidebar
