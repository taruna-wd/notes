import React, { useState } from 'react'

function Archive({archive}) {
  // let [archive , setArchive ]  = useState([])


    
  return (
    <div>
      <div className='w-3/5'>
        {/* <h2>Notes List</h2> */}
        <div className='mt-7 flex flex-wrap'>
          {archive.map((newnote ) => (
            <div key={newnote.id} className="w-1/4 p-3 border rounded-md shadow-white m-2">
              <p>{newnote.title}</p>
              <p>{newnote.content}</p>
              <div className='flex justify-around cursor-pointer'>
              <i className="fa-solid fa-ellipsis-vertical"></i>
              {/* <i className="fa-solid fa-trash" onClick={()=>deleteNote(newnote.id)}></i>
              <i className="fa-solid fa-file-arrow-down" onClick={()=>archiveNote(newnote.id)}></i> */}

              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Archive