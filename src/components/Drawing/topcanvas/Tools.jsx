
import React from 'react'
import RightTools from './RightTools/RightTools'
import LeftTools from './LeftTools/LeftTools'

function Tools() {
  return (
    <div className='bg-white flex h-9 bg-slate-950'>
        <LeftTools/>
        <RightTools/>

    </div>
  )
}

export default Tools