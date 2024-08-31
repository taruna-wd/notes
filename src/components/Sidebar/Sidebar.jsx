
import React from 'react'
import { Link } from 'react-router-dom'
import { useNotes } from '../../context/NotesContext'

function Sidebar() {
  const {menu} = useNotes()


  return (
    <div className='w-1/5 '>
        <div className="w-4/5">
          {menu  ? (<div className=' cursor-pointer'>
                <div className=" w-14 flex text-lg  p-3  hover:bg-zinc-700 rounded-full transition duration-700 ease-in-out m-2 " >
                  <Link to="/notes" > <i className="fa-solid fa-lightbulb px-2 text-lg "></i> <span  className=''></span></Link>
                </div>
                
                  <div className='  w-14 flex text-lg items-center p-3 hover:bg-zinc-700 rounded-full transition duration-700 ease-in-out mb-2 m-2'> 
                 <Link to='/reminder'><i className="fa-solid fa-bell px-2 text-lg "></i>  <span></span>   </Link> 
                 </div>
               
                <div className='   w-14 flex text-lg items-center p-3 hover:bg-zinc-700 rounded-full transition duration-700 ease-in-out mb-2 m-2'> 
                 <Link to='/archive'><i className="fa-solid fa-file-arrow-down px-2 text-lg"></i>  <span></span>   </Link> 
                 </div>
                <div className='  w-14 flex text-lg items-center p-3 hover:bg-zinc-700 rounded-full transition duration-700 ease-in-out mb-2 m-2'>
                 <Link to="/trash"> <i className="fa-solid fa-trash px-2 text-lg "></i>  <span></span></Link> 
                 </div>
        </div>) : (
        <div className='w-full cursor-pointer'>
                <div className="flex text-lg items-center p-3 hover:bg-zinc-700 rounded-r-full transition duration-700 ease-in-out m-2 " >
                  <Link to="/notes" > <i className="fa-solid fa-lightbulb px-2 text-lg mr-6 "></i> <span  className=''>Notes</span></Link>
                </div>
                
                  <div className='flex text-lg items-center p-3 hover:bg-zinc-700 rounded-r-full transition duration-700 ease-in-out mb-2 mx-2'> 
                 <Link to='/reminder'><i className="fa-solid fa-bell px-2 text-lg mr-6"></i>  <span>Reminder</span>   </Link> 
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
        </div>)
           }
        </div>
        
    </div>
  )
}

export default Sidebar
