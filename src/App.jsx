import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Componets/Navbar'
import Home from './Componets/Home'
import Pastes from './Componets/Pastes'
import ViewPaste from './Componets/ViewPaste'

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
        <Home />

      </div>
  },

  {

    path: "/pastes",
    element:
      <div>
        <Navbar />
        <Pastes />

      </div>
  },
  {
    path: "/pastes/:id",
    element:
      <div>
        <Navbar />
        <ViewPaste />

      </div>
  },
  {
    path: "/ViewPaste",
    element:
      <div>
        <Navbar />
        <ViewPaste />

      </div>
  },

])
const App = () => {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
