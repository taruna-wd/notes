
import React from 'react'
import Eraser from './Eraser'
import Calligraphy from './Calligraphy'

function leftTools() {
  return (
    <div className="flex gap-2 justify-center items-center ">
      <div className='p-1 px-2 border '><i className="fa-solid fa-arrow-left"></i></div>
        <Eraser/>
        <Calligraphy/>
    </div>
  )
}

export default leftTools