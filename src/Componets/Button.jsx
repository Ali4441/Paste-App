import React from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiUploadSimple } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import { RxCopy } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import toast from 'react-hot-toast';

import SharePaste from './SharePaste';
import { NavLink } from 'react-router-dom';
const Button = ({ formattedDate, paste, onDelete, handleClick }) => {

  const copyHandle = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Copy successfull");
  }



  return (
    <div>
      <div className='flex items-center justify-center
       gap-2 mb-5'>
        <NavLink to={`/?pasteId=${paste._id}`}>
          <button
            className='w-8 h-9  text-xl text-white rounded-sm border-[1px] border-zinc-500 flex items-center justify-center hover:text-blue-600'>
            <CiEdit />
          </button></NavLink>


        <button onClick={() => onDelete(paste._id)}
          className='w-8 h-9   text-xl text-white rounded-sm border-[1px] border-zinc-500 flex items-center justify-center hover:text-red-500'>
          <RiDeleteBin5Line />
        </button>

        <button
          onClick={handleClick}
          className='w-8 h-9 sharebtn  text-xl text-white rounded-sm border-[1px] border-zinc-500 flex items-center justify-center hover:text-yellow-400'>
          <PiUploadSimple />
        </button>

        <button
          className='w-8 h-9   text-xl text-white rounded-sm border-[1px] border-zinc-500 flex items-center justify-center hover:text-blue-300'>
          <GrView />
        </button>

        <button onClick={copyHandle}
          className='w-8 h-9  text-xl text-white rounded-sm border-[1px] border-zinc-500 flex items-center justify-center hover:text-green-400'>
          <RxCopy />
        </button>

      </div>
      <div className='flex items-center justify-center flex-row gap-3'>
        <SlCalender />
        <span>{formattedDate}</span>
      </div>


    </div>
  )
}
export default Button
