import React, { useEffect, useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { RxCopy } from "react-icons/rx";

const SharePaste = ({ active, handleClick, paste }) => {
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {

    paste.map((paste) => {
      if (paste && paste._id) {
        const link = `${window.location.origin}?pasteId=${paste._id}`;
        setShareLink(link);
      }
    })
  }, [paste]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    alert(" Link copied to clipboard!");
  };

  return (
    <div>

      <div
        className={`absolute ${!active ? 'hidden' : ''} 
        top-20 left-[35%] w-[30%] bg-zinc-900/90 rounded-2xl p-5 z-10`}
      >
        <h2 className='text-2xl font-medium text-white'>Share link</h2>
        <span className='text-[12px] text-zinc-400'>
          Anyone who has this link will be able to view this.
        </span>


        <div className='flex items-center justify-between gap-3 mt-3'>
          <input
            className='w-[90%] h-8 bg-zinc-700/50 rounded-md p-2  border border-zinc-600 text-white'
            type="text"
            value={shareLink}
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className='w-8 h-8 text-xl text-white rounded-sm border border-zinc-500 flex items-center justify-center hover:bg-zinc-700 hover:text-green-400'
          >
            <RxCopy />
          </button>
        </div>


        <div className='flex items-center justify-between w-[60%] my-5 mx-auto'>
          {/* YouTube */}
          <a href={`https://www.youtube.com/share?url=${encodeURIComponent(shareLink)}`} target='_blank' rel='noreferrer'>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="32" fill="#FF0000"></circle>
              <path d="M26 22l16 10-16 10z" fill="white"></path>
            </svg>
          </a>

          {/* Twitter */}
          <a href={`https://twitter.com/share?url=${encodeURIComponent(shareLink)}`} target='_blank' rel='noreferrer'>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="32" fill="#25A3E3"></circle>
              <path d="M48 22a11 11 0 01-3 1 5 5 0 002-3 10 10 0 01-3 2 5 5 0 00-8 5A14 14 0 0120 20a5 5 0 001 7 5 5 0 01-2-1v1a5 5 0 004 5 5 5 0 01-2 0 5 5 0 004 3A10 10 0 0120 39a14 14 0 007 2c8 0 13-7 13-13v-1A10 10 0 0048 22z" fill="white"></path>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`} target='_blank' rel='noreferrer'>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="32" fill="#25D366"></circle>
              <path d="M32 15a17 17 0 00-14 26l-1 8 8-2a17 17 0 007 2 17 17 0 000-34z" fill="white"></path>
            </svg>
          </a>

          {/* Facebook */}
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`} target='_blank' rel='noreferrer'>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="32" fill="#0965FE"></circle>
              <path d="M34 47V33h4l1-5h-5v-3c0-1 0-3 3-3h2v-5h-4c-4 0-6 2-6 6v5h-4v5h4v14z" fill="white"></path>
            </svg>
          </a>
        </div>


        <button
          onClick={handleClick}
          className="absolute top-3 right-3 text-2xl text-white hover:text-red-500"
        >
          <IoIosClose />
        </button>
      </div>
    </div>
  );
};

export default SharePaste;
