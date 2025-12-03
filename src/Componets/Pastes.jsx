import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { removeFrompastes } from '../redux/pasteSlice'
import SharePaste from './SharePaste';

const Pastes = () => {
  const stateval = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = stateval.filter((paste) =>
    (paste.Title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFrompastes(pasteId));
  }

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className='w-full min-h-screen flex items-center justify-around flex-col px-4 py-8'>
        <input
          className='m-5 w-full sm:w-80 h-10 bg-zinc-500 rounded-md p-2 text-black'
          type="text"
          placeholder="Search pastes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className='relative w-full sm:w-[80%] bg-zinc-800 border-[1px] border-zinc-700 rounded-md'>
          <div className='w-full h-auto sm:h-16 p-4 sm:p-5 border-b-[1px] border-zinc-600 text-2xl sm:text-3xl font-bold items-center'>
            All pastes
          </div>
          <div className='w-full items-center justify-center p-4 sm:p-5 overflow-y-auto max-h-[70vh]'>
            {filteredData.length > 0 ? (
              filteredData.map((paste) => (
                <Card
                  key={paste._id}
                  paste={paste}
                  onDelete={handleDelete}
                  handleClick={handleClick}
                />
              ))
            ) : (
              <p>No matching pastes found.</p>
            )}
          </div>
          <SharePaste
            handleClick={handleClick}
            active={active}
            paste={filteredData}
          />
        </div>
      </div>
    </div>
  );
};

export default Pastes;
