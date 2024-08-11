import React from 'react'



function Archive({archive}) {
  
 
  return (
    <div>
      <div className=''>
      <div className="mt-7 flex flex-wrap">
        <h2>archive list</h2>
        {archive.map((single) => (
            <div key={single.id} className="w-1/4 p-3 border rounded-md shadow-white m-2">
              <p>{single.title}</p>
              <p>{single.content}</p>
            </div>
          ))}

        
       
      </div>
      </div>
    </div>
  )
}

export default Archive