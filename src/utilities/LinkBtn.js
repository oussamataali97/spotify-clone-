import React from 'react'

function LinkBtn({title,Icon,color}) {
  return (
    <div className='mt-3 flex  items-center hover:text-white ease-linear duration-200 cursor-pointer'>
      {Icon && <Icon color={color}/> }
       {Icon ? <p className='ml-2 font-bold'>  {title}</p> : <h1 className='mt-0'>  {title}</h1>}
    </div>
  )
}

export default LinkBtn