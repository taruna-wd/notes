
import React from 'react'

function Trash() {
  return (
    <div className='w-4/5'>
       <div  className="w-1/4  p-3 border rounded-md shadow-white mt-6">
              empty
              <p>content</p>
              <div className='flex justify-around cursor-pointer'>

              {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
              <i className="fa-solid fa-trash"></i>
              <i className="fa-solid fa-file-arrow-down"></i>

              </div>
             
            </div>
    </div>
  )
}

export default Trash