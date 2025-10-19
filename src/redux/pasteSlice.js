import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
  name: 'paste',

  initialState: {
    pastes: localStorage.getItem("pastes")
      ? JSON.parse(localStorage.getItem("pastes"))
      : [],
  },

  reducers: {
    //  Add new paste
    addToPastes: (state, action) => {
      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      //create_toast
      toast.success("Paste created successfully!");
    },

    //  Update paste
    updateTopastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(item => item._id === updatedPaste._id);

      if (index >= 0) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        //update_tost
        toast.success("Paste updated successfully!");
      }
    },

    //  Remove paste
    removeFrompastes: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter(item => item._id !== pasteId);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      //create_toast
      toast.success("Paste deleted successfully!");
    },

    // Reset all pastes
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      //create_toast
      toast.success("All pastes cleared!");
    },
  },
});

export const {
  addToPastes,
  updateTopastes,
  removeFrompastes,
  resetAllPastes
} = pasteSlice.actions;

export default pasteSlice.reducer;
