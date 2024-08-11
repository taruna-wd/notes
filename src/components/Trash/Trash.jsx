
import React, { useState } from 'react'

function Trash({trashNote ,setTrashNote}) {
  console.log(trashNote)
 
  let handledelete = (id) =>{
    setTrashNote( trashNote.filer((note)=>note.id !== id))
  }
  
  return (
    <div className='w-4/5'>
       <div  className="w-full  p-3  rounded-md shadow-white mt-6 flex">
        <h2>trash list</h2>
        {trashNote.map((single) => (
            <div key={single.id} className="w-full p-3 border rounded-md shadow-white m-2">
              <p>{single.title}</p>
              <p>{single.content}</p>
              <div className='flex justify-between cursor-pointer
              '>
              <i className="fa-solid fa-trash" onClick={()=> handledelete(trashNote.id)} ></i>
                <i class="fa-solid fa-trash-can-arrow-up"></i>
                              </div>
             
            </div>
          ))}

        
       
      </div>   
             
      </div>
      

  )
}

export default Trash


