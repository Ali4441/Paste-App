import React from 'react'
import Button from './Button'


const Card = ({ paste, onDelete, handleClick }) => {
  return (
    <div>
      <div key={paste._id} className=' relative cared w-full min-h-60  bg-[#2121217d] border-[1px] border-zinc-700 mb-5 p-5 rounded-2xl  '>
        <h3 className='text-2xl font-semibold m-3'> {paste.Title}  </h3>
        <p className='w-[80%] h-full '>{paste.content}</p>
        <div className='absolute w-[200px] h-[200px] top-5 right-5'>

          <Button
            formattedDate={paste.formattedDate}
            onDelete={onDelete}
            paste={paste}
            handleClick={handleClick}
          />

        </div>
      </div>
    </div>
  )
}
export default Card


