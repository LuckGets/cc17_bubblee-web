import React from 'react'

function CarImageCard({src}) {
  return (
    <div className='max-w-[15rem]'>
      <img className='rounded-lg' src={src}/>
    </div>
  )
}

export default CarImageCard