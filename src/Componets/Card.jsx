import React from 'react'
import Button from './Button'

const Card = ({ paste, onDelete, handleClick }) => {
  return (
    <div className='w-full'>
      <div
        key={paste._id}
        className='relative card w-full min-h-60 bg-[#2121217d] 
                   border-[1px] border-zinc-700 mb-5 p-4 sm:p-10 rounded-2xl
                   flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'
      >
        <div className='flex-1'>
          <h3 className='text-xl sm:text-2xl font-semibold mb-3'>
            {paste.Title}
          </h3>
          <p className='line-clamp-3 text-sm sm:text-base'>{paste.content}</p>
        </div>

        {/* Responsive Button Container */}
        <div className='w-full sm:w-auto flex-shrink-0'>
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



