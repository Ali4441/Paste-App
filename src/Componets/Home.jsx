import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import { addToPastes, updateTopastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPath() {
    const paste = {
      Title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),

      formattedDate: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };


    if (pasteId) {
      dispatch(updateTopastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    // reset form
    setTitle('');
    setValue('');
    setSearchParams({});



  }




  return (
    <div>
      <div className='w-full flex items-start justify-around flex-row'>
        <input
          className='w-[40%] p-2 rounded-md mt-2 bg-zinc-400 text-black'
          type="text"
          placeholder='Enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <NavLink to="/pastes">
          <button
            onClick={createPath}
            className='w-[8rem] h-[3rem] bg-green-600 rounded-md items-center'
          >
            {pasteId ? "Update My Paste" : "Create My Paste"}
          </button>
        </NavLink>
      </div>

      <div className='flex items-start justify-around m-5'>
        <textarea
          placeholder='Enter Your content'
          value={value}
          rows={20}
          onChange={(e) => setValue(e.target.value)}
          className=' p-2 rounded-md mt-2 bg-zinc-60/90 min-w-[80%] text-white border border-zinc-500'
        />
      </div>
    </div>
  );
};

export default Home;
